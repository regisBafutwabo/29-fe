"use client";
import { Button } from '@/components/common/Button/Button';
import { Label } from '@/components/common/Label/Label';
import { useCartStore } from '@/store/cartStore';

export const CheckoutFooter = () => {
  const { getTotal } = useCartStore();

  const total = getTotal();
  return (
    <div className="fixed flex items-center justify-between w-full max-w-container mx-auto z-10 bottom-0 bg-background py-2 border-t border-divider">
        <div>
          <Label
            text={`총 ${total.toLocaleString()}원`}
            className="font-bold"
          />
        </div>
        <div>
          <Button disabled={total===0} variant="primary" className="h-13 w-[200px] p-5">
            결제하기
          </Button>
        </div>
    </div>
  );
};
