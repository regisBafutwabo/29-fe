"use client";
import { useEffect, useRef } from "react";

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
          {checked && !indeterminate && (
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0342 0.787381L4.24007 8.2005L0.00512695 4.01368L0.661311 3.34995L4.15051 6.7995L9.29887 0.212616L10.0342 0.787381Z"
                fill="white"
              />
            </svg>
          )}
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
