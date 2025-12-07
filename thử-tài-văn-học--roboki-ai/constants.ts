
import { LevelType, Question } from "./types";

// Placeholder for Roboki Logo
export const ROBOKI_LOGO_URL = "https://github.com/bichhai85-lab/Roboki/blob/main/bi%E1%BB%83u%20t%C6%B0%E1%BB%A3ng%20roboki.jpg?raw=true";

// Sound URLs
export const SOUNDS = {
  // Main Victory Sound
  CORRECT: "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3", 
  // Layer: Magic Sparkle (adds high-frequency shimmer/reverb feel)
  CORRECT_LAYER: "https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3",
  
  // Main Wrong Sound (Funny cartoon fail)
  WRONG: "https://assets.mixkit.co/active_storage/sfx/2834/2834-preview.mp3",
  // Layer: Low Thud/Bonk (adds impact/depth)
  WRONG_LAYER: "https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3",

  // Level Victory Sound
  VICTORY_LEVEL: "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3",

  // Certificate Sound (Grand orchestral hit or fanfare)
  CERTIFICATE_SOUND: "https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3",
  
  // Background Music (Kịch tính)
  BGM_EPIC: "https://assets.mixkit.co/active_storage/sfx/1004/1004-preview.mp3"
};

export const VERIFIED_CORPUS = `
1. SÓNG (Xuân Quỳnh - 1967)
Văn bản gốc (Trích): 
"Dữ dội và dịu êm / Ồn ào và lặng lẽ / Sông không hiểu nổi mình / Sóng tìm ra tận bể... 
Em không biết sóng bắt đầu từ đâu / Em không biết khi nào ta có yêu nhau... 
Làm sao tan được giữa muôn trùng sóng bể / Để ngàn năm còn vỗ mãi tên anh"
Tiểu dẫn/Chú thích: Sáng tác 1967 tại Diêm Điền. Hình tượng Sóng là ẩn dụ cho tâm hồn người phụ nữ đang yêu.

2. ĐẤT NƯỚC (Trích Trường ca Mặt đường khát vọng - Nguyễn Khoa Điềm)
Văn bản gốc (Trích): 
"Đất Nước là nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm... 
Đất Nước là máu xương của mình / Phải biết gắn bó và san sẻ"
Tiểu dẫn/Chú thích: Sáng tác 1971. Tư tưởng: "Đất Nước của Nhân dân". Đất Nước là sự kết tinh của công sức và máu xương bao thế hệ.

3. SANG THU (Hữu Thỉnh - 1977)
Văn bản gốc (Trích): 
"Bỗng nhận ra hương ổi / Phả vào trong gió se / Sương chùng chình qua ngõ / Hình như thu đã về... 
Có đám mây mùa hạ / Vắt nửa mình sang thu."
Tiểu dẫn/Chú thích: Sương chùng chình (ngập ngừng); Dềnh dàng (chậm rãi). Thể hiện sự cảm nhận tinh tế về biến chuyển khi sang thu.

4. CẢNH NGÀY XUÂN (Trích Truyện Kiều - Nguyễn Du)
Văn bản gốc (Trích): 
"Ngày xuân con én đưa thoi, / Thiều quang chín chục đã ngoài sáu mươi. / Cỏ non xanh tận chân trời, / Cành lê trắng điểm một vài bông hoa. / Thanh minh trong tiết tháng ba, / Lễ là tảo mộ hội là đạp thanh."
Tiểu dẫn/Chú thích: Thiều quang (ánh sáng đẹp mùa xuân); Đạp thanh (đi dạo trên cỏ). Tác phẩm thuộc Phạm vi công cộng.

5. ĐÂY THÔN VĨ DẠ (Hàn Mặc Tử - 1938)
Văn bản gốc (Trích): 
"Sao anh không về chơi thôn Vĩ? / Nhìn nắng hàng cau nắng mới lên / Vườn ai mướt quá xanh như ngọc / Lá trúc che ngang mặt chữ điền... 
Áo em trắng quá nhìn không ra / Ở đây sương khói mờ nhân ảnh / Ai biết tình ai có đậm đà?"
Tiểu dẫn/Chú thích: Sáng tác 1938. Vĩ Dạ là vùng quê ven sông Hương, Huế. Thể hiện tình yêu thiên nhiên và khao khát giao cảm với đời.

6. BẾP LỬA (Bằng Việt - 1963)
Văn bản gốc (Trích): 
"Một bếp lửa chờn vờn sương sớm / Một bếp lửa ấp iu nồng đượm. / Cháu thương bà biết mấy nắng mưa... 
Ôi kì lạ và thiêng liêng – bếp lửa!"
Tiểu dẫn/Chú thích: Sáng tác 1963 tại nước ngoài. Hình tượng Bếp lửa gắn với người bà, là sức sống và niềm tin.

7. VỘI VÀNG (Xuân Diệu)
Văn bản gốc (Trích): 
"Tôi muốn tắt nắng đi / Cho màu đừng nhạt mất; / Tôi muốn buộc gió lại / Cho hương đừng bay đi... 
Mau đi thôi! Mùa chưa ngả chiều hôm, / Ta muốn ôm cả sự sống mới bắt đầu mơn mởn;"
Tiểu dẫn/Chú thích: Thể hiện khát vọng sống mãnh liệt, cuồng nhiệt; muốn níu giữ vẻ đẹp và tuổi trẻ.

8. ĐOÀN THUYỀN ĐÁNH CÁ (Huy Cận - 1958)
Văn bản gốc (Trích): 
"Mặt trời xuống biển như hòn lửa. / Sóng đã cài then, đêm sập cửa. / Đoàn thuyền đánh cá lại ra khơi, / Câu hát căng buồm cùng gió khơi... 
Biển cho ta cá như lòng mẹ."
Tiểu dẫn/Chú thích: Sáng tác 1958 tại Quảng Ninh. Nhân hóa: "Sóng đã cài then, đêm sập cửa". Ca ngợi thiên nhiên và người lao động mới.

9. CHỊ EM THÚY KIỀU (Trích Truyện Kiều - Nguyễn Du)
Văn bản gốc (Trích): 
"Đầu lòng hai ả tố nga, / Thúy Kiều là chị em là Thúy Vân... / Vân xem trang trọng khác vời, / Khuôn trăng đầy đặn nét ngài nở nang... 
Kiều càng sắc sảo mặn mà, / So bề tài sắc lại là phần hơn. / Làn thu thủy nét xuân sơn."
Tiểu dẫn/Chú thích: Tác phẩm thuộc Phạm vi công cộng. Ước lệ: Làn thu thủy nét xuân sơn (mắt đẹp như nước thu, lông mày đẹp như núi xuân).

10. ÁNH TRĂNG (Nguyễn Duy - 1978)
Văn bản gốc (Trích): 
"Hồi nhỏ sống với đồng / với sông rồi với bể / hồi chiến tranh ở rừng / vầng trăng thành tri kỉ... 
Trăng cứ tròn vành vạnh / ánh trăng im phăng phắc / đủ cho ta giật mình."
Tiểu dẫn/Chú thích: Sáng tác 1978. Vầng trăng là biểu tượng của quá khứ, là lời nhắc nhở về sự thủy chung.

11. TRÀNG GIANG (Huy Cận)
Văn bản gốc (Trích): 
"Sóng gợn tràng giang buồn điệp điệp, / Con thuyền xuôi mái nước song song... / Củi một cành khô lạc mấy dòng... 
Lòng quê dợn dợn vời con nước, / Không khói hoàng hôn cũng nhớ nhà."
Tiểu dẫn/Chú thích: Tràng giang (sông dài); Buồn điệp điệp (buồn chồng chất). Thể hiện nỗi buồn cô đơn trước thiên nhiên và tình yêu quê hương.

12. TÂY TIẾN (Quang Dũng - 1948)
Văn bản gốc (Trích): 
"Sông Mã xa rồi Tây Tiến ơi! / Nhớ về rừng núi nhớ chơi vơi... / Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm... 
Đêm mơ Hà Nội dáng kiều thơm."
Tiểu dẫn/Chú thích: Sáng tác 1948. Khắc họa vẻ đẹp bi tráng và lãng mạn của người lính.

13. CHIẾC LÁ ĐẦU TIÊN (Hoàng Nhuận Cầm)
Văn bản gốc (Trích): 
"Em thấy không, tất cả đã xa rồi / Trong tiếng thở của thời gian rất khẽ... / Và con ve kim / Cũng đã đi qua những quãng đời xưa... 
Thôi đã hết rồi thời bím tóc trắng ngời / Hết thời cằm khoác khăn quàng len bên ghế cũ"
Tiểu dẫn/Chú thích: Thể hiện cảm xúc tiếc nuối, hoài niệm về thời gian, về tuổi học trò và tình yêu trong sáng.
`;

