"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import img1 from "@/app/images/james-mckinven-tpuAo8gVs58-unsplash.jpg";
import img2 from "@/app/images/laptop-1.jpg";
import img3 from "@/app/images/laptop-3.jpg";
import Image from "next/image";

export default function CartIcon() {
  const [productsCount, setProductsCount] = useState(0);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const url = window.location.href;
  console.log(url.length,url);

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

  const isProduct = numbers.find((number) => {
    if (url[22] === number.toString()) {
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
        <Link href={"/products"} className="text-blue-600">
          Products
        </Link>{" "}
        {"> "}
        <Link
          href={`/product-info/${url[22]}`}
          className="text-blue-600"
        >
          ProductInfo
        </Link>{" "}
        {"> "}
        <Link href={`/${url[22]}`}>Cart</Link>
      </div>
      <a href={"/cart-id"}>
        <FaCartArrowDown className="text-6xl  mx-10 my-2 absolute top-0 right-0" />
      </a>
      <div className="w-100 m-4">
        {url[22] === "0" ? (
          <Image src={img3} alt="laptop-pic" />
        ) : url[22] === "1" ? (
          <Image src={img2} alt="laptop-pic" />
        ) : url[22] === "2" ? (
          <Image src={img1} alt="laptop-pic" />
        ) : (
          <div></div>
        )}
      </div>

      <div className="m-2">
        {url[22] === "0" ? (
          <p>cost : 23$ x{productsCount}</p>
        ) : url[22] === "1" ? (
          <p>cost : 45$ x{productsCount} </p>
        ) : url[22] === "2" ? (
          <p>cost : 10$ x{productsCount} </p>
        ) : (
          <div></div>
        )}
      </div>

      {numbers.map((number) => {
        if (url[22] === number.toString()) {
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
        <h1 className="text-red-600 m-4">
          You'r cart is empty please choose the products!
        </h1>
      ) : null}

      <div className="m-2 text-green-600">
        {url[22] === "0" ? (
          <h2>payment : {23 * productsCount} $ </h2>
        ) : url[22] === "1" ? (
          <h2>payment : {45 * productsCount} $ </h2>
        ) : url[22] === "2" ? (
          <h2>payment : {10 * productsCount} $ </h2>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
