"use client";
import Image from "next/image";
import img from "@/app/images/zqvz1vw0e63x5kczhorged3oieavel774945.webp";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import img1 from '@/app/images/laptop-3.jpg';
import img2 from '@/app/images/laptop-1.jpg';
export default function BestProduct({
  res,
  index,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
  index: number;
}) {
  const router = useRouter();
  const shop = () => {
    router.push(`/${index}`);
  };
  return (
    <div>
      <div>
        <div className="relative left-80 top-5">
          <FaRegHeart className="m-2" />
        </div>

        <div className="mx-5">
          {index === 0 ? (
            <h2 className="text-purple-800">{res[index].culture}</h2>
          ) : index === 1 ? (
            <h2 className="text-green-800">{res[index].name}</h2>
          ) : (
            <h2 className="text-green-800">{res[index].aliases}</h2>
          )}
          <div className="relative left-52">
            <FaStar className="inline" />
            <FaStar className="inline" /> <FaStar className="inline" />
            <FaStar className="inline" />
            <FaRegStarHalfStroke className="inline" />
            <h2 className="inline-block m-2"> 4.5</h2>
          </div>
        </div>
        <div className="my-6">
          {index === 0 ? (<Image src={img1} alt="laptop-pic" className="w-100"/>) : index === 1 ? (<Image src={img2} alt="laptop-pic" className="w-83"/>) : (<Image src={img} alt="laptop-pix" />)}
        </div>
        <p className="m-2">starting At</p>
        <h3 className="m-2">$199.01</h3>
        <p className="m-2 mt-6 text-blue-500">{res[index].aliases} </p>
        <button
          onClick={shop}
          className="bg-stone-800 w-50 rounded-xl text-zinc-100 py-2 my-10 mt-20 mx-10"
        >
          Shop
        </button>
      </div>
    </div>
  );
}
