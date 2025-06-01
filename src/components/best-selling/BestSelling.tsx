import getProducts from "@/lib/api/getProducts";
import BestProduct from "./BestProduct";

export default async function BestSelling() {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-3xl m-5 mt-30 mb-12  p-3  max-sm:text-xl 2xl:text-7xl">
        Best selling pc
      </h2>
      <div className="flex mobile:block  max-mobile:block max-mobile:w-70 ipad:flex ipad:w-160 laptop:w-200 2xl:justify-around max-mobile:m-auto">
        <BestProduct res={products || []} index={0} />
        <BestProduct res={products || []} index={1} />
        <BestProduct res={products || []} index={2} />
      </div>
    </div>
  );
}
