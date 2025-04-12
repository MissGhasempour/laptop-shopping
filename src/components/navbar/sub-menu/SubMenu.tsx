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
          }}
        >
          <li>
            <Link href={"/products"}>Laptops </Link>{" "}
          </li>
          <li>
            <Link href={"#"}> Desktops</Link>{" "}
          </li>
          <li>
            <Link href={"#"}>Workstations </Link>{" "}
          </li>
          <li>
            <Link href={"#"}> Accessories</Link>{" "}
          </li>
          <li>
            <Link href={"#"}> Software</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
