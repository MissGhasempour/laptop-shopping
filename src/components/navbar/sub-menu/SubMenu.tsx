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
          className="sm:text-sm max-md:w-190 lg:text-2xl max-sm:text-sm 2xl:w-785 max-xl:w-319 2xl:text-6xl"
        >
          <li className="max-sm:p-1 max-sm:mx-2 border-b-4 border-red-600 pb-1">
            <Link href={"/products"}>Laptops </Link>{" "}
          </li>
          <li className="max-sm:p-1 ">
            <Link href={"/desktop"}> Desktops</Link>{" "}
          </li>
          <li className="max-sm:p-1 max-sm:mx-2">
            <Link href={"/workstation"}>Workstations </Link>{" "}
          </li>
          <li className="max-sm:p-1 ">
            <Link href={"/accessories"}> Accessories</Link>{" "}
          </li>
          <li className="max-sm:p-1">
            <Link href={"/software"}> Software</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
