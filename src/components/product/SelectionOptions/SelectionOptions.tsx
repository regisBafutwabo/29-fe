"use client";
import {
  type Product,
  type SelectedOptions,
} from '@/types/product';

import { ProductOptions } from '../ProductOptions/ProductOptions';

type SelectionOptionsProps = {
  product: Product;
};

export const SelectionOptions = ({ product }: SelectionOptionsProps) => {
  const handleAddToCart = (options: SelectedOptions) => {
    // Here you would typically:
    // 1. Create a cart item with the selected options
    // 2. Add it to your cart state (using Zustand)
    // 3. Show a success message
    console.log("Added to cart:", options);
  };

  return (
    <div>
      <ProductOptions
        onAddToCart={handleAddToCart}
        variants={product?.data?.variants}
      />
    </div>
  );
};
