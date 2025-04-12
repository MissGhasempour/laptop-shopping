import React from "react";
import BestSelling from "@/components/best-selling/BestSelling";
import Blog from "@/components/blog/Blog";
import Categories from "@/components/categories/Categories";
import Slider from "@/components/slider/slider";

export default async function Page() {
  return (
    <main>
      <Slider />
      <Categories />
      <BestSelling />
      <Blog />
    </main>
  );
}
