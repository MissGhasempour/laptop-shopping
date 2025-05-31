import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
export default function ProfileIcon() {
  return (
    <div>
      <Link href={"/profile"} className="relative max-xl:right-60 2xl:left-520">
        <CgProfile className="relative mobile:left-80 max-mobile:left-40 ipad:left-120  tablet:left-170 laptop:left-250 max-md:left-190 max-lg:left-250  top-3 text-5xl text-blue-400  cursor-pointer sm:text-2xl  lg:text-5xl md:text-4xl max-sm:left-120 max-sm:text-xl  max-2xl:left-215  max-xl:left-230 sm:left-112 md:left-180 xl:left-110" />
      </Link>
    </div>
  );
}
