"use client";
import Image from "next/image";
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
    router.push(`/cart-id/${index}`);
  };
  return (
    <div className="border rounded-2xl m-2 bg-stone-100 max-lg:w-50 max-xl:w-70 w-80 transition duration-300 ease-in-out max-sm:w-60 max-sm:ml-10">
      <div>
        <div className="relative left-80 top-6 sm:left-27 max-sm:left-20 ">
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
              className="max-sm:w-80"
            />
          ) : index === 1 ? (
            <Image
              src={img2}
              alt="laptop-pic"
              className="max-sm:w-80"
            />
          ) : (
            <Image
              src={img3}
              alt="laptop-pix"
              className="max-sm:w-80"
            />
          )}
        </div>
        <p className="m-2 text-zinc-900">starting At</p>
        <h3 className="m-2 text-zinc-900">$199.01</h3>

        <button
          onClick={shop}
          className="cursor-pointer sm:w-30 bg-zinc-900 max-md:w-30 w-100 rounded-xl text-zinc-100 py-2 my-10 mt-20 relative left-25 max-sm:w-50 max-sm:left-5 max-lg:left-10 "
        >
          Shop
        </button>
      </div>
    </div>
  );
}
