"use client";
import {
  useMemo,
  useState,
} from 'react';

import { Button } from '@/components/common/Button/Button';
import Select from '@/components/common/Select/Select';
import { isVariantAvailable } from '@/lib/utils/product';
import { ProductVariant } from '@/types/product';

interface ProductOptionsProps {
  onAddToCart: (options: SelectedOptions) => void;
  variants: ProductVariant[];
}

interface SelectedOptions {
  size: string;
  color: string;
  giftWrap: string;
}

export function ProductOptions({ onAddToCart, variants }: ProductOptionsProps) {
  const [selected, setSelected] = useState<SelectedOptions>({
    size: "",
    color: "",
    giftWrap: "",
  });

  // Memoized options to prevent recreating on every render
  const options = useMemo(
    () => ({
      sizes: [
        { value: "L - 대형", label: "L - 대형" },
        { value: "M - 중형", label: "M - 중형" },
        { value: "S - 소형", label: "S - 소형" },
      ],
      colors: [
        { value: "Teal", label: "Teal" },
        { value: "Black", label: "Black", disabled: selected.size === "L" }, // Disabled when L is selected
        { value: "White", label: "White" },
      ],
      giftWrap: [
        { value: "none", label: "선택안함" },
        { value: "wrap", label: "선물포장 (2,000원)" },
      ],
    }),
    [selected.size]
  ); // Only recreate when size changes

  // Check if all required options are selected
  const isValid = selected.size && selected.color;
  const isSoldOut =
    selected.size && selected.color
      ? !isVariantAvailable(variants, selected.size, selected.color)
      : false;

  // Handle option changes
  const handleChange = (field: keyof SelectedOptions) => (value: string) => {
    setSelected((prev) => {
      const newSelected = { ...prev, [field]: value };

      return newSelected;
    });
  };

  return (
    <>
      <div className="space-y-4 min-h-[500px]">
        <Select
          label="사이즈"
          required
          options={options.sizes}
          value={selected.size}
          onChange={handleChange("size")}
        />

        <Select
          label="색상"
          required
          options={options.colors}
          value={selected.color}
          disabled={!selected.size}
          onChange={handleChange("color")}
        />

        <Select
          label="추가옵션"
          options={options.giftWrap}
          value={selected.giftWrap}
          disabled={!selected.color}
          placeholder="선택안함"
          onChange={handleChange("giftWrap")}
        />
      </div>

      <div className="fixed w-full bottom-0 left-0 py-2 bg-white z-20 border-t border-divider">
        <div className="max-w-container mx-auto px-4">
          <Button
            variant={!isValid || isSoldOut ? "disabled" : "primary"}
            disabled={!isValid || isSoldOut}
            onClick={() => onAddToCart(selected)}
            fullWidth
            className="h-[52px]"
          >
            장바구니 담기
          </Button>
          {isSoldOut && (
            <p className="text-red-500 text-center text-md">
              품절된 상품입니다
            </p>
          )}
        </div>
      </div>
    </>
  );
}
