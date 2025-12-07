export interface UserInfo {
  name: string;
  className: string;
  school: string;
}

export enum LevelType {
  LEVEL_1 = 'LEVEL_1',
  LEVEL_2 = 'LEVEL_2',
  LEVEL_3 = 'LEVEL_3',
  SPECIAL = 'SPECIAL',
  GRADUATION = 'GRADUATION'
}

export interface Question {
  id: string;
  content: string;
  options: string[];
  correctIndex: number; // 0-3
  explanation: string;
  citation?: string; // Source of the poem if applicable
}

export interface GameState {
  screen: 'INTRO' | 'ROADMAP' | 'LOADING' | 'LEVEL_INTRO' | 'PLAYING' | 'FEEDBACK' | 'LEVEL_RESULT' | 'CERTIFICATE' | 'ERROR';
  currentLevel: LevelType;
  questions: Question[];
  currentQuestionIndex: number;
  score: number; // Questions correct in current level
  user: UserInfo;
  streak: number; // For certificate logic
  xp: number; // For graduation level
}

export enum CertificateRank {
  DAT = 'ĐẠT',
  KHA = 'KHÁ',
  GIOI = 'GIỎI',
  XUAT_SAC = 'XUẤT SẮC',
  NHAN_TAI = 'NHÂN TÀI VĂN HỌC',
  THIEN_TAI = 'THIÊN TÀI VĂN HỌC'
}