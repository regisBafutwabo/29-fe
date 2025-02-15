import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { twMerge } from 'tailwind-merge';

import { Chevron } from '@/components/svg/Chevron/Chevron';

import { Label } from '../Label/Label';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const Select = ({
  options,
  value,
  onChange,
  placeholder = "선택",
  label,
  required = false,
  error,
  disabled = false,
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    if (option.disabled) return;
    onChange(option.value);
    setIsOpen(false);
  };

  const toggleSelect = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const defaultClasses = `
          relative w-full cursor-pointer border rounded-[4px] bg-white border-line
          ${disabled ? "bg-btn-disabled cursor-not-allowed" : ""}
          ${error ? "border-accent" : ""}`;

  return (
    <div className="relative w-full" ref={selectRef}>
      {/* Label */}
      {label && <Label text={label} required={required} />}

      {/* Input & Chevron */}

      <div
        className={twMerge(defaultClasses, className)}
        onClick={toggleSelect}
      >
        <div className="flex items-center justify-between p-3 pr-[10px]">
          <Label
            text={selectedOption ? selectedOption.label : placeholder}
            className={`block truncate ${
              disabled ? "text-txt-disabled" : ""
            } font-normal`}
          />
          <Chevron direction={isOpen ? "down" : "up"} />
        </div>

        {isOpen && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-line rounded-md shadow-lg max-h-60 overflow-auto px-2 py[6px]">
            {options.map((option) => (
              <li
                key={option.value}
                className={`
                  p-[6px] cursor-pointer
                  ${option.disabled ? "cursor-not-allowed " : ""}
                `}
                onClick={() => handleSelect(option)}
              >
                <Label
                  text={option.label}
                  className={`${option.disabled ? "text-soldout" : ""}`}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
};

export default Select;
