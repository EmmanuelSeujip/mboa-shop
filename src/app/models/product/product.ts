export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  rate: number;
  slug: string;
  short?:string;
  create_at?: Date
}