"use client";

import { useCallback, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Client() {
  const [display, setDisplay] = useState("true");
  const [brandName, setBrandName] = useState("");
  const [displayedItem, setDisplayedItem] = useState("true");
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set("display", display);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <button
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + "?" + createQueryString("display", "false"));
        }}
      >
        display
      </button>
    </>
  );
}
