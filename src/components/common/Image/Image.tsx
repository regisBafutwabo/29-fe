import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProductImage = ({
  src,
  alt,
  className = "",
}: ProductImageProps) => {
  return (
    <div className={twMerge("relative w-full h-[400px]", className)}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};
