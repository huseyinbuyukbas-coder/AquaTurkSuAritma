export interface ProductItem {
  id: string;
  title: string;
  description: string;
  category: 'evsel' | 'endustriyel' | 'servis';
  iconName: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  source: 'Google Yorumu' | 'Local Rehberiniz';
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
