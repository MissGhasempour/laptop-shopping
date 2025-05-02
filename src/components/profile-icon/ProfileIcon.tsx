import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
export default function ProfileIcon() {
  return (
    <div>
      <Link href={"/profile"}>
        <CgProfile className="relative left-200 top-3 text-5xl text-blue-400  cursor-pointer sm:text-2xl sm:left-100 md:left-120 lg:left-210 lg:text-5xl max-sm:left-60 max-sm:text-xl" />
      </Link>
    </div>
  );
}
