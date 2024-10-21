"use client";
import Link from "next/link";
import React from "react";
import { FaIdCard } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import Lottie from "lottie-react";
import semiAbout from "../../Images/SemiAbout.json";
import Tilt from "react-parallax-tilt";

const SemiAbout = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] py-[50px]">
        <div className="w-[95%] m-auto">
          <div className="flex flex-col items-center gap-4 my-4 md:flex-row">
            <Lottie animationData={semiAbout} className="w-full" />
            <h1 className="text-center mb-[30px] mt-[15px] font-bold capitalize text-[--secondary-color] text-[30px]">
              Exclusive Benefits for Your Personal and Professional Growth{" "}
            </h1>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-[30px]   ">
            <span className="w-[20px] h-[20px] md:h-[60px] md:w-[5px] rounded-full bg-[--main-color]"></span>
            <div className="flex flex-col items-start gap-[15px]">
              <h1 className="text-[35px] capitalize font-bold text-[--main-color]">
                Welcome to Edumeter
              </h1>
              <h4 className="text-[20px] capitalize leading-[1.8]">
                An educational platform specialized in developing skills with
                the best lecturers
              </h4>
              <Link
                className="rounded-lg text-white hover:bg-[#f97316a6]  capitalize text-[20px] px-[15px] py-[8px]  transition-all bg-[--main-color] w-max font-bold  "
                href="/SignUp"
              >
                join us
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-[20px] justify-around md:grid-cols-2">
              <Tilt>
              <div className="flex transition-all hover:shadow-lg h-[200px]  border border-[--main-color] relative py-3 pl-3 flex-col  rounded-lg items-start  gap-[30px] bg-[#FFFFFF]">
              <FaIdCard className="text-[--main-color] text-[40px]" />
                  <h4 className="text-[30px] font-semibold text-[--secondary-color] capitalize">
                    Free membership registration
                  </h4>
                  <h1 className="text-[#D5D5D5] text-[45px] font-bold absolute top-[10px] right-3">
                    1
                  </h1>
                </div>
              </Tilt>
              <Tilt>
              <div className="flex transition-all hover:shadow-lg h-[200px]  border border-[--main-color] relative py-3 pl-3 flex-col  rounded-lg items-start  gap-[30px] bg-[#FFFFFF]">
              <FaGraduationCap className="text-[--main-color] text-[50px]" />
                  <h4 className="text-[30px] font-semibold text-[--secondary-color] capitalize">
                    Free training
                  </h4>
                  <h1 className="text-[#D5D5D5] text-[45px] font-bold absolute top-[10px] right-3">
                    2
                  </h1>
                </div>
              </Tilt>
              <Tilt>
                <div className="flex transition-all hover:shadow-lg h-[200px]  border border-[--main-color] relative py-3 pl-3 flex-col  rounded-lg items-start  gap-[30px] bg-[#FFFFFF]">
                  <FaBookReader className="text-[--main-color] text-[50px]" />
                  <h4 className="text-[30px] font-semibold text-[--secondary-color] capitalize">
                    The latest educational curricula
                  </h4>
                  <h1 className="text-[#D5D5D5] text-[45px] font-bold absolute top-[10px] right-3">
                    3
                  </h1>
                </div>
              </Tilt>
              <Tilt>
                <div className="flex transition-all hover:shadow-lg  border border-[--main-color] relative py-3 pl-3 flex-col  rounded-lg items-start  gap-[30px] bg-[#FFFFFF]">
                  <FaLaptop className="text-[--main-color] text-[50px]" />
                  <h4 className="text-[30px] font-semibold text-[--secondary-color] capitalize">
                    {" "}
                    Flexibility in the work environment
                  </h4>
                  <h1 className="text-[#D5D5D5] text-[45px] font-bold absolute top-[10px] right-3">
                    4
                  </h1>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SemiAbout;
