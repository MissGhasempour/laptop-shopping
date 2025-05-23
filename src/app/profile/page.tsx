"use client";
import React from "react";
import ProfileTest from "@/components/test/profileTest";
import Image from "next/image";
import img from "@/images/Global-Brands-with-Exemplary-DEI-Practices.png";

export default function Page() {
  return (
    <div className="bg-zinc-100 text-stone-900 h-200 ">
      <ProfileTest />
      <div>
        <Image src={img} alt="brands" className="h-70 w-900" />
      </div>
    </div>
  );
}
