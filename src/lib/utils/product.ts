import { type ProductVariant } from '@/types/product';

export const checkInventory = (
  variants: ProductVariant[],
  size: string,
  color: string
) => {
  const variant = variants.find((v) => v.size === size && v.color === color);
  return variant?.quantity ?? 0;
};

export const isVariantAvailable = (
  variants: ProductVariant[],
  size: string,
  color: string
) => {
  return checkInventory(variants, size, color) > 0;
};