export const FALLBACK_QUESTIONS: Record<LevelType, Question[]> = {
  [LevelType.LEVEL_1]: [
    {
      id: "L1-1",
      content: "\"Vần\" trong thơ có vai trò chính là gì?",
      options: ["Tạo nên âm hưởng, nhạc điệu và sự liên kết", "Mô tả hành động của nhân vật", "Quy định số lượng từ trong câu", "Là tiêu đề của bài thơ"],
      correctIndex: 0,
      explanation: "Vần là sự trùng hợp về âm thanh (thường ở cuối dòng thơ), có vai trò tạo nhạc điệu và gắn kết các dòng thơ với nhau."
    },
    {
      id: "L1-2",
      content: "Khái niệm \"Tứ thơ\" được hiểu là gì?",
      options: ["Cấu trúc hình thức của bài thơ", "Ý tưởng nghệ thuật bao trùm, chi phối toàn bài", "Cách gieo vần của bài thơ", "Số câu trong một khổ thơ"],
      correctIndex: 1,
      explanation: "Tứ thơ là ý tưởng nghệ thuật xuyên suốt, là cái 'xương sống' chi phối cấu trúc, hình ảnh và cảm xúc của toàn bộ bài thơ."
    },
    {
      id: "L1-3",
      content: "\"Chủ đề\" của tác phẩm thơ là gì?",
      options: ["Tên gọi của tác giả", "Vấn đề cơ bản, trung tâm được đặt ra trong tác phẩm", "Hoàn cảnh sáng tác cụ thể", "Địa điểm sáng tác"],
      correctIndex: 1,
      explanation: "Chủ đề là vấn đề chủ yếu, trung tâm mà tác giả muốn thể hiện và gửi gắm qua văn bản nghệ thuật."
    },
    {
      id: "L1-4",
      content: "\"Biện pháp tu từ\" là gì?",
      options: ["Cách viết sai ngữ pháp cố ý", "Cách sử dụng ngôn ngữ đặc biệt để tăng sức gợi hình, gợi cảm", "Việc sử dụng nhiều từ láy", "Cách chấm câu trong thơ"],
      correctIndex: 1,
      explanation: "Biện pháp tu từ là cách vận dụng ngôn ngữ một cách nghệ thuật (như so sánh, ẩn dụ...) để tăng hiệu quả diễn đạt."
    },
    {
      id: "L1-5",
      content: "Khái niệm \"Nhân vật trữ tình\" trong thơ là ai?",
      options: ["Người đọc bài thơ", "Người được nhắc đến trong thơ", "Chủ thể bộc lộ cảm xúc, suy ngẫm trong bài thơ", "Nhà phê bình văn học"],
      correctIndex: 2,
      explanation: "Nhân vật trữ tình là người trực tiếp bộc lộ rung động, cảm xúc trong thơ (thường là cái tôi của tác giả hoặc vai tác giả đóng)."
    }
  ],
  [LevelType.LEVEL_2]: [
    {
      id: "L2-1",
      content: "Điểm khác biệt cơ bản nhất giữa \"Hình tượng nghệ thuật\" và \"Hình ảnh thơ\" là gì?",
      options: ["Hình tượng mang tính khái quát lớn hơn, chứa đựng nhiều hình ảnh", "Hình ảnh lớn hơn hình tượng", "Hai khái niệm hoàn toàn giống nhau", "Hình ảnh chỉ có trong văn xuôi"],
      correctIndex: 0,
      explanation: "Hình tượng nghệ thuật là khách thể đời sống được nghệ thuật hóa ở tầm khái quát; còn hình ảnh thơ là chi tiết cụ thể cấu thành nên hình tượng đó."
    },
    {
      id: "L2-2",
      content: "Phân biệt \"Đề tài\" và \"Chủ đề\" trong tác phẩm văn học?",
      options: ["Đề tài là vấn đề cốt lõi, Chủ đề là phạm vi hiện thực", "Đề tài là phạm vi hiện thực được phản ánh, Chủ đề là vấn đề tư tưởng cốt lõi", "Cả hai đều là tên tác phẩm", "Đề tài hẹp hơn chủ đề"],
      correctIndex: 1,
      explanation: "Đề tài trả lời câu hỏi 'Viết về cái gì?' (Phạm vi hiện thực), còn Chủ đề trả lời 'Vấn đề gì?' (Tư tưởng toát ra từ hiện thực đó)."
    },
    {
      id: "L2-3",
      content: "Sự khác nhau giữa \"Cảm hứng chủ đạo\" và \"Tư tưởng của tác giả\"?",
      options: ["Không có gì khác nhau", "Cảm hứng chủ đạo là trạng thái tình cảm mãnh liệt bao trùm; Tư tưởng là nhận thức lý trí", "Tư tưởng chỉ xuất hiện ở kết bài", "Cảm hứng chủ đạo chỉ dành cho thơ tình"],
      correctIndex: 1,
      explanation: "Cảm hứng chủ đạo là trạng thái cảm xúc, tinh thần bao trùm tác phẩm; trong khi tư tưởng là hệ thống quan điểm, nhận thức của tác giả."
    },
    {
      id: "L2-4",
      content: "Mối quan hệ và sự khác biệt giữa \"Nhân vật trữ tình\" và \"Tác giả\"?",
      options: ["Họ là một người duy nhất", "Nhân vật trữ tình là sự hóa thân nghệ thuật, không hoàn toàn đồng nhất với tác giả ngoài đời", "Tác giả luôn đứng ngoài tác phẩm", "Nhân vật trữ tình là người đọc"],
      correctIndex: 1,
      explanation: "Nhân vật trữ tình là 'cái tôi' trong nghệ thuật, có mối liên hệ mật thiết nhưng không phải lúc nào cũng là bản sao y hệt của tác giả ngoài đời thực."
    },
    {
      id: "L2-5",
      content: "Phân biệt cơ chế của \"Ẩn dụ\" và \"Hoán dụ\"?",
      options: ["Ẩn dụ dựa trên tương đồng (giống nhau), Hoán dụ dựa trên tương cận (gần nhau)", "Ẩn dụ dựa trên tương cận, Hoán dụ dựa trên tương đồng", "Ẩn dụ dùng từ 'như', Hoán dụ thì không", "Cả hai đều không có quy luật"],
      correctIndex: 0,
      explanation: "Ẩn dụ gọi tên sự vật này bằng tên sự vật khác dựa trên nét tương đồng (giống nhau). Hoán dụ dựa trên quan hệ tương cận (gần gũi, đi đôi với nhau)."
    }
  ],
  [LevelType.LEVEL_3]: [
    {
      id: "L3-1",
      content: "Trong đoạn thơ \"Sương chùng chình qua ngõ / Hình như thu đã về\" (Sang Thu - Hữu Thỉnh), từ láy \"chùng chình\" có tác dụng gì trong việc gợi tả hình ảnh làn sương?",
      options: ["Diễn tả làn sương dày đặc, che khuất tầm nhìn", "Gợi cảm giác làn sương như có tâm hồn, đang ngập ngừng, lưu luyến", "Mô tả tốc độ di chuyển rất nhanh của sương", "Chỉ là một từ đệm không có ý nghĩa"],
      correctIndex: 1,
      explanation: "Từ láy \"chùng chình\" sử dụng biện pháp nhân hóa, gợi cảm giác sương như có tâm trạng, cố ý chậm lại, chưa muốn tan đi để đón thu về.",
      citation: "Sang Thu - Hữu Thỉnh"
    },
    {
      id: "L3-2",
      content: "Câu thơ \"Mặt trời xuống biển như hòn lửa\" (Đoàn thuyền đánh cá - Huy Cận) sử dụng biện pháp tu từ so sánh nhằm mục đích gì?",
      options: ["Làm giảm đi sức nóng của mặt trời", "Gợi tả vẻ đẹp hùng vĩ, tráng lệ và ấm áp của hoàng hôn trên biển", "So sánh mặt trời với một vật thể nhỏ bé để gây cười", "Chỉ để miêu tả màu sắc đỏ của mặt trời"],
      correctIndex: 1,
      explanation: "So sánh \"mặt trời\" với \"hòn lửa\" giúp cực tả vẻ đẹp rực rỡ, khổng lồ và tràn đầy năng lượng của thiên nhiên trong buổi hoàng hôn.",
      citation: "Đoàn thuyền đánh cá - Huy Cận"
    },
    {
      id: "L3-3",
      content: "Hai câu thơ \"Làn thu thủy nét xuân sơn / Hoa ghen thua thắm liễu hờn kém xanh\" (Truyện Kiều) sử dụng bút pháp ước lệ để khắc họa vẻ đẹp nào của Thúy Kiều?",
      options: ["Vẻ đẹp phúc hậu, đoan trang", "Vẻ đẹp sắc sảo, mặn mà, khiến thiên nhiên phải đố kỵ", "Vẻ đẹp giản dị, mộc mạc của người thôn quê", "Vẻ đẹp khỏe khoắn, năng động"],
      correctIndex: 1,
      explanation: "Nguyễn Du dùng hình ảnh thiên nhiên (thu thủy, xuân sơn) để gợi tả vẻ đẹp tuyệt mỹ, sắc sảo của Kiều, dự báo một số phận sóng gió (hoa ghen, liễu hờn).",
      citation: "Truyện Kiều - Nguyễn Du"
    },
    {
      id: "L3-4",
      content: "Trong bài \"Bếp lửa\", các từ ngữ \"chờn vờn\", \"ấp iu\" trong đoạn \"Một bếp lửa chờn vờn sương sớm / Một bếp lửa ấp iu nồng đượm\" gợi lên cảm giác gì?",
      options: ["Cảm giác lạnh lẽo của sương sớm", "Cảm giác sợ hãi trước ngọn lửa lớn", "Sự ấm áp, gần gũi và tình yêu thương trìu mến của người cháu dành cho bà", "Sự ngột ngạt của khói bếp"],
      correctIndex: 2,
      explanation: "Các từ láy và từ ngữ biểu cảm này gợi tả sự chăm chút, nâng niu ngọn lửa, qua đó thể hiện tình cảm ấm áp, thiêng liêng giữa bà và cháu.",
      citation: "Bếp lửa - Bằng Việt"
    },
    {
      id: "L3-5",
      content: "Hình ảnh \"chiếc khăn\" trong câu \"Đất Nước là nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm\" (Đất Nước - Nguyễn Khoa Điềm) được gợi ý từ chất liệu văn hóa nào?",
      options: ["Truyền thuyết Thánh Gióng", "Ca dao về tình yêu đôi lứa (\"Khăn thương nhớ ai...\")", "Sử thi Đam San", "Truyện cổ tích Tấm Cám"],
      correctIndex: 1,
      explanation: "Tác giả vận dụng ý tứ của bài ca dao \"Khăn thương nhớ ai...\" để diễn tả Đất Nước qua lăng kính tình yêu đôi lứa lãng mạn và nỗi nhớ thầm kín.",
      citation: "Đất Nước - Nguyễn Khoa Điềm"
    }
  ],
  [LevelType.SPECIAL]: [
    {
      id: "SP-1",
      content: "Trong \"Tây Tiến\", bút pháp nghệ thuật nào chủ đạo làm nên vẻ đẹp bi tráng của đoàn binh: \"Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm\"?",
      options: ["Bút pháp tả thực trần trụi", "Bút pháp lãng mạn kết hợp bi tráng", "Bút pháp trào phúng, châm biếm", "Bút pháp tượng trưng siêu thực"],
      correctIndex: 1,
      explanation: "Cảm hứng lãng mạn giúp nhà thơ tô đậm vẻ đẹp hào hoa, phi thường, dữ dội nhưng cũng đầy hào khí của người lính Tây Tiến.",
      citation: "Tây Tiến - Quang Dũng"
    },
    {
      id: "SP-2",
      content: "Trong đoạn trích Đất Nước, hình ảnh \"chiếc khăn trong nỗi nhớ thầm\" được Nguyễn Khoa Điềm khai thác từ chất liệu văn hóa nào?",
      options: ["Ca dao, dân ca", "Truyền thuyết lịch sử", "Sử thi Tây Nguyên", "Truyện thơ Nôm"],
      correctIndex: 0,
      explanation: "Tác giả đã vận dụng sáng tạo ý tứ từ bài ca dao nổi tiếng \"Khăn thương nhớ ai...\" để nói về nỗi nhớ trong tình yêu gắn với Đất Nước.",
      citation: "Đất Nước - Nguyễn Khoa Điềm"
    },
    {
      id: "SP-3",
      content: "Thế giới nghệ thuật trong khổ đầu bài \"Đây thôn Vĩ Dạ\" (\"Sao anh không về chơi thôn Vĩ?...\") được hiện lên như thế nào?",
      options: ["U ám, lạnh lẽo và buồn bã", "Tươi sáng, trong trẻo và đầy sức sống", "Hùng vĩ, tráng lệ và dữ dội", "Đổ nát và hoang tàn"],
      correctIndex: 1,
      explanation: "Khổ thơ đầu mở ra một bức tranh thiên nhiên thôn Vĩ Dạ buổi sớm mai vô cùng tươi sáng, trong trẻo, mướt xanh và tràn đầy sức sống.",
      citation: "Đây thôn Vĩ Dạ - Hàn Mặc Tử"
    },
    {
      id: "SP-4",
      content: "Quan niệm nhân sinh mới mẻ của Xuân Diệu thể hiện qua câu \"Mau đi thôi! Mùa chưa ngả chiều hôm\" là gì?",
      options: ["Sống chậm lại để chiêm nghiệm", "Sống tu hành thoát tục", "Sống gấp gáp, tận hưởng, chạy đua với thời gian", "Sống hy sinh vì người khác"],
      correctIndex: 2,
      explanation: "Xuân Diệu cổ vũ lối sống \"tận hưởng\", vội vàng chiếm lĩnh vẻ đẹp của trần thế ngay khi còn trẻ vì thời gian một đi không trở lại.",
      citation: "Vội vàng - Xuân Diệu"
    },
    {
      id: "SP-5",
      content: "Hình ảnh \"Sóng\" trong bài thơ cùng tên của Xuân Quỳnh có đặc điểm gì nổi bật về cấu trúc?",
      options: ["Luôn xuất hiện đơn lẻ", "Luôn song hành và hòa nhập với hình tượng \"Em\"", "Chỉ xuất hiện ở đầu bài thơ", "Là nhân vật phản diện"],
      correctIndex: 1,
      explanation: "Sóng và Em là cặp hình tượng song hành, tuy hai mà một, \"Em\" là cái tôi trữ tình, \"Sóng\" là hình ảnh ẩn dụ để soi chiếu tâm hồn em.",
      citation: "Sóng - Xuân Quỳnh"
    }
  ],
  [LevelType.GRADUATION]: [
    {
      id: "GR-1",
      content: "Trong \"Sóng\" (Xuân Quỳnh), khát vọng \"Làm sao tan được giữa muôn trùng sóng bể\" thể hiện điều gì?",
      options: ["Muốn tự tử vì thất tình", "Muốn trốn tránh hiện thực", "Khát vọng hòa nhập tình yêu cá nhân vào tình yêu rộng lớn vĩnh cửu", "Muốn đi du lịch biển"],
      correctIndex: 2,
      explanation: "Đó là khát vọng được dâng hiến, được hóa thân cái tôi nhỏ bé vào cái ta rộng lớn để tình yêu trở nên bất tử với thời gian.",
      citation: "Sóng - Xuân Quỳnh"
    },
    {
      id: "GR-2",
      content: "Hình ảnh \"Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi\" trong bài \"Sang thu\" mang ý nghĩa ẩn dụ gì?",
      options: ["Thiên nhiên mùa thu không còn dữ dội", "Sấm sét mùa thu ít hơn mùa hạ", "Sự điềm tĩnh, vững vàng của con người từng trải trước biến động", "Cây cối đã già nên không sợ sấm"],
      correctIndex: 2,
      explanation: "Hình ảnh ẩn dụ cho sự chín chắn, điềm tĩnh của con người khi đã bước qua tuổi trẻ bồng bột (sang thu của đời người) trước những vang động cuộc đời.",
      citation: "Sang Thu - Hữu Thỉnh"
    },
    {
      id: "GR-3",
      content: "Đoạn thơ \"Làn thu thủy nét xuân sơn...\" (Truyện Kiều) sử dụng bút pháp nghệ thuật đặc trưng nào của văn học trung đại?",
      options: ["Tả thực chi tiết", "Ước lệ tượng trưng", "Trào phúng châm biếm", "Dòng ý thức"],
      correctIndex: 1,
      explanation: "Nguyễn Du sử dụng bút pháp ước lệ tượng trưng, dùng vẻ đẹp của thiên nhiên (thu thủy, xuân sơn) để gợi tả vẻ đẹp lý tưởng của con người.",
      citation: "Truyện Kiều - Nguyễn Du"
    },
    {
      id: "GR-4",
      content: "Trong \"Đoàn thuyền đánh cá\", hình ảnh \"Đoàn thuyền đánh cá lại ra khơi / Câu hát căng buồm cùng gió khơi\" thể hiện tinh thần gì?",
      options: ["Sự mệt mỏi vì phải làm việc đêm", "Niềm vui, sự hào hứng và tư thế làm chủ của người lao động mới", "Nỗi lo sợ trước biển cả mênh mông", "Sự bắt buộc của công việc"],
      correctIndex: 1,
      explanation: "Câu thơ thể hiện khí thế phơi phới, niềm vui lao động và tư thế chủ động, tự tin của con người hòa nhịp cùng thiên nhiên vũ trụ.",
      citation: "Đoàn thuyền đánh cá - Huy Cận"
    },
    {
      id: "GR-5",
      content: "Xuân Diệu dùng biện pháp tu từ gì trong chuỗi câu: \"Tôi muốn tắt nắng đi... Tôi muốn buộc gió lại...\"?",
      options: ["Điệp ngữ và động từ mạnh thể hiện cái tôi ngông cuồng", "So sánh ngang bằng", "Nhân hóa nắng và gió", "Ẩn dụ phẩm chất"],
      correctIndex: 0,
      explanation: "Điệp ngữ \"Tôi muốn\" kết hợp với động từ mạnh (tắt, buộc) thể hiện cái tôi trữ tình đầy khát khao, muốn đoạt quyền tạo hóa để giữ lại vẻ đẹp.",
      citation: "Vội vàng - Xuân Diệu"
    }
  ]
};

