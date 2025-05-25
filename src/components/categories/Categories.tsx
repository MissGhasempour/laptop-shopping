import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuTickets } from "react-icons/lu";
import { FaDesktop } from "react-icons/fa6";
import { LuMonitor } from "react-icons/lu";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import classes from "./classes.module.css";
export default function Categories() {
  return (
    <div>
      <h1
        style={{ fontWeight: "bold" }}
        className="m-6 mb-20 sm:text-xl lg:text-3xl max-sm:text-xl max-sm:mb-10 mt-40 2xl:text-7xl"
      >
        Explore Products at Lenovo
      </h1>

      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
          className="text-center max-md:w-150 max-xl:w-230 2xl:w-550 2xl:text-5xl max-xl:text-xl"
        >
          <li>
            <div className="" id={classes.icons}>
              <LuTickets />
            </div>
            Deals
          </li>
          <li>
            <div id={classes.icons}>
              <LuMonitor className="2xl:ml-7"/>
            </div>
            Laptops
          </li>
          <li>
            <div id={classes.icons}>
              <FaDesktop className="2xl:ml-10"/>
            </div>
            Desktops
          </li>
          <li>
            <div id={classes.icons}>
              <PiDesktopTowerDuotone className="2xl:ml-20 max-xl:ml-4" />
            </div>
            Workstations
          </li>
          <li>
            <div id={classes.icons}>
              <MdOutlineLaptopChromebook className="2xl:ml-10"/>
            </div>
            Monitors
          </li>
        </ul>
      </div>
    </div>
  );
}
