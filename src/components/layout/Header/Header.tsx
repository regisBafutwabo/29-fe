"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/common/Button/Button';
import { Label } from '@/components/common/Label/Label';
import { Cart } from '@/components/svg/Cart/Cart';
import { Chevron } from '@/components/svg/Chevron/Chevron';
import { useCartStore } from '@/store/cartStore';

interface HeaderProps {
  title: string;
  showCart?: boolean;
}

export const Header = ({ title, showCart }: HeaderProps) => {
  const { items } = useCartStore();
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-white z-50 border-b border-divider ">
      <div className="flex items-center h-full px-[19px] max-w-container mx-auto">
        {/* Back Button */}
        <Button
          onClick={() => router.back()}
          className="w-6 h-6 flex items-center justify-center"
          aria-label="뒤로가기"
        >
          <Chevron
            direction="left"
            className="w-[17px] h-[10px] text-primary"
          />
        </Button>
        <h1 className="flex-1 text-center text-lg -ml-8 font-bold">{title}</h1>
        {showCart && (
          <Link href="/cart" className="relative w-6 h-6">
            {items.length > 0 && (
              <div className="absolute rounded-full bg-accent w-4 h-4 flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <Label
                  text={items.length}
                  className="text-background font-normal text-xs"
                />
              </div>
            )}
            <Cart />
          </Link>
        )}
      </div>
    </header>
  );
};
