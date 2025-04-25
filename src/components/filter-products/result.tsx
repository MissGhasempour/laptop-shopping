"use client";

import Image from "next/image";
import img2 from "@/images/dell-ocAuPlfZXEc-unsplash.jpg";
import img_1 from "@/images/taan-huyn-RyGOh7pRzAI-unsplash.jpg";
import img_3 from "@/images/dell-bXfQLglc81U-unsplash.jpg";
import img_4 from "@/images/anete-lusina-zwsHjakE_iI-unsplash.jpg";
import img_5 from "@/images/luis-quintero-aUnkqeCvz80-unsplash.jpg";
import Link from "next/link";


export default function Result({searchParams, brandname, id } : {
  searchParams : any;
  brandname : string;
  id: number
}) {

 
  return (
    <>
      <div className="m-4">
        <h1  className="text-blue-300 m-4">{brandname}</h1>
        <Image src={brandname === 'Walder'? img_1 : brandname === 'Braavosi' ? img2 : brandname === 'Lamprey ' ? img_3 : brandname === 'Merling' ? img_4 : brandname === 'Crackbones' ? img_5 : img2} alt="laptop-pic"className="m-4" width={500} />
        <Link
          href={`/product-info/${id}`}
          className="hover:bg-blue-800 hover:border-blue-800 p-2 block border-2 w-25 my-8 rounded-md ml-47 "
        >
          details ...
        </Link>
      </div>
    </>
  );
}