export const LEVEL_INFO = {
  [LevelType.LEVEL_1]: {
    title: "LEVEL 1: THỬ TÀI KHÁI NIỆM",
    desc: "Kiểm tra kiến thức về các khái niệm cơ bản của thơ như Vần, Tứ thơ, Chủ đề, Cấu tứ...",
    passScore: 5,
    icon: "📖"
  },
  [LevelType.LEVEL_2]: {
    title: "LEVEL 2: THỬ TÀI PHÂN BIỆT",
    desc: "Phân biệt các cặp khái niệm dễ nhầm lẫn như Hình tượng/Hình ảnh, Đề tài/Chủ đề...",
    passScore: 5,
    icon: "⚖️"
  },
  [LevelType.LEVEL_3]: {
    title: "LEVEL 3: THỬ TÀI VẬN DỤNG",
    desc: "Vận dụng kiến thức vào các đoạn thơ cụ thể. Đọc hiểu và phân tích.",
    passScore: 5,
    icon: "✍️"
  },
  [LevelType.SPECIAL]: {
    title: "THỬ THÁCH ĐẶC BIỆT",
    desc: "Vòng thi dành cho Nhân tài. Phân tích sâu sắc nghệ thuật và phong cách tác giả.",
    passScore: 5,
    icon: "🔥"
  },
  [LevelType.GRADUATION]: {
    title: "VÒNG ĐỈNH CAO TRÍ TUỆ",
    desc: "Thử thách cuối cùng dành cho Thiên tài văn học. Kiến thức tổng hợp và nâng cao.",
    passScore: 5,
    icon: "🎓"
  }
};
