"use client";
import { useSearchParams } from "next/navigation";
import type { NextRequest, NextResponse } from "next/server";
import Image from "next/image";
import img1 from "@/images/laptop-1.jpeg";
import Link from "next/link";

export default function Result() {
  //     try {
  //         console.log(request.url)
  //         const rawParams = request.url.split('?')[1];
  //         const params = qs.parse(rawParams);
  //  // Now you have access to the query String parameters //
  //  // Or you can do it this way
  //        const yourParamName = request.nextUrl.searchParams.get('brandname');
  //  // also try getAll() I think that might work
  //      } catch (error: unknown) {
  //        console.log(error);
  //     }

  const index: number = 0;
  const searchParams = useSearchParams();
  const brandname = searchParams.get("brandname");
  return (
    <>
      <div className="m-4">
        <h1>{brandname}</h1>
        <Image src={img1} alt="laptop-pic" />
        <Link
          href={`/product-info/${index}`}
          className="text-blue-800 p-2 block border-2 w-25 my-2 rounded-md bg-purple-300"
        >
          details ...
        </Link>
      </div>
    </>
  );
}
