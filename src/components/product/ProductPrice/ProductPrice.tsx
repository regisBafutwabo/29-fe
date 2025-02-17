import { Label } from "@/components/common/Label/Label";

type ProductPriceProps = {
  sellPrice: number;
  consumerPrice?: number;
  discountRate?: number;
};

export const ProductPrice = ({
  sellPrice,
  consumerPrice,
  discountRate,
}: ProductPriceProps) => (
  <div className="flex flex-col">
    {discountRate && consumerPrice && (
      <div>
        <Label
          text={`${consumerPrice.toLocaleString()}원`}
          className="font-normal text-secondary text-xs line-through"
        />
      </div>
    )}
    <div className="flex items-center gap-[4px]">
      {discountRate && (
        <Label
          text={`${discountRate}%`}
          className="font-bold text-accent text-md"
        />
      )}
      <Label
        text={`${sellPrice.toLocaleString()}원`}
        className="font-bold text-md"
      />
    </div>
  </div>
);
