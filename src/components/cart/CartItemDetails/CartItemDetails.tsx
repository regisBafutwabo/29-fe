"use client";
import Image from 'next/image';

import { Button } from '@/components/common/Button/Button';
import { Checkbox } from '@/components/common/Checkbox/Checkbox';
import { Counter } from '@/components/common/Counter/Counter';
import { FilledLabel } from '@/components/common/Label/FilledLabel';
import { Label } from '@/components/common/Label/Label';
import { Close } from '@/components/svg/Close/Close';
import { useCartStore } from '@/store/cartStore';
import type { CartItem } from '@/types/cart';

export const CartItemDetails = (item: CartItem) => {
  const { updateQuantity, toggleSelection, selectedItems, removeFromCart } =
    useCartStore();

  const modifyQuantity = (value: number) => {
    updateQuantity(item.id, value);
  };

  const onSelectionChange = () => {
    toggleSelection(item.id);
  };

  const onClear = () => {
    removeFromCart(item.id);
  };

  const isSelected = selectedItems.has(item.id);

  return (
    <div className="py-3 border-t border-divider">
      <div className="flex items-center justify-between mb-[10px]">
        <Checkbox
          label={item.variant?.productName}
          onChange={onSelectionChange}
          checked={isSelected}
        />
        <Button variant="text" onClick={onClear}>
          <Close />
        </Button>
      </div>
      {/* Image and details */}
      <div className="flex justify-start gap-3">
        <div className="aspect-square">
          <Image
            src={item?.variant?.image || ""}
            alt={item.variant?.productName || ""}
            width={72}
            height={72}
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1/2">
          <div className="flex flex-col gap-1/2">
            <Label
              text={`${item.variant?.price?.toLocaleString()}원`}
              className="text-xs"
            />
            <Label
              text={`할인적용 : ${
                item?.variant?.discount ? item?.variant?.discount + "%" : "없음"
              } `}
              className="text-secondary font-normal text-xs"
            />
            <Label
              text={`배송비 : ${item.variant?.deliveryInfo}`}
              className="text-secondary font-normal text-xs"
            />
          </div>
          <div className="flex gap-[2px]">
            {item.variant?.size && (
              <FilledLabel
                className="h-4"
                label={item.variant?.size as string}
              />
            )}
            {item.variant?.color && (
              <FilledLabel className="h-4" label={item.variant?.color} />
            )}
            {item.extraOption && (
              <FilledLabel className="h-4" label={item.extraOption || ""} />
            )}
          </div>
        </div>
      </div>
      {/* Price and Quantity */}
      <div className="flex items-center justify-between mt-1">
        <div>
          <Label
            className="font-bold"
            text={`${item?.totalPrice.toLocaleString()}원`}
          />
        </div>
        <div className="gap-1 flex items-center">
          <Button variant="outlined" className="h-7 px-[10px]">
            쿠폰적용
          </Button>
          <Counter value={item?.quantity} onChange={modifyQuantity} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
