import { ImageCarousel } from '@/components/product/Carousel/Carousel';
import {
  ProductHeader,
} from '@/components/product/ProductHeader/ProductHeader';
import { ProductInfo } from '@/components/product/ProductInfo/ProductInfo';
import {
  SelectionOptions,
} from '@/components/product/SelectionOptions/SelectionOptions';
import { generateMockProduct } from '@/lib/utils/mockData';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await generateMockProduct();

  // throw new Error("test")
  return (
    <div className="bg-background">
      <section>
        <ImageCarousel
          images={[
            "https://images.pexels.com/photos/15352967/pexels-photo-15352967/free-photo-of-a-lamp-with-circles-on-it-is-sitting-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/16716951/pexels-photo-16716951/free-photo-of-fireworks-over-the-water-with-people-watching.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7339653/pexels-photo-7339653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          ]}
          alt="Product Carousel"
        />
      </section>
      <section className="flex flex-col px-4 py-[14px] gap-[20px]">
        <div>
          <ProductHeader
            brandName={product.data?.frontBrand?.brandNameKor}
            heartCount={product.data.frontBrand?.heartCount}
          />
          <ProductInfo
            name={product?.data?.itemName}
            sellPrice={product?.data?.sellPrice}
            consumerPrice={product?.data?.consumerPrice}
            discountRate={product?.data?.discountRate}
          />
        </div>
        <SelectionOptions product={product} />
      </section>
    </div>
  );
}
