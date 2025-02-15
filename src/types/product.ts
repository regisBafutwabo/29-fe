export type Size = "L" | "M" | "S";
export type Color = "Teal" | "Black" | "White";
export type GiftOption = "선택안함" | "선물포장";

export interface ProductVariant {
  size: Size;
  color: Color;
  quantity: number;
  sku: string;
  price?: number;
  extraPrice?: number;
  image?: string;
  productName?: string;
  originalPrice?: number;
  discount?: number;
  deliveryInfo?: string;
}

export interface Product {
  result: string;
  data: {
    frontBrand: {
      brandNameEng: string;
      brandNameKor: string;
      heartCount: number;
    };
    itemImage: {
      imageHeight: number;
      imageWidth: number;
      imageUrl: string;
    }[];
    itemName: string;
    itemNo: number;
    isDependentSellType: boolean;
    maxOrderQty: number;
    sellPrice: number;
    consumerPrice: number;
    deliveryInfo: string;
    discountRate: number;
    isSoldout: boolean;
    variants: ProductVariant[];
    options: {
      sizes: Array<"L" | "M" | "S">;
      colors: Array<"Teal" | "Black" | "White">;
      extraOption: boolean;
      extraOptionPrice: number;
    };
  };
  message: string | null;
  errorCode: string | null;
}

// export interface ProductOption {
//   size: Size;
//   color: Color;
//   giftOption: GiftOption;
// }

export interface SelectedOptions {
  size: string;
  color: string;
  extraOption: string;
}
