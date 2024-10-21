"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Github } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-[--secondary-color]  border-t-2 border-[--main-color]">
        <footer className="w-[90%]  relative z-[222]  py-2   m-auto ">
          <div className="flex flex-wrap justify-around items-center text-center md:items-end mb-4  md:mb-[20px] gap-2 md:gap-[40px]">
            <section>
              <h1 className="md:text-[22px] text-[19px] text-white capitalize">
                Copyright © 2024{" "}
                <span className="font-bold text-[--main-color]">
                  Ahmed el rooby.
                </span>{" "}
                All Rights Reserved.
              </h1>
            </section>
            <section className="flex items-center h-[93px]  gap-1">
              <div className="flex md:w-[30px] w-[20px] flex-col items-center gap-4 group">
                <div className='bg-[#3b5999] px-[10px] py-[7px] text-white  font-bold capitalize opacity-0 pointer-events-none transition-all  group-hover:opacity-[1] rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#3b5999] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                  facebook
                </div>
                <Link
                  className="w-[40px] h-[40px] rounded-full border bg-white flex items-center justify-center"
                  href="https://www.facebook.com/profile.php?id=100012194289790&mibextid=ZbWKwL"
                >
                  <FaFacebook
                    className=" cursor-pointer opacity-[0.8] transition-all text-[#4267B2] hover:opacity-[1]"
                    size={32}
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className='bg-[#e1306c] text-white px-[10px] py-[7px] font-bold capitalize opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#e1306c] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                  instagram
                </div>
                <Link
                  className="w-[40px] h-[40px]  rounded-full border text-white bg-[#c13584] flex items-center justify-center"
                  href="https://www.instagram.com/"
                >
                  <FaInstagram
                    className="cursor-pointer  transition-colors duration-300  opacity-[0.8] hover:opacity-[1]"
                    size={32}
                  />
                </Link>
              </div>

              <div className="flex md:w-[30px] w-[20px] flex-col items-center gap-4 group">
                <div className='bg-[#1DA1F2] text-white px-[10px] py-[7px] font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-[1] rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#1DA1F2] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                  Linkedin
                </div>
                <Link
                  href="www.linkedin.com/in/ahmed-eid-8b66682a6"
                  className="w-[40px] h-[40px] rounded-full border bg-white flex items-center justify-center"
                >
                  <FaLinkedin
                    className="cursor-pointer opacity-[0.8] text-[#1DA1F2]    transition-all hover:opacity-[1]"
                    size={32}
                  />
                </Link>
              </div>

              <div className="flex flex-col items-center gap-4 group">
                <div className='bg-[#25D366] text-white px-[10px] py-[7px] font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-[1] rounded-xl relative after:absolute after:content-[""] after:w-[12px] after:h-[12px] after:bg-[#25D366] after:bottom-[-6px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                  whatsApp
                </div>
                <Link
                  href="https://wa.me/201554247018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[40px]  h-[40px] rounded-full border bg-white flex items-center justify-center"
                >
                  <IoLogoWhatsapp
                    className="cursor-pointer opacity-[0.8] text-[#25D366] transition-all hover:opacity-[1]"
                    size={32}
                  />
                </Link>
              </div>

              <div className="flex md:w-[30px] w-[20px] flex-col items-center gap-4 group">
                <div className='bg-[#333] text-[--main-color] px-[10px] py-[7px] font-bold  capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-[1] rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#333] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                  Github
                </div>
                <Link
                  href="https://github.com/ahmed-elrooby "
                  className="w-[40px] h-[40px] rounded-full border hover:bg-[#333]  flex items-center transition-all justify-center"
                >
                  <Github
                    className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color]   hover:opacity-[1]"
                    size={32}
                  />
                </Link>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
