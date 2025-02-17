import Link from "next/link";

export default function Product() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/product/1">Go to Product 1</Link>
    </div>
  );
}
