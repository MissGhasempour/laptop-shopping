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
    <div className="flex">
      <div className="w-50 bg-yellow-500 h-120">
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
      <div className="m-4 flex">
        <BestProduct res={res || []} index={0} />
        <BestProduct res={res || []} index={1} />
        <BestProduct res={res || []} index={2} />
      </div>
    </div>
  );
}
