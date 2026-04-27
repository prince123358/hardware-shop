export interface Product {
  id: string;
  name: string;
  category: 'Tools' | 'Pipes' | 'Paints' | 'Electrical';
  description: string;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  description: string;
  isActive: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
