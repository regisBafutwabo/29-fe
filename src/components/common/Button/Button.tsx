import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "disabled" | "outlined" | "text";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white active:bg-primary/90 font-bold",
    disabled: "bg-btn-disabled text-text-disabled font-bold",
    text: "bg-transparent text-primary active:bg-primary/10 font-normal",
    outlined:
      "bg-transparent border border-line text-primary active:bg-primary/10 font-normal",
  };
  const defaultClasses = `
        font-medium transition-colors
        ${variants[disabled ? "disabled" : variant]}
        ${fullWidth ? "w-full" : ""}`;

  return (
    <button
      className={twMerge(defaultClasses, className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
