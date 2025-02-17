"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/common/Button/Button";
import { Label } from "@/components/common/Label/Label";
import { useCartStore } from "@/store/cartStore";

export const CheckoutFooter = () => {
  const { getTotal } = useCartStore();

  const [mounted, setMounted] = useState(false);

  const total = getTotal();

  useEffect(() => {
    setMounted(true);
  }, []);

  // To fix Hydration issues(can be better)
  if (!mounted) return null;

  return (
    <div className="fixed flex items-center justify-between w-full max-w-container mx-auto z-10 bottom-0 bg-background py-2 px-4 border-t border-divider">
      <div>
        <Label text={`총 ${total.toLocaleString()}원`} className="font-bold" />
      </div>
      <div>
        <Button
          disabled={total === 0}
          variant="primary"
          className="h-13 w-[200px] p-5"
        >
          결제하기
        </Button>
      </div>
    </div>
  );
};
