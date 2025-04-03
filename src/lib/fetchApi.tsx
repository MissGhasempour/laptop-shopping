import BestProduct from "../components/bestSelling/BestProduct";

export default async function FetchApi() {
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  // const searchBar = <SearchBar res={res}  />

  const bestProduct = <BestProduct res={res} index={0} />;
  return <div></div>;
}
