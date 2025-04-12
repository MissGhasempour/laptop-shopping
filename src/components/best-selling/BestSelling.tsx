import getProducts from "@/app/lib/api/getProducts";
import BestProduct from "./BestProduct";

export default async function BestSelling() {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-3xl m-5 mt-40 border rounded-2xl p-3 bg-stone-500 text-zinc-100 ">
        Best selling pc
      </h2>
      <div className="flex">
        <BestProduct res={products || []} index={0} />
        <BestProduct res={products || []} index={1} />
      </div>
    </div>
  );
}
