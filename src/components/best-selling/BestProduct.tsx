"use client";
import Image from "next/image";
import img from "@/app/images/zqvz1vw0e63x5kczhorged3oieavel774945.webp";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import img1 from "@/images/dell-bXfQLglc81U-unsplash.jpg";
import img2 from "@/images/taan-huyn-RyGOh7pRzAI-unsplash.jpg";
import img3 from "@/images/anete-lusina-zwsHjakE_iI-unsplash.jpg";
export default function BestProduct({
  res,
  index,
}: {
  res: [
    { culture: string; aliases: string; books: string[] },
    { culture: string; aliases: string; name: string; books: string[] },
    { culture: string; aliases: string; books: string[] }
  ];
  index: number;
}) {
  const router = useRouter();
  const shop = () => {
    router.push(`/${index}`);
  };
  return (
    <div className="border rounded-2xl m-2 bg-stone-100 max-lg:w-50">
      <div>
        <div className="relative left-80 top-6 sm:left-27 max-sm:left-30 ">
          <FaRegHeart className="m-2 text-red-600" />
        </div>

        <div className="mx-5">
          {index === 0 ? (
            <h2 className="text-rose-400">{res[index].culture}</h2>
          ) : index === 1 ? (
            <h2 className="text-rose-400">{res[index].aliases}</h2>
          ) : (
            <h2 className="text-rose-400">{res[index].aliases}</h2>
          )}
          <div className="relative left-52 sm:left-0 max-sm:left-0 text-yellow-300">
            <FaStar className="inline" />
            <FaStar className="inline" /> <FaStar className="inline" />
            <FaStar className="inline" />
            <FaRegStarHalfStroke className="inline" />
            <h2 className="inline-block m-2"> 4.5</h2>
          </div>
        </div>
        <div className="my-6">
          {index === 0 ? (
            <Image
              src={img1}
              alt="laptop-pic"
              className=" sm:w-100 max-sm:w-40"
            />
          ) : index === 1 ? (
            <Image
              src={img2}
              alt="laptop-pic"
              className="sm:w-95 max-sm:w-34"
            />
          ) : (
            <Image
              src={img3}
              alt="laptop-pix"
              className="sm:w-102 max-sm:w-34"
            />
          )}
        </div>
        <p className="m-2 text-zinc-900">starting At</p>
        <h3 className="m-2 text-zinc-900">$199.01</h3>
        {/* <p className="m-2 mt-6 text-blue-500 ">{res[index].books[0]} </p> */}
        <button
          onClick={shop}
          className="bg-zinc-900  w-50 rounded-xl text-zinc-100 py-2 my-10 mt-20 mx-10 sm:w-30 max-sm:w-20"
        >
          Shop
        </button>
      </div>
    </div>
  );
}
