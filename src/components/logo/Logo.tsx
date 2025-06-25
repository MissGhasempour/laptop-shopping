import { MdOutlineLaptopChromebook } from "react-icons/md";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex">
      <Link href="/">
        <MdOutlineLaptopChromebook className="text-6xl text-zinc-100 mx-10 my-2 sm:text-3xl sm:m-4 md:text-5xl md:mt-3 lg:text-7xl lg:mx-10 max-sm:text-4xl max-sm:m-2 max-md:text-2xl" />
      </Link>
    </div>
  );
}
