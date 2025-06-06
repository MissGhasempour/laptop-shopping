import CartIcon from "../cart-icon/CartIcon";
import Logo from "../logo/Logo";
import SubMenu from "../navbar/sub-menu/SubMenu";
import ProfileIcon from "../profile-icon/ProfileIcon";
import { TbFilterSearch } from "react-icons/tb";

export default async function Header() {
  return (
    <header>
      <div className="flex">
        <Logo />
        <div className="sm:text-sm text-rose-400 ">
          <a href="/filter-products">
            <TbFilterSearch className="text-4xl relative top-2 left-2 sm:text-xl sm:ml-7 lg:text-4xl max-sm:text-xl max-sm:left-0 max-sm:top-3 max-md:top-5 max-lg:top-5 " />
          </a>
          <p className="text-2xl max-sm:text-xl max-sm:mt-3 max-lg:text-xl">
            filter
          </p>
        </div>

        <ProfileIcon />

        <CartIcon />
      </div>

      <SubMenu />
    </header>
  );
}
