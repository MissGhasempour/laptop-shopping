import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
export default function ProfileIcon() {
  return (
    <div>
      <Link href={"/test"}>
        <CgProfile className="relative left-245 top-3 text-5xl text-blue-400  cursor-pointer sm:text-2xl sm:left-60 md:left-50 lg:left-70 lg:text-5xl max-sm:left-20 max-sm:text-xl" />
      </Link>
    </div>
  );
}
