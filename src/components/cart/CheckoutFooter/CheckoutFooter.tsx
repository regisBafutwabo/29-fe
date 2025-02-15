"use client";
import { Button } from '@/components/common/Button/Button';
import { Label } from '@/components/common/Label/Label';
import { useCartStore } from '@/store/cartStore';

export const CheckoutFooter = () => {
  const { getTotal } = useCartStore();

  const total = getTotal();
  return (
    <div className="sticky w-full max-w-container  z-10 bottom-0 left-0 bg-background py-2 border-t border-divider">
      <div className="flex items-center justify-between px-4 mx-auto">
        <div>
          <Label
            text={`총 ${total.toLocaleString()}원`}
            className="font-bold"
          />
        </div>
        <div>
          <Button variant="primary" className="h-13 w-[200px] p-5">
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
};
