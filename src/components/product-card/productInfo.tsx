
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import img_2 from "@/images/laptop-3.jpg";
import img_1 from "@/images/laptop-1.jpg";
import img_3 from "@/images/james-mckinven-tpuAo8gVs58-unsplash.jpg";
import Link from "next/link";

export default function ProductInfo({ res,index }: { res: [
  { culture: string; aliases: string },
  { culture: string; aliases: string; name: string },
  { culture: string; aliases: string; books: string[] }
]; index: any }) {
  //console.log(res);


  return (
    <div className="my-7 mx-4">
      <div className="mb-4">
        {index === 0 ? (
          <h2 className="text-purple-800">{res[index].culture}</h2>
        ) : index === 1 ? (
          <h2 className="text-green-800">{res[1].culture}</h2>
        ) : (
          <h2 className="text-green-800">{res[index].aliases}</h2>
        )}
       
      </div>

      <div>
        <Image
          src={
            index === 0
              ? img_2
              : index === 1
              ? img_1
              : index === 2
              ? img_3
              : img_3
          }
          alt="laptop"
          className="w-100"
        ></Image>
      </div>

      <div className="my-4">
        {index === 0 ? (
          <p className="text-pink-500">{res[index].aliases}</p>
        ) : index === 1 ? (
          <p className="text-pink-500">{res[index].aliases}</p>
        ) : (
          <p className="text-pink-500">{res[index].books[0]}</p>
        )}
      </div>

      <Link
        href={`/product-card/${index}`}
        className="text-blue-800 p-2 block border-2 w-25 my-2 rounded-md bg-purple-300"
      >
        details ...
      </Link>
      <br />
    </div>
  );
}
