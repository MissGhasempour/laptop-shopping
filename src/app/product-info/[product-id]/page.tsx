import getProducts from "@/app/lib/api/getProducts";
import ProductDefinition from "@/components/product-detail/productDetail";
//import dynamic from "next/dynamic";
export default async function Page() {
  // const ProductDefinition = dynamic((): any =>  {
  //   ssr: false
  // })
  const res = await getProducts()
  return (
    <div>
      <ProductDefinition  res={res}/>
    </div>
  );
}
