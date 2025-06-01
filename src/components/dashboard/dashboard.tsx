import Link from "next/link";
import BestProduct from "../best-selling/BestProduct";

export default function Dashboard({
  res,
}: {
  res: [
    { culture: string; aliases: string; books: string[] },
    { culture: string; aliases: string; name: string; books: string[] },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  return (
    <div className="flex overflow-hidden max-sm:h-300 bg-indigo-200 h-200">
      <div className="w-50 bg-blue-400  max-sm:w-70 max-sm:h-300">
        <div className="m-4">
          <Link href={"/test/dashboard-test"}>Profile</Link>
        </div>
        <div className="m-4">
          <Link href={"/cart-id/id"}>Cart</Link>
        </div>
        <div className="m-4">
          <Link href={"/filter-products"}>Filter</Link>
        </div>
      </div>
      <div className="m-4 flex max-mobile:grid max-mobile:gap-70 max-mobile:w-70 mobile:grid mobile:gap-50 tablet:gap-6 tablet:flex max-xl:ml-10">
        <div className="max-lg:h-105 max-sm:h-140 rounded  max-sm:mr-4 max-lg:w-60 max-md:w-60 max-2xl:w-50 max-2xl:mr-40">
          <BestProduct res={res || []} index={0} />
        </div>
        <div className="h-110 max-lg:h-105 max-lg:w-60 max-sm:h-85 max-2xl:w-50 max-2xl:mr-40">
          <BestProduct res={res || []} index={1} />
        </div>
        <div className="h-110 max-lg:h-105 max-md:hidden rounded max-2xl:w-50">
          <BestProduct res={res || []} index={2} />
        </div>
      </div>
    </div>
  );
}
