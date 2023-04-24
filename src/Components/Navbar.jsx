import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Logo } from "../Images";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
    const html = document.querySelector("html");
    html.classList.contains("dark")
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  }

  const item = {
    exit: {
      opacity: 0,
      width: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  const generateWsp = document.getElementById("generateWsp");

  return (
    <nav className="w-full sticky z-20">
      <div className="w-full flex justify-between items-center px-4 lg:px-10 py-4 shadow-md">
        <div className="flex items-center gap-3">
          {isOpen ? (
            <RxCross2
              className="dark:text-primary-text-dark text-primary-text-light text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <RxHamburgerMenu
              className="dark:text-primary-text-dark text-primary-text-light text-2xl lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <a
            to={"/"}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <img src={Logo} alt="Logo search movies" className="w-8" />
            <h1 className="dark:text-primary-text-dark text-primary-text-light text-sm hidden sm:block lg:text-lg font-semibold">
              WsGen
            </h1>
          </a>
        </div>
        <div className="text-primary-text-light dark:text-primary-text-dark text-sm flex items-center md:gap-10">
          <a
            onClick={() => {
              setIsOpen(false);
              generateWsp.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden lg:block dark:hover:text-white hover:text-gray-400 cursor-pointer"
          >
            Generar Link
          </a>
          <a
            href="https://github.com/FYobstra"
            onClick={() => setIsOpen(false)}
            target="_blank"
            className="hidden lg:block dark:hover:text-white hover:text-gray-400 cursor-pointer"
          >
            Github
          </a>
          {darkTheme ? (
            <FiSun
              className="w-fit text-primary-text-dark text-lg cursor-pointer"
              onClick={() => changeTheme()}
            />
          ) : (
            <IoMoonOutline
              className="w-fit text-primary-text-light text-lg cursor-pointer"
              onClick={() => changeTheme()}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={item}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
            className="w-full top-0 z-10 bg-white-bg dark:bg-black-bg h-[100vh] text-xl overflow-hidden text-primary-text-light dark:text-primary-text-dark flex flex-col gap-10 text-center pt-12 px-6"
          >
            <a
              onClick={() => {
                setIsOpen(false);
                generateWsp.scrollIntoView({ behavior: "smooth" }); 
              }}
            >
              Generar Link
            </a>
            <a
              href="https://github.com/FYobstra"
              onClick={() => setIsOpen(false)}
              target="_blank"
            >
              Github
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
