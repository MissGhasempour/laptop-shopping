
import React from 'react';
import Image from "next/image";
// import Link from "next/link";
import img_2 from "@/app/images/laptop-3.jpg";
import img_1 from "@/app/images/laptop-1.jpg";
import img_3 from "@/app/images/james-mckinven-tpuAo8gVs58-unsplash.jpg";
import getProducts from '@/app/lib/api/getProducts';

export default  function ProductInfo({
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
  console.log(res);

  //console.log(window)
  // const showInfo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   //e.preventDefault()
  //   index[0] === 0
  //     ? (e.currentTarget.href = `/productInfo/productId=${index}`)
  //     : (e.currentTarget.href = `/productInfo/productId=${index}`);
  //   //console.log(router);
  // };

 
  return (
    <div className="my-7 mx-4">
      <div className="mb-4">
        {index[0] === 0 ? (
          <h2 className="text-purple-800">{res[index[0]].culture}</h2>
        ) : index[0] === 1 ? (
          <h2 className="text-green-800">{res[index[0]].name}</h2>
        ) : (
          <h2 className="text-green-800">{res[index[0]].aliases}</h2>
        )}
      </div>

      <div className="w-100">
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
          className='w-100'
        ></Image>
      </div>

      <div className="my-4">
        {index[0] === 0 ? (
          <p className="text-pink-500">{res[index[0]].aliases}</p>
        ) : index[0] === 1 ? (
          <p className="text-pink-500">{res[index[0]].aliases}</p>
        ) : (
          <p className="text-pink-500">{res[index[0]].books[0]}</p>
        )}
      </div>

      <a
        href={`/product-info/${index}`}
        className="text-blue-800 p-2 block border-2 w-25 my-2 rounded-md bg-purple-300"
        
      >
        details ...
      </a>
      <br />
    </div>
  );
}
