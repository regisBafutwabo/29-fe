"use client";
import { useCartStore } from '@/store/cartStore';
import {
  type Product,
  ProductVariant,
} from '@/types/product';

import { ProductOptions } from '../ProductOptions/ProductOptions';

type SelectionOptionsProps = {
  product: Product;
};

export const SelectionOptions = ({ product }: SelectionOptionsProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (variant: ProductVariant, extraOption: string) => {
    const basePrice = product.data.sellPrice;
    const extraPrice = product.data.options.extraOptionPrice;
    addToCart({ ...variant, price: basePrice, extraPrice }, extraOption);
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
