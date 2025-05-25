"use client";
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
import { useEffect, useState } from "react";

export default function ProductDetail({
  res,
}: {
  res: [
    { culture: string; aliases: string; books: string[] },
    { culture: string; aliases: string; name: string; books: string[] },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  console.log(url.length);

  const addToCart = () => {};
  return (
    <div className="bg-zinc-100 py-7 max-md:w-187">
      <div className="text-stone-900">
        <a href="/" className="inline-block my-4 mx-2 text-blue-700">
          Home
        </a>
        {" >  "}
        <a href={`/product-info/${url[35]}`}> Details</a>
      </div>
      <div></div>

      <div className="flex px-62 py-10 max-lg:px-0  max-md:px-0 max-md:flex max-2xl:ml-40">
        <Image
          src={
            url[35] === "0"
              ? img_2
              : url[35] === "1"
              ? img_1
              : url[35] === "2"
              ? img_3
              : url[35] === "3"
              ? img_4
              : url[35] === "4"
              ? img
              : url[35] === "5"
              ? img_5
              : url[35] === "6"
              ? img_6
              : url[35] === "7"
              ? img_7
              : url[35] === "8"
              ? img_8
              : img_9
          }
          alt="laptop"
          width={400}
          height={50}
          className="m-2 rounded-xl shadow-xl shadow-pink-500 max-md:w-80 max-lg:w-80"
        ></Image>
        <div className="mt-5">
          <div className="text-center relative max-xl:text-center  max-sm:text-left max-sm:mt-10 max-lg:left-20 ">
            {url[35] === "0" ? (
              <h2 className="text-rose-600 my-4 mx-2">{res[0].aliases}</h2>
            ) : url[35] === "1" ? (
              <h2 className="text-rose-600">{res[1].aliases}</h2>
            ) : (
              <h2 className="text-rose-600">{res[2].aliases}</h2>
            )}
          </div>

          {url[35] === "0" ? (
            <p className="text-blue-800 m-4">{res[0].books[0]}</p>
          ) : url[35] === "1" ? (
            <p className="text-blue-800 m-4">{res[1].books[0]}</p>
          ) : (
            <p className="text-blue-800 m-4">{res[2].books[0]}</p>
          )}

          {url[35] === "0" ? (
            <p className="text-green-500 mx-40 my-4"> {23}$ </p>
          ) : url[35] === "1" ? (
            <p className="text-green-500 mx-40 my-4">{45}$</p>
          ) : (
            <p className="text-green-500 mx-40 my-4">{10}$</p>
          )}
          <a
            href={`/cart-id/${url[35]}`}
            onClick={addToCart}
            className="inline-block text-stone-900 mx-24 border rounded-xl p-3 hover:bg-stone-900 hover:text-zinc-100 w-40 text-center"
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}
