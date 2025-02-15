"use client";
import { useRouter } from 'next/navigation';

import { Cart } from '@/components/svg/Cart/Cart';
import { Chevron } from '@/components/svg/Chevron/Chevron';

export default function ProductPageLayout({
  children,
}: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-white z-50 border-b border-divider ">
        <div className="flex items-center h-full px-[19px] max-w-container mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="뒤로가기"
          >
            <Chevron
              direction="left"
              className="w-[17px] h-[10px] text-primary"
            />
          </button>

          <h1 className="flex-1 text-center text-lg -ml-8 font-bold">
            상품상세
          </h1>

          <div className="w-6 h-6">
            <Cart />
          </div>
        </div>
      </header>

      {/* Main content with header offset */}
      <div className="pt-14">{children}</div>
    </div>
  );
}
