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
            color:"black" 
          }}
          className="sm:text-sm sm:ml-2 lg:text-2xl max-sm:text-sm max-sm:w-102"
        >
          <li className="max-sm:p-1 max-sm:mx-2">
            <Link href={"/products"}>Laptops </Link>{" "}
          </li>
          <li className="max-sm:p-1 ">
            <Link href={"#"}> Desktops</Link>{" "}
          </li>
          <li className="max-sm:p-1 max-sm:mx-2">
            <Link href={"#"}>Workstations </Link>{" "}
          </li>
          <li className="max-sm:p-1 ">
            <Link href={"#"}> Accessories</Link>{" "}
          </li>
          <li className="max-sm:p-1">
            <Link href={"#"}> Software</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
