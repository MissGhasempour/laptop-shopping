"use client";
import img_2 from "../../images/laptop-3.jpg";
import img_1 from "../../components/header/laptop-1.jpg";
import img_3 from "../../images/laptop-2.jpg";
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
  const index = "0";
  const url = window.location.href;
  console.log(url)

  // console.log(window.location.href)
  // try {
  //   const response = await fetch(`/productInfo/productId=${index}`);
  //   const data = await response.json();
  //   // console.log(data);
  // } catch (err) {
  //   console.log(err);
  // }

  const addToCart = () => {};
  return (
    <div>
        <div>
            <a href="/">Home</a>{' > '}
            <a href={`/productInfo/productId=${url[44]}`}>Details</a>
        </div>
      {url[44] === "0" ? (
        <h2 className="text-purple-800">{res[0].culture}</h2>
      ) : url[44] === "1" ? (
        <h2 className="text-green-800">{res[1].name}</h2>
      ) : (
        <h2 className="text-green-800">{res[2].aliases}</h2>
      )}
      <Image
        src={
          url[44] === "0"
            ? img_2
            : url[44] === "1"
            ? img_1
            : url[44] === "2"
            ? img_3
            : img_3
        }
        alt="laptop"
        width={200}
        height={50}
      ></Image>
      {url[44] === "0" ? (
        <p className="text-pink-500">{res[0].aliases}</p>
      ) : url[44] === "1" ? (
        <p className="text-pink-500">{res[1].aliases}</p>
      ) : (
        <p className="text-pink-500">{res[2].books[0]}</p>
      )}

      {url[44] === "0" ? (
        <p className="text-pink-500">{23}$</p>
      ) : url[44] === "1" ? (
        <p className="text-pink-500">{45}$</p>
      ) : (
        <p className="text-pink-500">{10}$</p>
      )}

      <a href={`../../components/navbar/${url[44]}`} onClick={addToCart}>
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
