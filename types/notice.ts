export interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  important?: boolean;
  category?: string;
} 