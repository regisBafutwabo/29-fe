type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
}
