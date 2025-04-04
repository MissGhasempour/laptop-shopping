"use client";
import img_2 from "../../../images/laptop-3.jpg";
import img_1 from "../../../components/header/laptop-1.jpg";
import img_3 from "../../../images/laptop-2.jpg";
import Image from "next/image";
import { Link } from "react-router-dom";
//import { GetServerSideProps } from 'next';
//import dynamic from 'next/dynamic';
export default function ProductDefinition({
  res,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  const url = window.location.href;
 // console.log(url, res);

  const addToCart = () => {};
  return (
    <div>
      <div className="m-4">
        <a href="/" className="text-blue-600">
          Home
        </a>
        {" > "}
        <a href="../../../pages/lib" className="text-blue-600">Products</a> {" > "}
        <a href={`/productInfo/productId=${url[44]}`}>Details</a>
      </div>

      <div className="mt-10 ml-4">
        {url[50] === "0" ? (
          <h2 className="text-purple-800">{res[0].culture}</h2>
        ) : url[50] === "1" ? (
          <h2 className="text-green-800">{res[1].name}</h2>
        ) : (
          <h2 className="text-green-800">{res[2].aliases}</h2>
        )}
      </div>

      <div className="m-4 w-200">
        <Image
          src={
            url[50] === "0"
              ? img_2
              : url[50] === "1"
              ? img_1
              : url[50] === "2"
              ? img_3
              : img_3
          }
          alt="laptop"
        ></Image>
      </div>

      <div className="mx-4 mt-8">
        {url[50] === "0" ? (
          <p className="text-pink-500">{res[0].aliases}</p>
        ) : url[50] === "1" ? (
          <p className="text-pink-500">{res[1].aliases}</p>
        ) : (
          <p className="text-pink-500">{res[2].books[0]}</p>
        )}
      </div>

      <div className="m-4">
        {url[50] === "0" ? (
          <p>{23} $</p>
        ) : url[50] === "1" ? (
          <p>{45} $</p>
        ) : (
          <p>{10} $</p>
        )}
      </div>

      <div className="m-4 border-1 w-40 p-2 text-center rounded bg-stone-900 text-zinc-100">
        <a href={`../../../pages/${url[50]}`} onClick={addToCart}>
          Add To Cart
        </a>
      </div>
    </div>
  );
}
