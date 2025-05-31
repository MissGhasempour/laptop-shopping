"use client";
import React, { useEffect } from "react";
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
import img_9 from "@/images/109503917-cartoon-character-with-a-shopping-cart-3d-illustration-internet-shopping.jpg";
import img from "@/images/yuhaimedia-ykI7BeSWgMo-unsplash.jpg";
import Image from "next/image";

export default function CartIcon() {
  const [productsCount, setProductsCount] = useState(0);
  const [numbers, setNumbers] = useState(["0", 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
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

  const isProduct = numbers.find((number) => {
    if (url[30] === number.toString()) {
      return number;
    } else return;
  });
  //console.log(isProduct);

  return (
    <div className="bg-zinc-100 p-4 text-stone-900 bg-gradient-to-r from-zinc-200 via-purple-500 to-pink-400 max-sm:bg-linear-to-bl from-violet-500 to-fuchsia-500 ">
      <div className="m-4">
        <Link href={"/"} className="text-blue-600">
          Home
        </Link>{" "}
        {"> "}
        <Link href={"/products"} className="text-blue-600">
          Products
        </Link>{" "}
        {"> "}
        <Link href={`/product-info/${url[30]}`} className="text-blue-600">
          ProductInfo
        </Link>{" "}
        {"> "}
        <Link href={`/cart-id/${url[30]}`}>Cart</Link>
      </div>

      <div className="my-6 max-2xl:ml-30 max-xl:ml-10 ipad:ml-58 tablet:ml-80 laptop:ml-110">
        <div className=" m-4 max-xl:ml-110">
          <Image
            src={
              url[30] === "0"
                ? img_2
                : url[30] === "1"
                ? img_1
                : url[30] === "2"
                ? img_3
                : url[30] === "3"
                ? img_4
                : url[30] === "4"
                ? img
                : url[30] === "5"
                ? img_5
                : url[30] === "6"
                ? img_6
                : url[30] === "7"
                ? img_7
                : url[30] === "8"
                ? img_8
                : img_9
            }
            alt="laptop"
            width={300}
            height={30}
            className="m-2 relative max-lg:w-50 rounded-xl max-lg:ml-65 max-md:ml-35 max-sm:ml-20"
          ></Image>
        </div>
        <div className="mt-5 mobile:ml-7 relative max-sm:right-10 max-lg:left-30 max-md:left-1 max-xl:ml-75">
          {numbers.map((number) => {
            if (url[30] === number.toString()) {
              return (
                <div
                  className="flex max-mobile:ml-20 mobile:ml-15 max-sm:ml-25 max-xl:ml-50 mb-10 mt-8 max-md:ml-62"
                  key={number}
                >
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
            <h1 className="text-blue-800  max-xl:ml-35">
              You'r cart is empty please choose the products!
            </h1>
          ) : null}

          <div className="mobile:ml-25">
            <div className="m-2 text-stone-900  max-sm:ml-36 max-xl:ml-60 max-lg:ml-70">
              {url[30] === "0" ? (
                <p>cost : 23$ x{productsCount}</p>
              ) : url[30] === "1" ? (
                <p>cost : 45$ x{productsCount} </p>
              ) : url[30] === "2" ? (
                <p>cost : 10$ x{productsCount} </p>
              ) : (
                <p>cost : 23$ x{productsCount}</p>
              )}
            </div>

            <div className="m-2 text-green-800  max-xl:ml-60 max-sm:ml-36 max-sm:text-stone-900 max-md:text-stone-900 max-lg:text-stone-900 max-lg:ml-70">
              {url[30] === "0" ? (
                <h2>payment : {23 * productsCount} $ </h2>
              ) : url[30] === "1" ? (
                <h2>payment : {45 * productsCount} $ </h2>
              ) : url[30] === "2" ? (
                <h2>payment : {10 * productsCount} $ </h2>
              ) : (
                <h2>payment : {10 * productsCount} $ </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
