import { Header } from "@/components/layout/Header/Header";

export default function CartPageLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background ">
      <Header title="장바구니" />
      <div className="pt-14">{children}</div>
    </div>
  );
}
