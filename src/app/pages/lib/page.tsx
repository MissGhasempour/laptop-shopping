import GetApi from "./api/getApi";
//import helper from "../helper/helper";

export default async function Page({
  filter,
}: {
  filter: React.MouseEventHandler<HTMLInputElement>;
}) {
  // console.log(helper())
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  console.log(res)
  return (
    <div>
      <div className="m-4">
        <a href="/" className="text-blue-600">Home</a>
        {" > "}
        <a href="../../pages" className="text-blue-600">View All</a>
        {" > "}
        <a href="/lib">Products</a>
      </div>
      <GetApi res={res} filter={filter} />
    </div>
  );
}
