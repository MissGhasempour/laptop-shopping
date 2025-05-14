"use client";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function SearchBar({
  res,
  display,
}: {
  res : [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
  display: any;
}) {
  const [searchProduct, setSearchProduct] = useState("");
  const [display, setDisplay] = useState("false");
  const searchParams = useSearchParams();
  const [queryParam, setQueryParam] = useState("");
  const [param, setParam] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const filterProducts = useCallback(
    (value: any) => {
      
      params.set("brandname", value);
      setParam(params.toString());
      setQueryParam(params?.toString());
      return router.push(
        pathname + "?" + params.toString()
      );
    },

    [searchParams]
  );

  useEffect(() => {
    queryParam?.length !== 0
      ? router.push(pathname  + "?" + param?.toString())
      : router.push(pathname);
  }, [queryParam]);

  const search: MouseEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.value === res[0].culture) {
      setSearchProduct(res[0].culture);
      display.value = "true";
    } else {
      setSearchProduct("");
      display.value = "false";
    }
  };
  return (
    <div className="mt-4 max-sm:mt-2">
      <input
        type="text"
        placeholder="What are you looking for today ? "
        className="border rounded-2xl p-3 w-200 ml-20 sm:w-40 sm:m-0 sm:p-1 md:w-80 lg:w-140 lg:p-3 lg:mt-2 max-sm:w-40 max-sm:m-0 max-sm:p-1 max-md:w-10" 
        onClick={(e) => {
          // search(e);
          filterProducts(e.currentTarget.value);
        }}
      />
      <a
        href={"/result-products"}
        className="text-blue-400"
        onClick={() => {setDisplay("true");router.push("result-products")}}
      >
        {" "}
        <FaSearch className="absolute top-6 left-245 sm:left-57 md:left-90 lg:left-170 lg:top-10 max-sm:left-47 " />{" "}
      </a>
    </div>
  );
}
