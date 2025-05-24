import Image from "next/image";
import img from "@/images/we-legion-7-3-hp-hero-4.jpg";
export default function Blog() {
  return (
    <div>
      <div className="max-md:w-187">
        <Image
          src={img}
          alt="laptop-pic"
          width={2500}
          height={1000}
          className="mt-50 max-sm:w-166 sm:mt-30"
        />
      </div>

      <div className="max-md:w-100">
        <h1 className="m-4">Lenovo Gaming</h1>
        <p className="m-4">
          Switch to the latest gaming tech at incredible deals.
        </p>
      </div>

      <a
        href="/"
        className="block m-4 mt-10 border-1 max-md:mb-20 rounded p-2 w-40 pl-7 max-sm:p-2 max-sm:w-30 hover:bg-stone-100 hover:text-zinc-900"
      >
        Explore Deals
      </a>
    </div>
  );
}
