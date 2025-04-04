import React from 'react';
import Image from "next/image";
import Link from "next/link";
import img_1 from "../../../images/lenovo-nda-yoga.webp";
export default function Product() {
  return (
    <div>
      <Image src={img_1} alt="product-img" width={400} height={50} />
      <p>product defenition</p>
      <Link href="/pages/lib" className="text-blue-800">
        View All |{" "}
      </Link>
      <Link href="#" className="text-blue-800">
        Learn More
      </Link>
    </div>
  );
}
