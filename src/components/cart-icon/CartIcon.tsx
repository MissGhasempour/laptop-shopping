import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
export default function CartIcon() {
  return (
    <div>
      <a href={"/cart-id/id"}>
        <FaCartArrowDown className="text-6xl mobile:left-80 max-mobile:left-40 max-mobile:text-xl ipad:left-120 tablet:left-180 laptop:left-250 max-md:left-133 max-lg:left-190 mx-5 my-2 relative top-0 right-0 max-lg:text-4xl max-sm:left-60 max-sm:text-2xl max-2xl:left-220 max-xl:left-175 2xl:left-670 sm:left-50 md:left-120 lg:text-5xl lg:left-117" />
      </a>
    </div>
  );
}
