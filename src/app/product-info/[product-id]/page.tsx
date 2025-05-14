import getProducts from "@/lib/api/getProducts";
import ProductDefinition from "@/components/product-detail/productDetail";

export default async function Page() {
  
  const res = await getProducts();
  return (
    <div>
      <ProductDefinition res={res} />
    </div>
  );
}
