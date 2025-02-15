import type { Product } from "./product";

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOptions: {
    size: string;
    color: string;
    extraOption: string;
  };
  price: number;
}
