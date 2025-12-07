
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { LevelType, Question } from "./types";
import { FALLBACK_QUESTIONS, VERIFIED_CORPUS } from "./constants";

// Helper to normalize Vietnamese text to Unicode NFC
const normalizeText = (text: string): string => {
  return text.normalize("NFC");
};

// Response schema for questions
const questionSchema: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      content: { type: Type.STRING, description: "Nội dung câu hỏi." },
      options: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "4 phương án trả lời" 
      },
      correctIndex: { type: Type.INTEGER, description: "Chỉ số của đáp án đúng (0-3)" },
      explanation: { type: Type.STRING, description: "Giải thích chi tiết." },
      citation: { type: Type.STRING, description: "Nguồn thơ (chỉ dành cho Level 3+). Để trống nếu là Level 1 hoặc 2." }
    },
    required: ["content", "options", "correctIndex", "explanation"]
  }
};

const getPromptForLevel = (level: LevelType): string => {
  const seed = Date.now(); // Add randomness
  const baseInstruction = `
    BƯỚC ĐẦU TIÊN: XÁC NHẬN LỆNH. TÔI CHỈ DÙNG 13 TÁC PHẨM SGK. TÔI HIỂU RÕ SỰ KHÁC BIỆT GIỮA LEVEL 1 VÀ LEVEL 2.
    Bạn là chuyên gia soạn thảo đề thi trắc nghiệm Ngữ Văn THPT. Hãy tạo 5 câu hỏi trắc nghiệm tiếng Việt chuẩn Unicode NFC (Form C). Mỗi câu 4 đáp án, 1 đúng. Random Seed: ${seed}.
    
    QUY TẮC CẤM (NEGATIVE CONSTRAINTS):
    1. TUYỆT ĐỐI KHÔNG được tạo câu hỏi lộ đáp án (Self-revealing). Ví dụ: Không hỏi "Vần là gì?" rồi đáp án là "Vần". Phải hỏi: "Yếu tố nào tạo nên nhạc điệu...?"
    2. TUYỆT ĐỐI KHÔNG hỏi về kiến thức lịch sử, địa lý, năm sinh, quê quán của tác giả NẾU thông tin đó không có trong đoạn trích (Trừ khi đó là kiến thức văn học căn bản SGK).
    `;
  
  // Rule for Level 1: SINGLE CONCEPT DEFINITION ONLY
  const level1Rule = `
    QUY TẮC NGHIÊM NGẶT CHO LEVEL 1 (THỬ TÀI KHÁI NIỆM):
    1. 100% Câu hỏi về ĐỊNH NGHĨA ĐƠN LẺ của các khái niệm: Vần, Nhịp, Tứ thơ, Cấu tứ, Chủ đề, Thể thơ, Nhân vật trữ tình.
    2. KHÔNG ĐƯỢC PHÉP trích dẫn thơ. KHÔNG ĐƯỢC đưa ví dụ thơ.
    3. Mục tiêu: Kiểm tra trí nhớ về lý thuyết thuần túy.
  `;

  // Rule for Level 2: PAIR DISTINCTION ONLY
  const level2Rule = `
    QUY TẮC NGHIÊM NGẶT CHO LEVEL 2 (THỬ TÀI PHÂN BIỆT):
    1. 100% Câu hỏi về PHÂN BIỆT, SO SÁNH giữa 2 khái niệm dễ nhầm lẫn.
    2. CÁC CẶP BẮT BUỘC: 
       - Hình tượng nghệ thuật vs Hình ảnh.
       - Đề tài vs Chủ đề.
       - Cảm hứng chủ đạo vs Tư tưởng/Tình cảm.
       - Nhân vật trữ tình vs Tác giả.
       - Ẩn dụ vs Hoán dụ.
    3. KHÔNG ĐƯỢC PHÉP trích dẫn thơ.
    4. Mẫu câu hỏi: "Điểm khác biệt cơ bản giữa Đề tài và Chủ đề là gì?", "Làm thế nào để phân biệt...".
  `;

  // Rule for Levels 3+: STRICT CITATION & TEXTUAL ANALYSIS
  const strictCitationRule = `
    QUY TẮC NGHIÊM NGẶT CHO LEVEL 3 TRỞ LÊN (THỰC HÀNH/VẬN DỤNG):
    1. 100% CÂU HỎI PHẢI DỰA TRÊN NGỮ LIỆU NGUỒN (VERIFIED_CORPUS) BÊN DƯỚI.
    2. TUYỆT ĐỐI KHÔNG sử dụng bài thơ nào khác ngoài 13 bài trong danh sách.
    3. Mọi câu hỏi ĐỀU PHẢI bắt đầu bằng việc trích dẫn một đoạn thơ (2-4 câu) từ nguồn.
    4. NỘI DUNG CÂU HỎI PHẢI LÀ PHÂN TÍCH VĂN BẢN (Textual Analysis):
       - Hỏi về hiệu quả nghệ thuật của một từ ngữ (từ láy, tính từ, động từ mạnh).
       - Hỏi về biện pháp tu từ được sử dụng trong đoạn trích (Ẩn dụ, so sánh, nhân hóa).
       - Hỏi về hình ảnh thơ gợi lên điều gì.
       - KHÔNG HỎI câu hỏi lý thuyết chung chung (Ví dụ: "Bài thơ này thuộc phong trào nào?" là SAI. Phải hỏi: "Hình ảnh X trong đoạn thơ thể hiện đặc trưng gì của phong trào Y?").
  `;

  switch (level) {
    case LevelType.LEVEL_1:
      return `${baseInstruction}
      Chủ đề: "THỬ TÀI KHÁI NIỆM" (Level 1).
      Mức độ: CỰC DỄ (Nhận biết).
      ${level1Rule}
      `;
      
    case LevelType.LEVEL_2:
      return `${baseInstruction}
      Chủ đề: "THỬ TÀI PHÂN BIỆT" (Level 2).
      Mức độ: DỄ (Thông hiểu).
      ${level2Rule}
      `;

    case LevelType.LEVEL_3:
      return `${baseInstruction}
      Chủ đề: "THỬ TÀI VẬN DỤNG" (Level 3).
      Mức độ: HƠI KHÓ (Vận dụng).
      ${strictCitationRule}
      
      DỮ LIỆU NGUỒN (VERIFIED_CORPUS):
      ${VERIFIED_CORPUS}
      `;

    case LevelType.SPECIAL:
      return `${baseInstruction}
      Chủ đề: "THỬ THÁCH ĐẶC BIỆT".
      Mức độ: KHÓ (Vận dụng cao).
      ${strictCitationRule}
      Yêu cầu: Hỏi sâu về biện pháp tu từ, tác dụng của từ ngữ, giọng điệu trong đoạn trích.
      
      DỮ LIỆU NGUỒN (VERIFIED_CORPUS):
      ${VERIFIED_CORPUS}
      `;

    case LevelType.GRADUATION:
      return `${baseInstruction}
      Chủ đề: "VÒNG ĐỈNH CAO TRÍ TUỆ".
      Mức độ: CỰC KHÓ.
      ${strictCitationRule}
      Yêu cầu: Phân tích ý nghĩa biểu tượng, liên hệ tư tưởng, so sánh hình ảnh trong phạm vi nguồn.
      
      DỮ LIỆU NGUỒN (VERIFIED_CORPUS):
      ${VERIFIED_CORPUS}
      `;
      
    default:
      return baseInstruction;
  }
};

