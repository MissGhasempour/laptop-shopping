"use client";

import { useState, MouseEventHandler } from "react";
import DataInfo from "./datainfo";
import FilterData from "../filter/filterData";
import SearchBar from "../../../components/navbar/searchBar/searchBar";
// import Helper from "../helper/helper";
export default function GetApi({
  res,
  filter
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
  filter : React.MouseEventHandler<HTMLInputElement>;
}) {
  // Helper()
  //console.log(res)
  const [displaly, setDisplay] = useState(true);
  const [brandName, setBrandName] = useState([""]);
  const [displayedItem, setDisplayedItem] = useState(true);
 

  return (
    <div className="flex m-3">
      {displaly ? (
        <div>
          <div className="flex">
            <div>
              <FilterData filter={filter} />
            </div>

            <div>
              <SearchBar res={res} display={setDisplayedItem} />
            </div>
          </div>
          <div>
            {displayedItem ? (
              <div className="flex">
                <DataInfo res={res} index={[0]} />
                <DataInfo res={res} index={[1]} />
                <DataInfo res={res} index={[2]} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {displayedItem ? (
            <div className="mx-10 flex">
              <DataInfo res={res} index={[3]} />
              <DataInfo res={res} index={[4]} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="flex">
          <div>
            <FilterData filter={filter} />
          </div>

          <div className="mx-5">
            {brandName[0] === "Braavosi" ? (
              <div>
                <DataInfo res={res} index={[0]} />
              </div>
            ) : brandName[0] === "Walder" ? (
              <div>
                <DataInfo res={res} index={[1]} />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
