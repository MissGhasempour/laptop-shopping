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
    <div className="flex overflow-hidden">
      <div className="w-50 bg-yellow-500 h-160 max-sm:w-30 max-sm:h-200">
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
      <div className="m-4 flex max-sm:block">
        <div className="w-70  overflow-hidden h-110 max-lg:h-105  rounded max-sm:h-85 max-sm:mr-4 max-lg:w-60">
          <BestProduct res={res || []} index={0} />
        </div>
        <div className="w-70 overflow-hidden h-110 max-lg:h-105  rounded max-sm:h-85">
          <BestProduct res={res || []} index={1} />
        </div>
        <div className="w-80 overflow-hidden h-110 max-lg:h-105 max-lg:hidden rounded">
          <BestProduct res={res || []} index={2} />
        </div>
      </div>
    </div>
  );
}
