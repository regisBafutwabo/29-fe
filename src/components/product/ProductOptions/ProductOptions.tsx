// Todo: To refactor
"use client";
import {
  useMemo,
  useState,
} from 'react';

import { Button } from '@/components/common/Button/Button';
import Select from '@/components/common/Select/Select';
import { PRODUCT_OPTIONS } from '@/constants/product';
import {
  Color,
  ProductVariant,
  Size,
} from '@/types/product';

interface ProductOptionsProps {
  onAddToCart: (variant: ProductVariant, extraOption: string) => void;
  variants: ProductVariant[];
  extraOptionsPrice?:number;
}

export function ProductOptions({ onAddToCart, variants, extraOptionsPrice }: ProductOptionsProps) {
  const [size, setSize] = useState<Size | "">("");
  const [color, setColor] = useState<Color | "">("");
  const [extraOption, setExtraOption] = useState("");

  // Memoized options to prevent recreating on every render
  const extraOptions = useMemo(() => [
        { value: "", label: "선택안함" },
        { value: "선물포장", label: `선물포장${extraOptionsPrice?` (${extraOptionsPrice})`:""}` },
  ], []);

  const currentVariant = variants.find(
    (value) => value.size === size && value.color === color
  );

  const isAvailable = currentVariant ? currentVariant.quantity > 0 : false;

  const isValid = size && color && isAvailable;

  const handleSizeChange = (newSize: Size) => {
    setSize(newSize);
    setColor("");
    setExtraOption("");
  };

  const handleColorChange = (newColor: Color) => {
    setColor(newColor);
    setExtraOption("");
  };

  const handleExtraOptionChange = (value: string) => {
    setExtraOption(value);
  };


  const handleAddToCart = () => {
    if (!currentVariant || !isValid) return;

    onAddToCart(
      {
        ...currentVariant,
        size: size as Size,
        color: color as Color,
      },
      extraOption
    );

    // Reset form after adding to cart
    setSize("");
    setColor("");
    setExtraOption("");
  };

  return (
    <>
      <div className="space-y-4 min-h-[500px]">
        <Select
          label="사이즈"
          required
          options={PRODUCT_OPTIONS.sizes}
          value={size}
          onChange={handleSizeChange}
        />

        <Select
          label="색상"
          required
          options={PRODUCT_OPTIONS.colors}
          value={color}
          disabled={!size}
          onChange={handleColorChange}
        />

        <Select
          label="추가옵션"
          options={extraOptions}
          value={extraOption}
          disabled={!color}
          placeholder="선택안함"
          onChange={handleExtraOptionChange}
        />
      </div>

      <div className="fixed w-full bottom-0 left-0 py-2 bg-background z-20 border-t border-divider">
        <div className="max-w-container mx-auto px-4">
          <Button
            variant={!isValid ? "disabled" : "primary"}
            disabled={!isValid}
            onClick={handleAddToCart}
            fullWidth
            className="h-[52px]"
          >
            장바구니 담기
          </Button>
          {!isAvailable && color && size && (
            <p className="text-red-500 text-center text-md">
              품절된 상품입니다
            </p>
          )}
        </div>
      </div>
    </>
  );
}
