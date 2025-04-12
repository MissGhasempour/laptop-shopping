"use client";
import img_2 from "@/app/images/laptop-3.jpg";
import img_1 from "@/app/images/laptop-1.jpg";
import img_3 from "@/app/images/james-mckinven-tpuAo8gVs58-unsplash.jpg";
import Image from "next/image";
import { Link } from "react-router-dom";
import getProducts from "@/app/lib/api/getProducts";
//import { GetServerSideProps } from 'next';
//import dynamic from 'next/dynamic';
export default  function ProductDefinition({res} : {res : [
  { culture: string; aliases: string },
  { culture: string; aliases: string; name: string },
  { culture: string; aliases: string; books: string[] }
]}) {

  const url = window.location.href;
  console.log(url.length)

  const addToCart = () => {};
  return (
    <div>
        <div>
            <a href="/">Home</a>{' > '}
            <a href={`/product-info/${url[35]}`}>Details</a>
        </div>
      {url[35] === "0" ? (
        <h2 className="text-purple-800">{res[0].culture}</h2>
      ) : url[35] === "1" ? (
        <h2 className="text-green-800">{res[1].name}</h2>
      ) : (
        <h2 className="text-green-800">{res[2].aliases}</h2>
      )}
      <Image
        src={
          url[35] === "0"
            ? img_2
            : url[35] === "1"
            ? img_1
            : url[35] === "2"
            ? img_3
            : img_3
        }
        alt="laptop"
        width={200}
        height={50}
      ></Image>
      {url[35] === "0" ? (
        <p className="text-pink-500">{res[0].aliases}</p>
      ) : url[35] === "1" ? (
        <p className="text-pink-500">{res[1].aliases}</p>
      ) : (
        <p className="text-pink-500">{res[2].books[0]}</p>
      )}

      {url[35] === "0" ? (
        <p className="text-pink-500">{23}$</p>
      ) : url[35] === "1" ? (
        <p className="text-pink-500">{45}$</p>
      ) : (
        <p className="text-pink-500">{10}$</p>
      )}

      <a href={`/${url[35]}`} onClick={addToCart}>
        Add To Cart
      </a>
      {/* <button
        onClick={addToCart}
        className="rounded-md bg-zinc-500 p-2 m-3 text-stone-200"
      >
        Add to Cart
      </button> */}
    </div>
  );
}
