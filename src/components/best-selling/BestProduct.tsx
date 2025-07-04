"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import img1 from "@/images/dell-bXfQLglc81U-unsplash.jpg";
import img2 from "@/images/taan-huyn-RyGOh7pRzAI-unsplash.jpg";
import img3 from "@/images/anete-lusina-zwsHjakE_iI-unsplash.jpg";
import { motion } from "motion/react";

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
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className="border mobile:ml-5  rounded-2xl m-2 bg-stone-100 max-lg:w-50 max-xl:w-60 mobile:w-70  transition duration-300 ease-in-out max-sm:w-50 max-sm:ml-10 2xl:w-100"
    >
      <div>
        <div className="relative left-30 top-6 sm:left-27 max-sm:left-20 ">
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
          <div className="relative left-2 sm:left-0 max-sm:left-0 text-yellow-300">
            <FaStar className="inline" />
            <FaStar className="inline" /> <FaStar className="inline" />
            <FaStar className="inline" />
            <FaRegStarHalfStroke className="inline" />
            <h2 className="inline-block m-2"> 4.5</h2>
          </div>
        </div>
        <div className="my-6">
          {index === 0 ? (
            <Image src={img1} alt="laptop-pic" className="max-sm:w-80" />
          ) : index === 1 ? (
            <Image src={img2} alt="laptop-pic" className="max-sm:w-80" />
          ) : (
            <Image src={img3} alt="laptop-pix" className="max-sm:w-80" />
          )}
        </div>
        <p className="m-2 text-zinc-900">starting At</p>
        <h3 className="m-2 text-zinc-900">$199.01</h3>

        <button
          onClick={shop}
          className="cursor-pointer max-mobile:ml-10 mobile:ml-20 laptop:ml-15 ipad:ml-12 sm:w-30 bg-zinc-900 max-md:w-30  rounded-xl text-zinc-100 py-2 my-10 mt-20 relative ml-10 px-10 max-sm:w-40 max-sm:left-5 max-lg:left-10 max-xl:left-15 2xl:ml-11"
        >
          Shop
        </button>
      </div>
    </motion.div>
  );
}
