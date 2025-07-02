import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuTickets } from "react-icons/lu";
import { FaDesktop } from "react-icons/fa6";
import { LuMonitor } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";
import classes from "./classes.module.css";
import * as motion from "motion/react-client";

export default function Categories() {
  return (
    <div>
      <h1
        style={{ fontWeight: "bold" }}
        className="text-4xl max-mobile:text-2xl mobile:text-2xl m-6 mb-20 sm:text-xl lg:text-3xl max-sm:text-xl max-sm:mb-10 mt-40 2xl:text-7xl"
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
          className="text-center max-md:w-150 max-xl:w-230 2xl:w-550 2xl:text-5xl max-xl:text-xl max-2xl:w-200"
        >
          <li>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              id={classes.icons}
            >
              <LuTickets />
            </motion.div>
            Deals
          </li>
          <li>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              id={classes.icons}
            >
              <LuMonitor className="2xl:ml-7" />
            </motion.div>
            Laptops
          </li>
          <li>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              id={classes.icons}
            >
              <FaDesktop className="2xl:ml-10" />
            </motion.div>
            Desktops
          </li>
          <li>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              id={classes.icons}
            >
              <FaMobileAlt />
            </motion.div>
            Mobile
          </li>
          <li>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              id={classes.icons}
            >
              <MdOutlineLaptopChromebook className="2xl:ml-10" />
            </motion.div>
            Monitors
          </li>
        </ul>
      </div>
    </div>
  );
}
