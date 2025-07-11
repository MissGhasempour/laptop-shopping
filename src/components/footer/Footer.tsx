import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import * as motion from "motion/react-client"

export default function Footer() {
  return (
    <footer className="overflow-hidden max-mobile:text-sm bg-stone-200 max-sm:w-190 text-stone-900 max-lg:w-255 max-xl:w-317 max-md:w-190 2xl:w-785 max-2xl:w-331 ">
      <div className="flex mx-20 max-mobile:mx-2 text-3xl text-blue-900  p-12  max-sm:mx-0">
        <motion.div whileHover={{rotateX:300 , rotateZ: 300, transition: { duration: 2 }}} className="m-4">
          <FaInstagramSquare />
        </motion.div>
        <motion.div whileHover={{rotateX:300 ,transition: { duration: 2 }}} className="m-4">
          <FaFacebookSquare />
        </motion.div>
        <motion.div whileHover={{rotateY:300 ,transition: { duration: 2 }}} className="m-4">
          <FaLinkedin />
        </motion.div>
        <motion.div whileHover={{rotateZ:300 ,transition: { duration: 2 }}} className="m-4">
          <AiFillTwitterSquare />
        </motion.div>
        <motion.div whileHover={{rotateX:300 , rotateZ: 300, transition: { duration: 2 }}} className="m-4">
          <FaSquareYoutube />
        </motion.div >
      </div>
      <div className="flex text-sm max-sm:text-sm">
        <div className="m-4">
          <h1 className="my-4">About Lenovo</h1>
          <p>
            Our Company News Investors Relations Legal Information Jobs at
            Lenovo Diversity & Inclusion
          </p>
        </div>
        <div className="m-4">
          <h1 className="my-4">SOLUTIONS</h1>
          <p>
            Business Partners Healthcare Solutions Higher Education Solutions
          </p>
        </div>
        <div className="m-4">
          <h1 className="my-4 max-mobile:hidden">PRODUCTS & SERVICES</h1>
          <p>
            Laptops & Ultrabooks Smarter AI for You Lenovo Gaming Products
            Tablets & Home Assistant Desktops Workstations Data Center Solutions
            Accessories & Software Services & Warranty Product Recalls
            Replacement Parts Warranty Upgrade
          </p>
        </div>
        <div className="m-4 max-sm:hidden max-mobile:hidden">
          <h1 className="my-4 max-mobile:hidden">RESOURCES</h1>
          <p>
            Lenovo EDU Community Legion Community Email Signup My Lenovo Rewards
            Product Registration Forums Blogs Where to buy Product Compliance
            Affiiliate Program Employee Purchase Program Glossary
          </p>
        </div>
        <div className="m-4 sm:mx-4 max-sm:hidden max-mobile:hidden">
          <h1 className="my-4">CUSTOMER SUPPORT</h1>
          <p>Contact Us Support Order Status Product FAQs Shopping FAQs</p>
        </div>
        <div className="m-4 sm:mx-0 max-sm:hidden max-mobile:hidden">
          <h1 className="my-4">PORTFOLIO</h1>
          <p>
            ThinkPad T Series ThinkPad X Series ThinkPad IdeaPad Yoga M Series
            Towers ThinkCentre IdeaCentre Tablets & Home Assistant ThinkStation
            Data Center Solutions
          </p>
        </div>
      </div>
      <p className="m-4 ml-50 max-mobile:ml-5 mobile:ml-5 sm:ml-3 max-sm:ml-0">
        Privacy | Cookie Consent Tool | Terms of Use |Site Map | External
        Submission Policy | Anti-Slavery and Human Trafficking Statement
      </p>
    </footer>
  );
}
