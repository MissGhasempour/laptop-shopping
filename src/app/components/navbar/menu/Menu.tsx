import Link from "next/link";
export default function Menu() {
  return (
    <div>
      <div className="container">
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom:'5px'
          }}
        >
          <li style={{borderBottom: '5px solid red', paddingBottom:'10px'}}>
            <Link href={"#"}> Products</Link>
          </li>
          <li>
            <Link href={"#"}>Solutions </Link>{" "}
          </li>
          <li>
            <Link href={"#"}> Services</Link>{" "}
          </li>
          <li>
            <Link href={"#"}>About </Link>{" "}
          </li>
          <li>
            <Link href={"#"}> Gaming</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
