import Link from "next/link";
export default function SubMenu() {
  return (
    <div>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "lightgrey",
            padding: "10px",
            color: "black",
          }}
          className="max-mobile:text-sm sm:text-sm max-md:w-190 lg:text-2xl max-sm:text-sm 2xl:w-785  max-2xl:w-331 2xl:text-6xl md:w-331 md:text-xl  lg:w-252  max-sm:w-116 sm:w-167 max-xl:xl:w-full "
        >
          <li className="max-sm:p-1 max-sm:mx-2 border-b-4 border-red-600 pb-1">
            <Link href={"/products"}>Laptops </Link>{" "}
          </li>
          <li className="max-sm:p-1 ">
            <Link href={"/about"}> About</Link>{" "}
          </li>
          <li className="max-sm:p-1 max-sm:mx-2">
            <Link href={"/contact"}>Contact </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
