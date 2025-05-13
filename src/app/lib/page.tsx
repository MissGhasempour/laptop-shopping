// import Api from "./api";
import GetApi from "./getApi";
//import helper from "../helper/helper";
import SearchBar from "../components/navbar/searchBar/searchBar";
export default async function Page() {
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  //const flag = false
  // console.log(helper())
  return (
    <div>
      {/* <Api /> */}
      <div>
            <a href="/">Home</a>{' > '}
            <a href="/lib">Products</a>
        </div>
      <GetApi res={res} />
      {/* {flag ? <ProductDefinition  res={res} /> : null} 
       */}
    </div>
  );
}
