import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
export default function CartIcon() {
  return (
    <div>
      <a href={"/cart-id/id"}>
        <FaCartArrowDown className="text-6xl max-md:left-133 max-lg:left-190 mx-5 my-2 relative top-0 right-0 max-lg:text-4xl max-sm:left-140 max-sm:text-2xl max-2xl:left-285 max-xl:left-218 2xl:left-670" />
      </a>
    </div>
  );
}
