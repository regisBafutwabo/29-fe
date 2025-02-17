import {
  type Color,
  type GiftOption,
  type Product,
  type Size,
} from "../../types/product";

const MOCK_IMAGES = [
  "https://images.pexels.com/photos/15352967/pexels-photo-15352967/free-photo-of-a-lamp-with-circles-on-it-is-sitting-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16716951/pexels-photo-16716951/free-photo-of-fireworks-over-the-water-with-people-watching.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7339653/pexels-photo-7339653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const generateMockProduct = (): Promise<Product> =>
  new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Random delay between 2-5 seconds
    setTimeout(() => {
      resolve({
        result: "SUCCESS",
        data: {
          frontBrand: {
            brandNameEng: "Classic Lunchbox",
            brandNameKor: "클래식 런치박스",
            heartCount: Math.floor(Math.random() * 1000000),
          },
          itemImage: MOCK_IMAGES.map((imageUrl) => ({
            imageHeight: 1080,
            imageWidth: 1080,
            imageUrl,
          })),
          itemName: "[선물포장] 티머그 & 논카페인 잎차 세트",
          itemNo: Math.floor(Math.random() * 1000000),
          isDependentSellType: false,
          maxOrderQty: 0,
          sellPrice: 43200,
          consumerPrice: 45500,
          deliveryInfo: "29CM 무료배송",
          discountRate: 5,
          isSoldout: false,
          variants: [
            { size: "L", color: "Teal", quantity: 10, sku: "L-TEAL-001" },
            { size: "L", color: "Black", quantity: 0, sku: "L-BLACK-001" },
            { size: "L", color: "White", quantity: 15, sku: "L-WHITE-001" },
            { size: "M", color: "Teal", quantity: 8, sku: "M-TEAL-001" },
            { size: "M", color: "Black", quantity: 12, sku: "M-BLACK-001" },
            { size: "M", color: "White", quantity: 20, sku: "M-WHITE-001" },
            { size: "S", color: "Teal", quantity: 5, sku: "S-TEAL-001" },
            { size: "S", color: "Black", quantity: 7, sku: "S-BLACK-001" },
            { size: "S", color: "White", quantity: 9, sku: "S-WHITE-001" },
          ],
          options: {
            sizes: ["L", "M", "S"],
            colors: ["Teal", "Black", "White"],
            extraOption: true,
            extraOptionPrice: 2000,
          },
        },
        message: null,
        errorCode: null,
      });
    }, delay);
  });

export const SIZES: Size[] = ["L", "M", "S"];
export const COLORS: Color[] = ["Teal", "Black", "White"];
export const GIFT_OPTIONS: GiftOption[] = ["선물포장"];
