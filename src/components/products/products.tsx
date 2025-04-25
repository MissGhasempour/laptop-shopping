"use client";
import React from "react";
import ProductInfo from "../product-card/productInfo";

export default function Products({
  res,
}: {
  res: [{ culture: string; aliases: string }];
}) {
  return (
    <div className="flex m-3 ">
      {res.map((product, index) => (
        <ProductInfo
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
