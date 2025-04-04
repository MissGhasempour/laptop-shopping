import GetApi from "./api/getApi";
//import helper from "../helper/helper";

export default async function Page({filter} : {filter : React.MouseEventHandler<HTMLInputElement>;}) {
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();

  // console.log(helper())
  return (
    <div>
    
      <div>
            <a href="/">Home</a>{' > '}
            <a href="/lib">Products</a>
        </div>
      <GetApi res={res} filter={filter} />
      {/* {flag ? <ProductDefinition  res={res} /> : null} 
       */}
    </div>
  );
}
