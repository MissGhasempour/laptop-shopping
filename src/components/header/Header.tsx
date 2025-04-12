import CartIcon from "../cart-icon/CartIcon";
import Logo from "../logo/Logo";
import Navbar from "../navbar/navbar";
import ProfileIcon from "../profile-icon/ProfileIcon";
import { MdOutlineNewLabel } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div className="flex">
        <Logo />
        <ProfileIcon />
        <MdOutlineNewLabel className="relative left-257 top-3 text-3xl text-red-500" />
        <CartIcon />
      </div>

      <Navbar />
    </header>
  );
}
