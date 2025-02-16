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
    const {
      data: {
        sellPrice,
        options: { extraOptionPrice },
        itemImage,
        itemName,
        discountRate,
        consumerPrice,
        deliveryInfo,
      },
    } = product;

    const cartItem = {
      ...variant,
      price: sellPrice,
      extraPrice: extraOption ? extraOptionPrice : 0,
      image: itemImage[0]?.imageUrl,
      productName: itemName,
      discount: discountRate,
      originalPrice: consumerPrice,
      deliveryInfo,
    };

    addToCart(cartItem, extraOption);
  };

  return (
    <div>
      <ProductOptions
        onAddToCart={handleAddToCart}
        variants={product?.data?.variants}
        extraOptionsPrice={product?.data?.options?.extraOptionPrice}
      />
    </div>
  );
};
