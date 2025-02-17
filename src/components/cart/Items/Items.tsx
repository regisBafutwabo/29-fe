"use client";
import { useCartStore } from '@/store/cartStore';

import { CartItemDetails } from '../CartItemDetails/CartItemDetails';

export const Items = () => {
  const { items } = useCartStore();
  return (
    <div className="mt-14">
      {items.map((item) => (
        <CartItemDetails key={item.id} {...item} />
      ))}
    </div>
  );
};
