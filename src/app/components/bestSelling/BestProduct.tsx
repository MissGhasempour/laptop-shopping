'use client'
import Image from "next/image";
import img from "../../images/zqvz1vw0e63x5kczhorged3oieavel774945.webp";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
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
    const router = useRouter()
    const shop = () => {
        router.push(`/components/navbar/${index}`)
    }
  return (
    <div>
      <div>
        <FaRegHeart className="m-2" />

        <div className="mx-5">
      {index === 0 ? (
        <h2 className="text-purple-800">{res[index].culture}</h2>
      ) : index === 1 ? (
        <h2 className="text-green-800">{res[index].name}</h2>
      ) : (
        <h2 className="text-green-800">{res[index].aliases}</h2>
      )}
        
          <FaStar className="inline" />
          <FaStar className="inline" /> <FaStar className="inline" />
          <FaStar className="inline" />
          <FaRegStarHalfStroke className="inline" />
          4.5
        </div>
        <Image src={img} alt="laptop-pix" />
        <p>starting At</p>
        <h3>$199.01</h3>
        <p>{res[index].aliases} </p>
        <button onClick={shop} className="bg-stone-800 w-50 rounded-xl text-zinc-100 py-2 my-7 mx-10">Shop</button>
      </div>
    </div>
  );
}
