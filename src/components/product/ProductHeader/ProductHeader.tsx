// TODO: Add More Likes by clicking the like Button
import { Button } from "@/components/common/Button/Button";
import { Label } from "@/components/common/Label/Label";
import { Chevron } from "@/components/svg/Chevron/Chevron";
import { Heart } from "@/components/svg/Heart/Heart";
import { formatToKoreanNumber } from "@/lib/utils/numbers";

type ProductHeaderProps = {
  brandName: string;
  heartCount: number;
};

export const ProductHeader = ({
  brandName,
  heartCount,
}: ProductHeaderProps) => (
  <div className="flex items-center justify-between">
    <Button variant="text" className="flex items-center gap-[2px]">
      <Label text={brandName} className="font-bold" />
      <div className="h-3 w-3">
        <Chevron direction="right" />
      </div>
    </Button>
    <div className="flex items-center gap-[4px] p-1 border border-line rounded-md">
      <Heart />
      <Label
        text={formatToKoreanNumber(heartCount)}
        className="text-secondary text-xs"
      />
    </div>
  </div>
);
