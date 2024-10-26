"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { links2 } from "./links2";
import { GoSignOut } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import imageProfile from "../../Images/profile.jpg"
import { ContextValue } from "@/Context/ContextData";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ isCategory, setIsCategory] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];


  const { token, setToken } = useContext(ContextValue);
  
  
  const logOut = () => {
    setToken(null)
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    router.push("/SignIn");
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mx-auto fixed top-0 w-full z-[111] bg-[--secondary-color]">
      <div className="shadow-lg">
        <nav className="flex items-center py-[10px] justify-between w-[90%] m-auto">
          <Link href="/">
            <h1>Logo</h1>
          </Link>
          <div
            id="menu"
            onClick={() => setOpen(!open)}
            className="relative flex flex-col gap-1 cursor-pointer group lg:hidden"
          >
            <span className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? "rotate-45 translate-y-[10px]" : ""}`}></span>
            <span className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
            <span className={`w-[20px] group-hover:w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
            <span className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[15px]" : ""}`}></span>
          </div>

          <ul className={`lg:flex lg:flex-row lg:gap-[20px] items-center bg-[--secondary-color] lg:bg-transparent shadow-lg lg:shadow-none rounded-md ${open ? 'flex flex-col gap-3 mt-1 absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-[--secondary-color] after:absolute after:border-t-2 after:border-l-2 after:border-[--main-color] after:top-[-16px] after:right-[10px] after:rotate-[45deg] top-[76px] right-[30px] w-[60%] border-2 border-[--main-color] p-4' : "hidden"} lg:mt-0`}>
            {links2.map((item, index) => (
              <li key={index} className="relative w-full text-white">
                <Link
                  className={`relative flex gap-2 items-center text-[20px] hover:after:w-full hover:text-[--main-color] font-bold w-full py-2 capitalize after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:rounded-lg ${open ? "w-[50%] transition-all hover:text-[--main-color] items-start" : "w-full"} after:bg-[--main-color] after:transition-all after:duration-300 ${activeIndex === index ? "after:w-full text-[--main-color]" : ""}`}
                  href={item.path}
                  onClick={() => handleClick(index)}
                >
                  {item.content}
                </Link>
              </li>
            ))}

            <li className="relative w-full text-white">
              <span
                className="relative cursor-pointer flex gap-2 items-center text-[20px] font-bold w-full py-2 capitalize hover:text-[--main-color]"
                onClick={() => setIsCategory(!isCategory)}
              >
                Categories
              </span>
              {isCategory && (
                <ul className="absolute bg-[--secondary-color] border border-[--main-color] shadow-lg mt-0 right-[166px] md:right-[67px] w-[150px] z-20">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-2 font-bold cursor-pointer hover:bg-[--main-color] hover:text-[--secondary-color]"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {token ? (
              <li className="relative w-full text-white">
                <span
                  className="relative cursor-pointer flex gap-2 items-center text-[20px] font-bold w-full py-2 capitalize hover:text-[--main-color]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Image
                    src={imageProfile}
                    className="rounded-full w-[40px] h-[40px] transition-all hover:scale-110"
                    alt="Profile"
                    width={50}
                    height={50}
                  />
                </span>
                {isDropdownOpen && (
                  <ul className="absolute bg-[--secondary-color] border border-[--main-color] shadow-lg mt-0 rounded-md right-[160px] lg:right-[50px] w-[150px] z-20">
                    <li className="px-4 py-2 font-bold cursor-pointer hover:bg-[--main-color] hover:rounded-t-md hover:text-[--secondary-color]">
                      <Link
                        onClick={() => setIsDropdownOpen(false)}
                        href="/Portofilio"
                        className="flex items-center w-full text-[22px] gap-2"
                      >
                        <FaRegUser /> Profile
                      </Link>
                    </li>
                    <li
                      onClick={logOut}
                      className="px-4 flex items-center text-[22px] gap-2 py-2 w-full font-bold cursor-pointer hover:bg-[--main-color] hover:rounded-b-md hover:text-[--secondary-color]"
                    >
                      <GoSignOut /> Log out
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li className="relative w-full">
                <ul className="flex items-center flex-col lg:flex-row gap-[20px]">
                  <li className="relative transition-all hover:after:w-full after:content-[''] after:absolute after:w-0 after:transition-all after:h-[4px] after:left-0 after:bg-[--main-color] after:rounded-full after:bottom-0 w-full text-white">
                    <Link
                      className="text-[20px] block w-full md:w-[80px] hover:text-[--main-color] transition-all font-bold py-2 capitalize"
                      href="/SignUp"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li className="relative transition-all hover:after:w-full after:content-[''] after:absolute after:w-0 after:transition-all after:h-[4px] after:left-0 after:bg-[--main-color] after:rounded-full after:bottom-0 w-full text-white">
                    <Link
                      className="text-[20px] block w-full md:w-[80px] hover:text-[--main-color] transition-all font-bold py-2 capitalize"
                      href="/SignIn"
                    >
                      Sign in
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
