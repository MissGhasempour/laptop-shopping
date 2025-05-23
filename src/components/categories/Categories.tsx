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
        className="m-6 mb-20 sm:text-xl lg:text-3xl max-sm:text-xl max-sm:mb-10 mt-40 max-sm:"
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
          className="text-center max-md:w-150"
        >
          <li>
            <div className={classes.icons}>
              <LuTickets />
            </div>
            Deals
          </li>
          <li>
            <div className={classes.icons}>
              <LuMonitor />
            </div>
            Laptops
          </li>
          <li>
            <div className={classes.icons}>
              <FaDesktop />
            </div>
            Desktops
          </li>
          <li>
            <div className={classes.icons}>
              <PiDesktopTowerDuotone />
            </div>
            Workstations
          </li>
          <li>
            <div className={classes.icons}>
              <MdOutlineLaptopChromebook />
            </div>
            Monitors
          </li>
        </ul>
      </div>
    </div>
  );
}
