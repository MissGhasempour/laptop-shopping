import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
export default function ProfileIcon() {
  return (
    <div>
      <Link href={"/profile"} className="relative max-xl:right-60 2xl:left-520">
        <CgProfile className="relative max-md:left-190 max-lg:left-250 left-200 top-3 text-5xl text-blue-400  cursor-pointer sm:text-2xl  lg:text-5xl max-sm:left-197 max-sm:text-xl  max-2xl:left-220" />
      </Link>
    </div>
  );
}
