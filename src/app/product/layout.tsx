"use client";
import { useRouter } from 'next/navigation';

import { Chevron } from '@/components/svg/Chevron/Chevron';

export default function ProductPageLayout({
  children,
}: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white z-50 border-b border-divider">
        <div className="flex items-center h-full px-4 max-w-container mx-auto">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center -ml-2"
            aria-label="뒤로가기"
          >
            <Chevron direction="left" className="w-6 h-6 text-primary" />
          </button>

          <h1 className="flex-1 text-center text-lg font-medium -ml-8">
            상품상세
          </h1>
        </div>
      </header>

      {/* Main content with header offset */}
      <div className="pt-14">{children}</div>
    </div>
  );
}
