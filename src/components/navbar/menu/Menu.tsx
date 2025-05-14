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
          className="sm:text-sm lg:text-2xl max-sm:text-sm "
        >
<<<<<<< HEAD
          <li style={{borderBottom: '5px solid red', paddingBottom:'10px'}}>
=======
          <li style={{ borderBottom: "3px solid red", paddingBottom: "10px" }} className="max-sm:p-3 max-sm:mx-2">
>>>>>>> e757318 (some bugs fixed & responsive done.)
            <Link href={"#"}> Products</Link>
          </li>
          <li className="max-sm:p-3 ">
            <Link href={"#"}>Solutions </Link>{" "}
          </li>
          <li className="max-sm:p-3 ">
            <Link href={"#"}> Services</Link>{" "}
          </li>
          <li className="max-sm:p-3 ">
            <Link href={"#"}>About </Link>{" "}
          </li>
          <li className="max-sm:p-3 ">
            <Link href={"#"}> Gaming</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
