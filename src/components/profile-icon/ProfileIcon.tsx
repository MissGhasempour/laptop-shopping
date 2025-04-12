import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
export default function ProfileIcon() {
  return (
    <div>
      <Link href={"/pages/profile"}>
        <CgProfile className="relative left-245 top-2 text-5xl text-red-700 cursor-pointer" />
      </Link>
    </div>
  );
}
