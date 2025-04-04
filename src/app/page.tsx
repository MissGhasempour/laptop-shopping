import BestSelling from "./components/bestSelling/BestSelling";
import Blog from "./components/blog/Blog";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CartIcon from "./components/navbar/[cartId]/CartIcon";
import Logo from "./components/navbar/logo/Logo";
import Menu from "./components/navbar/menu/Menu";
import { MdOutlineNewLabel } from "react-icons/md";
//import SearchBar from "./components/navbar/searchBar/searchBar";
import SubMenu from "./components/navbar/sub-menu/SubMenu";
export default async function Page() {
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  const count = 0;
  return (
    <div>
      <div className="flex">
        <Logo />
        <MdOutlineNewLabel className="relative left-267 top-3 text-3xl text-red-500"/>
        <CartIcon />
      </div>
      <Menu />
      <SubMenu />
      <Header />
      <Categories />
      <BestSelling />
      <Blog />
      <Footer />
    </div>
  );
}
