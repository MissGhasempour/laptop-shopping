"use client";
import FilterProduct from "@/components/filter-products/filterProduct";
import Result from "@/components/filter-products/result";
import { useSearchParams } from "next/navigation";

export default function FilterProductPage() {
  const searchParams = useSearchParams();
  const brandname = searchParams.get("brandname");
  //   console.log(brandname)
  return (
    <div className="flex bg-stone-600">
      <FilterProduct />
      {brandname === "Braavosi" ? (
        <Result searchParams={searchParams} brandname={brandname} id={0} />
      ) : brandname === "Walder" ? (
        <Result searchParams={searchParams} brandname={brandname} id={1} />
      ) : brandname === "Lamprey" ? (
        <Result searchParams={searchParams} brandname={brandname} id={2} />
      ) : brandname === "Merling" ? (
        <Result searchParams={searchParams} brandname={brandname} id={3} />
      ) : brandname === "Crackbones" ? (
        <Result searchParams={searchParams} brandname={brandname} id={4} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
