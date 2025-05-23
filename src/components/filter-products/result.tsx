"use client";

import Image from "next/image";
import img2 from "@/images/dell-ocAuPlfZXEc-unsplash.jpg";
import img_1 from "@/images/taan-huyn-RyGOh7pRzAI-unsplash.jpg";
import img_3 from "@/images/dell-bXfQLglc81U-unsplash.jpg";
import img_4 from "@/images/anete-lusina-zwsHjakE_iI-unsplash.jpg";
import img_5 from "@/images/luis-quintero-aUnkqeCvz80-unsplash.jpg";
import Link from "next/link";

export default function Result({
  searchParams,
  brandname,
  id,
}: {
  searchParams: any;
  brandname: string;
  id: number;
}) {
  return (
    <>
      <div className="m-4 bg-zinc-100 ml-50 py-2 w-160 max-xl:ml-10 max-sm:ml-0 2xl:w-800">
        {/* <h1 className="text-blue-600 m-4">{brandname}</h1> */}
        <Image
          src={
            brandname === "Walder"
              ? img_1
              : brandname === "Braavosi"
              ? img2
              : brandname === "Lamprey "
              ? img_3
              : brandname === "Merling"
              ? img_4
              : brandname === "Crackbones"
              ? img_5
              : img2
          }
          alt="laptop-pic"
          className="m-4 ml-40 max-lg:w-70 max-lg:ml-20  max-sm:ml-0 max-sm:w-50"
          width={300}
        />
        <Link
          href={`/product-info/${id}`}
          className="max-sm:ml-13 max-sm:w-25  text-blue-600 text-center hover:text-zinc-100 hover:bg-blue-800 hover:border-blue-800 p-2 block border-2 w-70 my-8 rounded-md ml-44 max-lg:ml-40 max-lg:w-30"
        >
          details ...
        </Link>
      </div>
    </>
  );
}
