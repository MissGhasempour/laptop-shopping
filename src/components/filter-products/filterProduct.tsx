"use client";
import React, { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function FilterProduct() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filterProducts = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.currentTarget.value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="mb-5">Filter by specs</h1>
          <h2 className="text-red-600 my-2">Brand</h2>
          <input
            type="checkbox"
            onClick={(e) =>
              router.push(pathname + "?" + filterProducts("brandname", e))
            }
            value={"Braavosi"}
          />{" "}
          Braavosi <br />
          <input
            type="checkbox"
            onClick={(e) =>
              router.push(pathname + "?" + filterProducts("brandname", e))
            }
            value={"Walder"}
          />{" "}
          Walder
          <br />
          <input
            type="checkbox"
            onClick={(e) =>
              router.push(pathname + "?" + filterProducts("brandname", e))
            }
            value={"Lamprey"}
          />{" "}
          Lamprey <br />
          <input
            type="checkbox"
            onClick={(e) =>
              router.push(pathname + "?" + filterProducts("brandname", e))
            }
            value={"Merling"}
          />{" "}
          Merling <br />
          <input
            type="checkbox"
            onClick={(e) =>
              router.push(pathname + "?" + filterProducts("brandname", e))
            }
            value={"Crackbones"}
          />{" "}
          Crackbones <br />
        </div>
      </div>
    </div>
  );
}
