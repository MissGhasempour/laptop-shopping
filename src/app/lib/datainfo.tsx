"use client";
import Image from "next/image";
import Link from "next/link";
import img_2 from "../images/laptop-3.jpg";
import img_1 from "../components/header/laptop-1.jpg";
import img_3 from "../images/laptop-2.jpg";

export default function DataInfo({
  res,
  index,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
  index: number[];
}) {
  //console.log(res);
  // const router = useRouter();
  // const { id } = useParams();
  //const {id} = router.query
  //console.log(id);

  // useEffect(() => {
  //   async function api() {
  //     try {
  //       const response = await fetch("/productInfo/0");
  //       const data = await response.json();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   api();
  // }, []);

  //console.log(window)
  const showInfo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //e.preventDefault()
    index[0] === 0
      ? (e.currentTarget.href = `/productInfo/productId=${index}`)
      : (e.currentTarget.href = `/productInfo/productId=${index}`);
    //console.log(router);
  };

  return (
    <div className="mx-5">
      {index[0] === 0 ? (
        <h2 className="text-purple-800">{res[index[0]].culture}</h2>
      ) : index[0] === 1 ? (
        <h2 className="text-green-800">{res[index[0]].name}</h2>
      ) : (
        <h2 className="text-green-800">{res[index[0]].aliases}</h2>
      )}

      <Image
        src={
          index[0] === 0
            ? img_2
            : index[0] === 1
            ? img_1
            : index[0] === 2
            ? img_3
            : img_3
        }
        alt="laptop"
        width={200}
        height={50}
      ></Image>
      {index[0] === 0 ? (
        <p className="text-pink-500">{res[index[0]].aliases}</p>
      ) : index[0] === 1 ? (
        <p className="text-pink-500">{res[index[0]].aliases}</p>
      ) : (
        <p className="text-pink-500">{res[index[0]].books[0]}</p>
      )}

      <Link
        href={`/productInfo/productId=${index}`}
        className="text-blue-800 p-2 block border-2 w-25 m-2 rounded-md bg-purple-300"
        onClick={showInfo}
      >
        details ...
      </Link>
      <br />
    </div>
  );
}
