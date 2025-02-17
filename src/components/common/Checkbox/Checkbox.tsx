"use client";
import { useEffect, useRef } from "react";

import { Check } from "@/components/svg/Check/Check";

import { Label } from "../Label/Label";

interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export function Checkbox({
  checked,
  indeterminate,
  onChange,
  label,
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative w-5 h-5">
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="absolute opacity-0 w-full h-full cursor-pointer"
        />
        <div
          className={`
            flex items-center justify-center
          w-[18px] h-[18px] border rounded transition-colors 
          ${checked ? "bg-primary border-primary" : "border-line"}
        `}
        >
          {checked && !indeterminate && <Check />}
          {indeterminate && (
            <div className="w-2.5 h-0.5 bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>
      {label && (
        <Label className="font-normal max-w-[200px] truncate" text={label} />
      )}
    </label>
  );
}
