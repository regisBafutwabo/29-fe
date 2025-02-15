import { Label } from '@/components/common/Label/Label';

import { ProductPrice } from '../ProductPrice/ProductPrice';

type ProductInfoProps = {
  name: string;
  sellPrice: number;
  consumerPrice?: number;
  discountRate?: number;
};

export const ProductInfo = ({
  name,
  sellPrice,
  consumerPrice,
  discountRate,
}: ProductInfoProps) => (
  <div>
    <div className="mt-[6px]">
      <Label text={name} className="font-normal text-lg" />
    </div>
    <ProductPrice
      sellPrice={sellPrice}
      consumerPrice={consumerPrice}
      discountRate={discountRate}
    />
  </div>
);
