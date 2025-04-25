import Image from "next/image";
import img from "@/images/we-legion-7-3-hp-hero-4.jpg";
export default function Blog() {
  return (
    <div>
      <Image
        src={img}
        alt="laptop-pic"
        className="mt-50 sm:w-166 sm:mt-30 md:w-192 lg:w-317"
      />
      <h1 className="m-4">Lenovo Gaming</h1>
      <p className="m-4">
        Switch to the latest gaming tech at incredible deals.
      </p>
      <a
        href="/"
        className="block m-4 mt-10 border-1 rounded p-2 w-40 pl-7 max-sm:p-2 max-sm:w-30 hover:bg-stone-100 hover:text-zinc-900"
      >
        Explore Deals
      </a>
    </div>
  );
}
