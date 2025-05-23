"use client";
import React from "react";
import ProductCard from "../product-card/productCard";

export default function Products({
  res,
}: {
  res: [{ culture: string; aliases: string ; books : string}];
}) {
  console.log(res[0])
  return (
    <div className="flex m-3 mt-20">
      {res.map((product, index) => (
        <ProductCard
          id={index}
          isPurple={!index}
          culture={product.aliases}
          books={product.books[0]}
          imageSrc=""
          key={product.aliases}
        />
      ))}
    </div>
  );
}
