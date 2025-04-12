"use server";
import React from "react";
import ProductInfo from "../product-info/productInfo";
import getProducts from "@/app/lib/api/getProducts";

export default async function Products() {
  const res = await getProducts();

  return (
    <div className="flex m-3">
      <div>
        <div className="flex">
          <ProductInfo index={[0]} res={res} />
          <ProductInfo index={[1]} res={res} />
          <ProductInfo index={[2]} res={res} />
        </div>

        <div className="mx-10 flex">
          <ProductInfo index={[3]} res={res} />
          <ProductInfo index={[4]} res={res} />
        </div>
      </div>
    </div>
  );
}
