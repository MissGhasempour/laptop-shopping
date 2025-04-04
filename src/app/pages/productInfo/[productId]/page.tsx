import ProductDefinition from "./productDefinition";
//import dynamic from "next/dynamic";
export default async function Page() {
  //const id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // const ProductDefinition = dynamic((): any =>  {
  //   ssr: false
  // })

  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  console.log(res)
  return (
    <div>
      <ProductDefinition res={res} />
    </div>
  );
}
