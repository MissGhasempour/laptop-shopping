"use client";
import FilterProduct from "@/components/filter-products/filterProduct";
import Result from "@/components/filter-products/result";
import { useSearchParams } from "next/navigation";
import style from "@/css/filter.module.css";

export default function FilterProductPage() {
  const searchParams = useSearchParams();
  const brandname = searchParams.get("brandname");
  //   console.log(brandname)
  return (
    <div className="flex bg-cover h-120 text-stone-900" id={style.bgImage}>
      <FilterProduct />
      {brandname === "Braavosi" ? (
        <Result brandname={brandname} id={0} />
      ) : brandname === "Walder" ? (
        <Result brandname={brandname} id={1} />
      ) : brandname === "Lamprey" ? (
        <Result brandname={brandname} id={2} />
      ) : brandname === "Merling" ? (
        <Result brandname={brandname} id={3} />
      ) : brandname === "Crackbones" ? (
        <Result brandname={brandname} id={4} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
