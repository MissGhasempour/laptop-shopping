import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
export default function CartIcon() {
  return (
    <div>
      <a href={"/cart-id/id"}>
        <FaCartArrowDown className="text-6xl  mx-10 my-2 absolute top-0 right-0 max-lg:text-4xl max-sm:left-65 max-sm:text-2xl" />
      </a>
    </div>
  );
}
