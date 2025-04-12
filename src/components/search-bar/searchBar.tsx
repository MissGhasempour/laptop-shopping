"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import img1 from "@/app/images/laptop-3.jpg";
import Link from "next/link";
export default function SearchBar({
  res,
  display,
}: {
  res : [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
  display: any;
}) {
  const [searchProduct, setSearchProduct] = useState("");
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(display)
    if (e.currentTarget.value === res[0].culture) {
      setSearchProduct(res[0].culture);
      display.value = "true";
    } else {
      setSearchProduct("");
      display.value = "false";
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="What are you looking for today ? "
        className="border rounded-2xl p-3 w-200 ml-20"
        onChange={(e) => search(e)}
      />

      {display ? (
        <div>
          <h1>{searchProduct} </h1>
          <Image src={img1} alt="laptop-pic" className="w-300" />
          <p>{res[0].aliases} </p>
          {/* <Link
        href={`/productInfo/${index}`}
        className="text-blue-800 p-2 block border-2 w-25 my-2 rounded-md bg-purple-300"
        onClick={showInfo}
      >
        details ...
      </Link> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
