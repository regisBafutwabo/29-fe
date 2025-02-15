import { twMerge } from 'tailwind-merge';

interface LabelProps {
  text: string | number;
  required?: boolean;
  className?: string;
}

const defaultClasses = "font-medium text-primary";

export function Label({ text, required, className = "" }: LabelProps) {
  return (
    <label className={twMerge(defaultClasses, className)}>
      {text}
      {required && <span className="text-accent font-medium ml-[2px]">*</span>}
    </label>
  );
}
