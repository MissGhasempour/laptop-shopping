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
      <div className="m-4 bg-zinc-100 ml-50 py-2 w-90 rounded-xl max-md:bg-purple-200 max-xl:ml-10 max-sm:ml-0 max-md:w-60 max-sm:h-60 2xl:w-800 h-100 max-sm:mt-10 max-sm:w-50 max-sm:bg-zinc-100 max-md:h-60">
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
          className="m-4 ml-7 max-lg:w-70 max-lg:ml-10 rounded-xl max-sm:ml-5 max-sm:w-40 max-md:ml-5 max-md:w-50"
          width={300}
        />
        <Link
          href={`/product-info/${id}`}
          className="max-sm:ml-15 max-sm:w-20 max-sm:p-0 max-md:ml-20 text-purple-700 max-md:w-25  text-center hover:text-zinc-100 hover:bg-purple-700 hover:border-purple-700 p-2 block border-2 w-70 my-8 rounded-md ml-10 max-lg:ml-30 max-lg:w-30"
        >
          details
        </Link>
      </div>
    </>
  );
}
