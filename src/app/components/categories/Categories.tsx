import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuTickets } from "react-icons/lu";
import { FaDesktop } from "react-icons/fa6";
import { LuMonitor } from "react-icons/lu";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import classes from "./classes.module.css";
export default function Categories() {
  return (
    <div>
        <h1 style={{fontWeight:'bold', fontSize:'30px'}} className="m-6">Explore Products at Lenovo</h1>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <li>
            <div className={classes.icons} >
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
