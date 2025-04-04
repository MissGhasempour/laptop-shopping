import BestProduct from "../../../components/bestSelling/BestProduct";
import FilterFunc from "../filter/filterFunc";
import LibPage from "@/app/pages/lib/page";
import ProductInfoPage from '@/app/pages/productInfo/[productId]/page'
export default async function FetchApi({
  filter,
}: {
  filter: React.MouseEventHandler<HTMLInputElement>;
}) {
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  console.log(res[0])

  const filterFunc = <FilterFunc res={res} />;
  const bestProduct = <BestProduct res={res} index={0} />;
  // const libPage = <LibPage res={res} filter={filter} />;
  // const productInfo = <ProductInfoPage res={res}/>
  return <div></div>;
}
