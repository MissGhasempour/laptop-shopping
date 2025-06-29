"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function FilterProduct() {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const [queryParam, setQueryParam] = useState("");
  const [param, setParam] = useState("");

  const filterProducts = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("brandname", value);
      setParam(params.toString());
      setQueryParam(params?.toString());
      return router.push(pathname + "?" + params.toString());
    },

    [searchParams]
  );

  useEffect(() => {
    queryParam?.length !== 0
      ? router.push(pathname + "?" + param?.toString())
      : router.push(pathname);
  }, [queryParam]);

  return (
    <div>
      <div className="flex m-10">
        <div className="w-30">
          <h1 className="mb-5">Filter by specs</h1>
          <h2 className="text-red-600 my-2">Brand</h2>
          <input
            type="radio"
            onClick={(e) => filterProducts(e.currentTarget.value)}
            value={"Braavosi"}
            name="filter"
          />{" "}
          Braavosi <br />
          <input
            type="radio"
            onClick={(e) => filterProducts(e.currentTarget.value)}
            value={"Walder"}
            name="filter"
          />{" "}
          Walder
          <br />
          <input
            type="radio"
            onClick={(e) => filterProducts(e.currentTarget.value)}
            value={"Lamprey"}
            name="filter"
          />{" "}
          Lamprey <br />
          <input
            type="radio"
            onClick={(e) => filterProducts(e.currentTarget.value)}
            value={"Merling"}
            name="filter"
          />{" "}
          Merling <br />
          <input
            type="radio"
            onClick={(e) => filterProducts(e.currentTarget.value)}
            value={"Crackbones"}
            name="filter"
          />{" "}
          Crackbones
        </div>
      </div>
    </div>
  );
}
