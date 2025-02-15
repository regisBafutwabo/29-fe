// Todo: turn it into a form
"use client";
import { useMemo, useState } from "react";

import { Button } from "@/components/common/Button/Button";
import Select from "@/components/common/Select/Select";
import { ProductVariant } from "@/types/product";

interface ProductOptionsProps {
  onAddToCart: (variant: ProductVariant, extraOption: string) => void;
  variants: ProductVariant[];
}

export function ProductOptions({ onAddToCart, variants }: ProductOptionsProps) {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [extraOption, setExtraOption] = useState("");

  // Memoized options to prevent recreating on every render
  const { sizes, colors, extraOptions } = useMemo(() => {
    return {
      sizes: ["L - 대형", "M - 중형", "S - 소형"],
      colors: ["Teal", "Black", "White"],
      extraOptions: ["선택안함", "선물포장 (2,000원)"],
    };
  }, []);

  const currentVariant = variants.find(
    (value) => value.size === size && value.color === color
  );

  const isAvailable = currentVariant ? currentVariant.quantity > 0 : false;

  const isValid = size && color && isAvailable;

  const handleSizeChange = (newSize: string) => {
    setSize(newSize);
    setColor("");
    setExtraOption("");
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setExtraOption("");
  };

  const handleExtraOptionChange = (value: string) => {
    setExtraOption(value);
  };

  return (
    <>
      <div className="space-y-4 min-h-[500px]">
        <Select
          label="사이즈"
          required
          options={sizes.map((s) => ({ value: s, label: s }))}
          value={size}
          onChange={handleSizeChange}
        />

        <Select
          label="색상"
          required
          options={colors.map((c) => ({
            value: c,
            label: c,
            disabled: !size,
          }))}
          value={color}
          disabled={!size}
          onChange={handleColorChange}
        />

        <Select
          label="추가옵션"
          options={extraOptions.map((o) => ({ value: o, label: o }))}
          value={extraOption}
          disabled={!color}
          placeholder="선택안함"
          onChange={handleExtraOptionChange}
        />
      </div>

      <div className="fixed w-full bottom-0 left-0 py-2 bg-white z-20 border-t border-divider">
        <div className="max-w-container mx-auto px-4">
          <Button
            variant={!isValid ? "disabled" : "primary"}
            disabled={!isValid}
            onClick={() =>
              currentVariant && onAddToCart(currentVariant, extraOption)
            }
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
