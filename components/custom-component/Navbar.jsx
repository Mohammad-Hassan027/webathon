import { useEffect, useState } from "react";
import { DropdownMenuDemo } from "../custom-component/dropmenu";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutPage, seIsAboutPage] = useState(false);
  const [isFaqPage, seIsFaqPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      seIsAboutPage(true);
    }
    if (location.pathname === "/faq") {
      seIsFaqPage(true);
    }
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-[113px] max-w-full px-10 rounded-b-4xl bg-white shadow-2xl flex items-center justify-between"
    >
      <div className="bg-white p-1 rounded-4xl">
        <div className="bg-primary rounded-[50%] py-2 px-3 shadow-2xl">
          <p className="text-primary font-black text-4xl">H</p>
        </div>
      </div>
      <div className="hidden w-[600px] md:flex items-center justify-between text-2xl">
        <a
          href="/"
          className="text-gray-700 hover:text-yellow-400 hover:text-shadow-sm hover:text-shadow-amber-400 hover:scale-110 transition-transform duration-300 ease-in-out relative group p-2"
        >
          Home
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </a>
        <a
          href="/about"
          className="text-gray-700 hover:text-yellow-400 hover:text-shadow-sm hover:text-shadow-amber-400 hover:scale-110 transition-transform duration-300 ease-in-out relative group p-2"
        >
          About
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </a>
        {!isFaqPage ? (
          <a
            href={isAboutPage ? "#contactUs" : "#team"}
            className="text-gray-700 hover:text-yellow-400 hover:text-shadow-sm hover:text-shadow-amber-400 hover:scale-110 transition-transform duration-300 ease-in-out relative group p-2"
          >
            {isAboutPage ? "Contact Us" : "Our Team"}
          </a>
        ) : null}
        <a
          href="/faq"
          className="text-gray-700 hover:text-yellow-400 hover:text-shadow-sm hover:text-shadow-amber-400 hover:scale-110 transition-transform duration-300 ease-in-out relative group p-2"
        >
          Faq
        </a>
      </div>
      <div className="sm:pr-5">
        <DropdownMenuDemo setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </motion.div>
  );
};
export default Navbar;
