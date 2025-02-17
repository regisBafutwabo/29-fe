import { CartHeader } from '@/components/cart/CartHeader/CartHeader';
import {
  CheckoutFooter,
} from '@/components/cart/CheckoutFooter/CheckoutFooter';
import { Items } from '@/components/cart/Items/Items';

export default function CartPage() {
  return (
    <div className="max-w-container relative min-h-screen">
      <div className="flex flex-col px-4 relative">
        <CartHeader />
        <Items />
      </div>
      <CheckoutFooter />
    </div>
  );
}
