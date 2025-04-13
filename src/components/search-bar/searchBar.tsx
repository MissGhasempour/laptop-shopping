"use client";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import Image from "next/image";
import img1 from "@/images/laptop-3.jpg";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({
  res,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  const [searchProduct, setSearchProduct] = useState("");
  const [display, setDisplay] = useState('false');
  const index = 0;
  //console.log(searchProduct);
  const search: MouseEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.value === res[0].culture) {
      setSearchProduct(res[0].culture);
    } else {
      setSearchProduct("");
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="What are you looking for today ? "
        className="border rounded-2xl p-3 w-200 ml-20"
        onClick={(e) => search(e)}
      />
      <a href={'/result-products'} className="text-blue-400" onClick={() => setDisplay('true')}> <FaSearch className="absolute top-8 left-245"/> </a>
     
      {searchProduct && display ? (
        <div>
          <h1>{searchProduct} </h1>
          <Image src={img1} alt="laptop-pic" className="w-300" />
          <p>{res[0].aliases} </p>
          <Link
            href={`/productInfo/${index}`}
            className="text-blue-800 p-2 block border-2 w-25 my-2 rounded-md bg-purple-300"
          >
            details ...
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
