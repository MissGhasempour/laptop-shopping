import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
export default function CartIcon() {
  return (
    <div>
      <a href={"/components/navbar/cartId"}>
        <FaCartArrowDown className="text-6xl  mx-10 my-2 absolute top-0 right-0" />
      </a>
    </div>
  );
}
