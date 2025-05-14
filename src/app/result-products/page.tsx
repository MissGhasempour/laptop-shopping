'use client'
import Result from "@/components/filter-products/result";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const brandname = searchParams.get("brandname");
  return (
    <>
      {brandname === "Braavosi" ? (
        <Result searchParams={searchParams} brandname={brandname} id={0} />
      ) : brandname === "Walder" ? (
        <Result searchParams={searchParams} brandname={brandname} id={1} />
      ) : (
        <div></div>
      )}
    </>
  );
}
