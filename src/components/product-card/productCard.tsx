import React from "react";
import Image from "next/image";
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
import Link from "next/link";

export default function ProductCard({
  id,
  culture,
  books
}: {
  id: number;
  culture: string;
  books: string;
  imageSrc: string;
  isPurple?: boolean;
}) {
  
  return (
    <div className="my-7 mx-4">
      <div className="bg-zinc-100 rounded-2xl w-60 max-sm:w-40 max-lg:w-50 max-mobile:m-auto mobile:m-auto">
        <div>
          <Image
            src={
              id === 0
                ? img_2
                : id === 1
                ? img_1
                : id === 2
                ? img_3
                : id === 3
                ? img_4
                : id === 4
                ? img
                : id === 5
                ? img_5
                : id === 6
                ? img_6
                : id === 7
                ? img_7
                : id === 8
                ? img_8
                : img_9
            }
            alt="laptop"
            className="max-lg:w-40 w-50 relative rounded left-5 top-5 max-sm:w-30 h-30"
          ></Image>
        </div>

        <div className="mb-4 text-center mt-7 max-sm:text-sm">
          <h2 className="text-rose-600">{culture}</h2>
        </div>

        <div className="my-4 ml-4 overflow-hidden max-sm:text-sm">
          <p className="text-blue-800">{books.slice(0,20)} ...</p>
        </div>

        <Link
          href={`/product-info/${id}`}
          className="max-lg:ml-13 max-sm:h-12 max-sm:hover:h-15  text-zinc-100 p-2 block border-2 w-25 my-10 mx-17 text-center rounded-md bg-red-800 hover:bg-zinc-100 hover:text-red-800 hover:border-red-800 max-sm:w-20 max-sm:mx-10"
        >
          details ...
        </Link>
        <br />
      </div>

      <div className="max-mobile:hidden mobile:hidden tablet:block  max-lg:w-50 my-7 w-60 bg-zinc-100 rounded-2xl max-sm:w-40">
        <div>
          <Image
            src={
              id === 0
                ? img_2
                : id === 1
                ? img_1
                : id === 2
                ? img_3
                : id === 3
                ? img_4
                : id === 4
                ? img
                : id === 5
                ? img_5
                : id === 6
                ? img_6
                : id === 7
                ? img_7
                : id === 8
                ? img_8
                : img_9
            }
            alt="laptop"
            className="max-lg:w-40 w-50 h-30 rounded relative left-5 top-5 max-sm:w-30"
          ></Image>
        </div>

        <div className="mb-4 text-center mt-7 max-sm:text-sm">
          <h2 className="text-rose-600">{culture}</h2>
        </div>

        <div className="">
          <div className="my-4 ml-4 overflow-hidden max-sm:text-sm">
            <p className="text-blue-800">{books.slice(0,20)} ...</p>
          </div>

          <Link
            href={`/product-info/${id}`}
            className="max-lg:ml-13 max-sm:h-12 max-sm:hover:h-15 max-sm:w-20 max-sm:mx-10 text-zinc-100 p-2 block border-2 w-25 my-10 mx-17 text-center rounded-md bg-red-800 hover:bg-zinc-100 hover:text-red-800 hover:border-red-800"
          >
            details ...
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
