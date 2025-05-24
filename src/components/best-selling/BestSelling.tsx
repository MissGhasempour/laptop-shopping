import getProducts from "@/lib/api/getProducts";
import BestProduct from "./BestProduct";

export default async function BestSelling() {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-3xl m-5 mt-30 mb-12 max-md:inline-block p-3  max-sm:text-xl">
        Best selling pc
      </h2>
      <div className="flex max-sm:block">
        <BestProduct res={products || []} index={0} />
        <BestProduct res={products || []} index={1} />
        <BestProduct res={products || []} index={2} />
      </div>
    </div>
  );
}
