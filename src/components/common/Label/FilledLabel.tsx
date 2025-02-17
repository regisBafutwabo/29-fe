import { twMerge } from "tailwind-merge";

interface FilledLabel {
  label: string;
  className?: string;
}

const defaultClasses =
  "flex items-center px-[8px] py-[4px] bg-primary text-white font-medium rounded-[2px] text-xs h-[24px] w-auto";
export const FilledLabel = ({ label, className = "" }: FilledLabel) => {
  return (
    <div className={twMerge(defaultClasses, className)}>
      <label>{label}</label>
    </div>
  );
};
