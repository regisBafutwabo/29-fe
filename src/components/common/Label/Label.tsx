import { twMerge } from 'tailwind-merge';

interface LabelProps {
  text: string;
  required?: boolean;
  className?: string;
}

const defaultClasses = "font-medium text-primary gap-[2px]";

export function Label({ text, required, className = "" }: LabelProps) {
  return (
    <span className={twMerge(defaultClasses, className)}>
      {text} {required && <span className="text-accent font-medium">*</span>}
    </span>
  );
}
