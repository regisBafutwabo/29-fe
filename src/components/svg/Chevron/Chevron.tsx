import { twMerge } from 'tailwind-merge';

export const Chevron = ({ direction = "down", className = "" }) => {
  const defaultClasses = `${direction === "up" ? "rotate-180" : "rotate-0"}`;

  return (
    <svg
      className={twMerge(defaultClasses, className)}
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99989 8.27614L15.138 1.13807L14.1951 0.195259L7.99989 6.39052L1.80463 0.195259L0.861816 1.13807L7.99989 8.27614Z"
        fill="black"
      />
    </svg>
  );
};
