"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import img1 from "../../../images/laptop-3.jpg";
export default function SearchBar({
  res,
  display,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
  display: Function;
}) {
  const [searchProduct, setSearchProduct] = useState("");
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === res[0].culture) {
      setSearchProduct(res[0].culture);
      display(false);
    } else {
      setSearchProduct("");
      display(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="What are you looking for today ? "
        style={{
          border: "2px solid grey",
          borderRadius: "10px",
          width: "50vw",
          padding: "5px",
          margin: "10px",
        }}
        onChange={search}
      />

      {searchProduct ? (
        <div>
          <h1>{searchProduct} </h1>
          <Image src={img1} alt="laptop-pic" />
          <p>{res[0].aliases} </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
