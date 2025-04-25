import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
export default function CartIcon() {
  return (
    <div>
      <a href={"/cart-id"}>
        <FaCartArrowDown className="text-6xl  mx-10 my-2 absolute top-0 right-0 sm:text-3xl sm:left-135 md:left-170 md:text-4xl lg:text-6xl lg:left-280 max-sm:left-85 max-sm:text-2xl" />
      </a>
    </div>
  );
}
