import React from "react";
import Products from "./products/products";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className="m-4">
        <Link href={"/"} className="text-blue-600">
          Home
        </Link>
        {" > "}
        <Link href={"/pages"}>
          View all
        </Link>
      </div>
      <Products />
    </div>
  );
}
