"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import img1 from "../../images/laptop-1.jpeg";
import img2 from "../../images/laptop-2.jpg";
import img3 from "../../images/laptop-3.jpg";
// import img4 from '../../../images/lenovo-nda-yoga.webp'
// import img5 from '../../../images/lenovo-sensational-spring-sale-2025-w1.jpg'
import Image from "next/image";
export default function CartIcon() {
  const [productsCount, setProductsCount] = useState(0);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const url = window.location.href;
  console.log(url.length);

  const add = () => {
    setProductsCount(productsCount + 1);
  };
  const subtract = () => {
    setProductsCount(productsCount - 1);
    if (productsCount === 0) setProductsCount(0);
  };
  const remove = () => {
    setProductsCount(0);
  };

  const isProduct = numbers.map((number) => {
    if (url[40] === number.toString()) {
      return number;
    } else return;
  });
  //console.log(isProduct);

  return (
    <div>
      <div className="m-4">
        <Link href={"/"} className="text-blue-600">
          Home
        </Link>{" "}
        {"> "}
        <Link href={"/components/navbar/cartId"}>Cart</Link>
      </div>
      <a href={"/components/navbar/cartId"}>
        <FaCartArrowDown className="text-6xl  mx-10 my-2 absolute top-0 right-0" />
      </a>
      <div className="w-100 m-4">
        {url[40] === "0" ? (
          <Image src={img3} alt="laptop-pic" />
        ) : url[40] === "1" ? (
          <Image src={img2} alt="laptop-pic" />
        ) : url[40] === "2" ? (
          <Image src={img1} alt="laptop-pic" />
        ) : (
          <div></div>
        )}
      </div>

      <div className="m-2">
        {url[40] === "0" ? (
          <p>cost : 23$ x{productsCount}</p>
        ) : url[40] === "1" ? (
          <p>cost : 45$ x{productsCount} </p>
        ) : url[40] === "2" ? (
          <p>cost : 10$ x{productsCount} </p>
        ) : (
          <div></div>
        )}
      </div>

      {numbers.map((number) => {
        if (url[40] === number.toString()) {
          return (
            <div className="flex" key={number}>
              <button
                onClick={add}
                className="block px-2 bg-stone-900 rounded text-green-600 m-2 w-10 text-xl"
              >
                +
              </button>
              <button
                onClick={subtract}
                className="block px-2 bg-stone-900 rounded text-stone-100 m-2 w-10 text-xl"
              >
                -
              </button>
              <button
                onClick={remove}
                className="block px-2 bg-stone-900 rounded text-red-600 m-2 w-10 text-xl"
              >
                x
              </button>
            </div>
          );
        }
      })}
      {!isProduct ? (
        <h1 className="text-red-600 m-2">
          You'r cart is empty please choose the products!
        </h1>
      ) : null}

      <div className="m-2 text-green-600">
        {url[40] === "0" ? (
          <h2>payment : {23 * productsCount} $ </h2>
        ) : url[40] === "1" ? (
          <h2>payment : {45 * productsCount} $ </h2>
        ) : url[40] === "2" ? (
          <h2>payment : {10 * productsCount} $ </h2>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
