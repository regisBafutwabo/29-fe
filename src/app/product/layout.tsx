import { Header } from '@/components/layout/Header/Header';

export default function ProductPageLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background ">
      <Header title="상품상세" showCart />
      {/* Main content with header offset */}
      <div className="pt-14">{children}</div>
    </div>
  );
}
