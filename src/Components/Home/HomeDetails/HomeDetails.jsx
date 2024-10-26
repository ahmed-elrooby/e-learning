"use client"
import { ContextValue } from '@/Context/ContextData';
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoMdPlay } from "react-icons/io";

const HomeDetails = () => {
  const token = useContext(ContextValue)
  return <>
    <div>
      <div className="flex flex-col items-start gap-4 ">
        <span className="w-[20px] h-[20px] text-[--main-color] border-2 border-[--main-color]  animate-spin"></span>
        <h1 className="capitalize md:text-[45px] text-[25px] text-[--main-color] font-bold ">Start learning with the EduMeter platform
        </h1>
        {token ? "" : <Link className="rounded-lg text-white hover:bg-[#f97316a6]  capitalize text-[20px] px-[15px] py-[8px]  transition-all bg-[--main-color] w-max font-bold  " href="/SignUp">join us</Link>
        }
        <h5 className="capitalize text-[25px] font-bold">Choose your course

        </h5>
        <div className="flex items-start relative after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:border-2 after:border-[--main-color] after:bottom-[-15px] after:right-0 after:animate-spin lg:items-center md:gap-[20px] gap-[40px] lg:flex-row flex-col ">
          <div>
            <div className="flex items-center justify-center gap-[15px]">
              <div className="w-[50px] flex justify-center text-center animate-pulse items-center bg-[--main-color] cursor-pointer h-[50px] rounded-full ">
                <IoMdPlay color='white ' size={32} />

              </div>
              <h2 className="capitalize text-[19px] font-semibold">Introductory video of the site
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div>

  </>
}

export default HomeDetails