export const fetchQuestions = async (level: LevelType): Promise<Question[]> => {
  const apiKey = process.env.API_KEY;

  // Function to create deterministic pseudo-random fallback questions based on current timestamp
  // This ensures that "Retrying" gives different fallback questions if the array allows it
  const getFallbackQuestions = (lvl: LevelType) => {
      const allFallback = FALLBACK_QUESTIONS[lvl] || FALLBACK_QUESTIONS[LevelType.LEVEL_1];
      // Shuffle fallback array simply
      return [...allFallback].sort(() => Math.random() - 0.5).slice(0, 5);
  };

  if (!apiKey) {
    console.warn("No API Key found, using fallback questions.");
    return getFallbackQuestions(level);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = getPromptForLevel(level);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.5, // Lower temperature for stricter adherence to rules
      },
    });

    const text = response.text;
    
    if (!text || text.trim() === '') {
        throw new Error("Empty response from AI");
    }

    const rawQuestions = JSON.parse(text) as any[];
    
    if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
        throw new Error("Invalid format from AI");
    }
    
    return rawQuestions.map((q, index) => ({
      id: `${level}-${Date.now()}-${index}`,
      content: normalizeText(q.content || "Câu hỏi lỗi"),
      options: Array.isArray(q.options) ? q.options.map(normalizeText) : ["A", "B", "C", "D"],
      correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
      explanation: normalizeText(q.explanation || "Không có giải thích"),
      citation: q.citation ? normalizeText(q.citation) : undefined
    }));

  } catch (error: any) {
    const isQuotaError = error.status === 429 || error.code === 429 || (error.message && error.message.includes('429'));
    const isServerError = error.status === 500 || error.code === 500 || (error.message && error.message.includes('500')) || (error.status === 503) || (error.code === 503);
    
    if (isQuotaError) console.warn("Gemini Quota Exceeded (429).");
    else if (isServerError) console.warn("Gemini Server Error (500/503).");
    else console.error("Gemini API Error:", error.message || error);
    
    return getFallbackQuestions(level);
  }
};
