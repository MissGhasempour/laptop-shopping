import getProducts from "@/lib/api/getProducts";
import ProductDetail from "@/components/product-detail/productDetail";

export default async function Page() {
  
  const res = await getProducts();
  return (
    <div>
      <ProductDetail res={res} />
    </div>
  );
}
