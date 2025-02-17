import type { ProductVariant } from "./product";

export interface CartItem {
  id: string;
  variant: ProductVariant;
  quantity: number;
  extraOption: string;
  price: number; // Base price
  totalPrice: number; // Price including extras
}
