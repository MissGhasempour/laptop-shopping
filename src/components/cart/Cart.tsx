"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import img_2 from "@/images/dell-ocAuPlfZXEc-unsplash.jpg";
import img_1 from "@/images/taan-huyn-RyGOh7pRzAI-unsplash.jpg";
import img_3 from "@/images/james-mckinven-tpuAo8gVs58-unsplash.jpg";
import img_4 from "@/images/anete-lusina-zwsHjakE_iI-unsplash.jpg";
import img_5 from "@/images/luis-quintero-aUnkqeCvz80-unsplash.jpg";
import img_6 from "@/images/nicolas-bichon-ZhV4iqAXxyA-unsplash.jpg";
import img_7 from "@/images/workperch-wnZ3ai3_idw-unsplash.jpg";
import img_8 from "@/images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import img_9 from "@/images/sreej-pradhan-msKaizMpoRs-unsplash.jpg";
import img from "@/images/yuhaimedia-ykI7BeSWgMo-unsplash.jpg";
import Image from "next/image";

export default function CartIcon() {
  const [productsCount, setProductsCount] = useState(0);
  const [numbers, setNumbers] = useState(["0", 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const url = window.location.href;
  console.log(url.length, url);

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
    console.log(number);
    if (url[22] === number.toString()) {
      return number;
    } else return;
  });
  console.log(isProduct);

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
        <Link href={`/product-info/${url[22]}`} className="text-blue-600">
          ProductInfo
        </Link>{" "}
        {"> "}
        <Link href={`/${url[22]}`}>Cart</Link>
      </div>

      <div className="w-100 m-4">
        <Image
          src={
            url[22] === "0"
              ? img_2
              : url[22] === "1"
              ? img_1
              : url[22] === "2"
              ? img_3
              : url[22] === "3"
              ? img_4
              : url[22] === "4"
              ? img
              : url[22] === "5"
              ? img_5
              : url[22] === "6"
              ? img_6
              : url[22] === "7"
              ? img_7
              : url[22] === "8"
              ? img_8
              : img_9
          }
          alt="laptop"
          width={400}
          height={50}
          className="m-2"
        ></Image>
      </div>

      <div className="m-2">
        {url[22] === "0" ? (
          <p>cost : 23$ x{productsCount}</p>
        ) : url[22] === "1" ? (
          <p>cost : 45$ x{productsCount} </p>
        ) : url[22] === "2" ? (
          <p>cost : 10$ x{productsCount} </p>
        ) : (
          <p>cost : 10$ x{productsCount} </p>
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
          <h2>payment : {10 * productsCount} $ </h2>
        )}
      </div>
    </div>
  );
}
