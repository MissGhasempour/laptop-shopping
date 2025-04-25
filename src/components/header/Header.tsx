import CartIcon from "../cart-icon/CartIcon";
import Logo from "../logo/Logo";
import Navbar from "../navbar/navbar";
import ProfileIcon from "../profile-icon/ProfileIcon";
import { MdOutlineNewLabel } from "react-icons/md";
import SearchBar from "../search-bar/searchBar";
import { TbFilterSearch } from "react-icons/tb";

export default async function Header({
  res,
}: {
  res: [
    { culture: string; aliases: string },
    { culture: string; aliases: string; name: string },
    { culture: string; aliases: string; books: string[] }
  ];
}) {
  return (
    <header>
      <div className="flex">
        <Logo />
        <SearchBar res={res} />
        <div className="sm:text-sm">
          <a href="/filter-products">
            <TbFilterSearch className=" text-3xl relative top-5 left-5 sm:text-xl sm:ml-7 lg:text-4xl max-sm:text-xl max-sm:left-0 max-sm:top-3" />
          </a>
        </div>
        {/* <span>filter products</span> */}
        <ProfileIcon />
        <MdOutlineNewLabel className="relative left-257 top-3 text-3xl text-red-500 sm:left-65 sm:text-xl md:left-55 md:text-2xl lg:left-75 lg:text-4xl max-sm:left-27 max-sm:text-xl" />
        <CartIcon />
      </div>

      <Navbar />
    </header>
  );
}
