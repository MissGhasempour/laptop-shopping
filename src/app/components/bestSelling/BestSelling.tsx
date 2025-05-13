import BestProduct from "./BestProduct";

export default async function BestSelling () {
    const fetched = await fetch(
        "https://www.anapioficeandfire.com/api/characters"
      );
      const res = await fetched.json(); 
    return <div>
        <h2>Best selling pc</h2>
        <div className="flex">
          <BestProduct res={res} index={0}/>
          <BestProduct res={res} index={1}/>
        </div>
    </div>
}