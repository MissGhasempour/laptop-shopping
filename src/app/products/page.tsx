import Products from "@/components/products/products";

export default async function ProductsPage() {
  const res = await getProducts();

  return <Products res={res} />;
}
