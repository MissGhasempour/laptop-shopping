'use client'
import FilterProduct from "@/components/filter-products/filterProduct";
import Result from "@/components/filter-products/result";
import { useSearchParams } from "next/navigation";

export default function FilterProductPage () {
      const searchParams = useSearchParams();
      const brandname = searchParams.get("brandname");
    //   console.log(brandname)
    return <div className="flex">
        <FilterProduct  />
        {brandname ? <Result /> : null} 
    </div>
}