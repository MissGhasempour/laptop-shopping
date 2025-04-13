import CartIcon from "../cart-icon/CartIcon";
import Logo from "../logo/Logo";
import Navbar from "../navbar/navbar";
import ProfileIcon from "../profile-icon/ProfileIcon";
import { MdOutlineNewLabel } from "react-icons/md";
import SearchBar from "../search-bar/searchBar";
import getProducts from "@/lib/api/getProducts";
import { TbFilterSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

export default async function Header({res} : {res: [
  { culture: string; aliases: string },
  { culture: string; aliases: string; name: string },
  { culture: string; aliases: string; books: string[] }
];}) {

  return (
    <header>
      <div className="flex">
        <Logo />
        <SearchBar res={res} />
        <div>
        filter products
        <a href="/filter-products">
          <TbFilterSearch className=" text-3xl" />
        </a>
        </div>
        
        <ProfileIcon />
        <MdOutlineNewLabel className="relative left-257 top-3 text-3xl text-red-500" />
        <CartIcon />
      </div>

      <Navbar />
    </header>
  );
}
