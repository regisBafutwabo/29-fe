import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "disabled" | "outlined" | "text" | "tertiary";
  fullWidth?: boolean;
}

export function Button({
  variant = "text",
  fullWidth = false,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white active:bg-primary/90 font-bold",
    tertiary: "bg-divider text-primary active:bg-divider/90 font-normal",
    disabled: "bg-btn-disabled text-txt-disabled font-bold",
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
