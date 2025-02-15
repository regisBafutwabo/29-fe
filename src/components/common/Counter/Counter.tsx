"use client";

import { Minus } from '@/components/svg/Minus/Minus';
import { Plus } from '@/components/svg/Plus/Plus';

import { Button } from '../Button/Button';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export function Counter({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
}: CounterProps) {
  const handleDecrease = () => {
    if (value > min) {
      console.log("here", value);
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="inline-flex border border-line bg-background h-[28px] w-[82px] justify-between px-[6px] py-[6.5px]">
      <Button
        variant="text"
        className="w-[14px] h-[14px]"
        disabled={disabled || value <= min}
        onClick={handleDecrease}
      >
        <Minus />
      </Button>
      <div className="flex items-center justify-center h-[15px] w-[34px] font-normal text-sm">
        <span>{value}</span>
      </div>
      <Button
        variant="text"
        className="w-[14px] h-[14px]"
        disabled={disabled || value >= max}
        onClick={handleIncrease}
      >
        <Plus />
      </Button>
    </div>
  );
}
