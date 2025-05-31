"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductCard from "../product-card/productCard";

type Res = {
  aliases:string;
  bookes: string[];
  newRes:string[];
  setNewRes:Dispatch<SetStateAction<string[]>>
}
export default function Products({
  res,
}: {
  res: [{ culture: string; aliases: string; books: string }];
}) {
  //console.log(res[0]);

  const [newRes, setNewRes]:Res = useState();
  useEffect(() => {
    const filterProductCount = res.splice(1,4);
    setNewRes(filterProductCount);
  }, []);

  return (
    <div className="flex m-3 mt-20 overflow-hidden mobile:block max-mobile:block tablet:flex">
      {newRes? newRes.map((product:{aliases:string, books:string[]}, index:number) => {
        return (
          <ProductCard
            id={index}
            isPurple={!index}
            culture={product.aliases}
            books={product.books[0]}
            imageSrc=""
            key={product.aliases}
          />
        );
      }) : null}
    </div>
  );
}
