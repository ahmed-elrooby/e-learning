"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { FaKey } from "react-icons/fa6";
import Asideimage from "../../../Images/profile.jpg"
import { ContextValue } from "@/Context/ContextData";
const Aside = () => {
   	
  const [prof, setProf] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
const router = useRouter()
const {  setToken } = useContext(ContextValue);
const profData = [
    {
      id: 0,
      content: "profile",
      path: "/Portofilio",
      icon:<FaUser />
    },
    {
      id: 1,
      content: "My Learning",
      path: "/Portofilio/MyCourses",
      icon:<GiTeacher />

    },
    {
      id: 2,
      content: "feedback",
      path: "/Portofilio/FeedbackPage",
      icon:<VscFeedback />

    },
    {
      id: 3,
      content: "change password",
      path: "/Portofilio/ChangePassword",
      icon:<FaKey />

    },
  ];
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  // logout
  const logOut = () => {
   setToken(null)
 
   document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    router.push("/SignIn");
    setProf(false);
  };
return<>
<aside className="bg-[#F9F9F9]  px-[10px] lg:px-[10px] h-screen w-fit md:w-[350px] ">
            <div className="mt-[50px] pt-[50px] flex flex-col gap-[20px] items-start">
              <Image
                src={Asideimage}
                className="border-[3px] block mx-auto border-[--main-color] w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full"
                alt="student picture"
              />

              <ul className="flex  w-full  flex-col gap-[20px] items-start">
                {profData.map((dat, index) => {
                  return (
                    <li key={index} className="w-full ">
                      <Link
                        className={` flex items-center justify-center md:justify-start gap-2 text-[18px] transition-all text-[--secondary-color] hover:text-white hover:bg-[--main-color] block   capitalize  font-bold border-2 border-[--main-color] py-[8px] lg:pl-3 pl-[4px] px-2 rounded-lg  ${
                          activeIndex === index?'bg-[--main-color] text-white':""
                        }   `}
                        onClick={() => handleClick(index)}
                        href={dat.path}
                      >
                        <h1 className="block text-[20px]  ">{dat.icon}</h1>
                       <h1 className="hidden md:flex"> {dat.content}</h1>

                      </Link>
                    </li>
                  );
                })}

                <li className="w-full">
                  <button
                    onClick={() => logOut(false)}
                    className="flex text-[18px] font-bold transition-all gap-1  hover:bg-[--main-color] hover:text-white text-[--secondary-color] items-center  border-2 border-[--main-color] rounded-lg w-full py-[6px] px-[10px]"
                  >
                          <h1 className="block  text-[20px] "><GoSignOut /></h1>
                       <h1 className="hidden md:flex"> Log out</h1>

                     
                  </button>
                </li>
              </ul>
            </div>
          </aside>

</>
}

export default Aside





 
 


