import Products from "@/components/products/products";
import getProducts from "@/lib/api/getProducts";

export default async function ProductsPage() {
  const res = await getProducts();

  return <Products res={res} />;
}
