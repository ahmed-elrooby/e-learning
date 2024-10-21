"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { RiPresentationFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { FaKey } from "react-icons/fa6";

const Aside = () => {
   	
  const [prof, setProf] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
const router = useRouter()
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
      icon:<RiPresentationFill />

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
    localStorage.removeItem("tkn");
    router.push("/SignIn");
    setProf(false);
  };
return<>
        <aside className="bg-[#F9F9F9]  px-[10px] lg:px-[10px] h-screen w-fit ">
            <div className="mt-[50px] pt-[50px] flex flex-col gap-[20px] items-start">
              <Image
                src={require("../../../Images/profile.jpg")}
                className="border-[3px] block mx-auto border-[--main-color] w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full"
                alt="student picture"
              />

              <ul className="flex flex-col gap-[20px] items-start">
                {profData.map((dat, index) => {
                  return (
                    <li key={index} className="w-full ">
                      <Link
                        className={` flex items-center justify-center md:justify-start gap-1 lg:text-[18px] text-[14px] transition-all text-[--secondary-color] hover:text-white hover:bg-[--main-color] block   capitalize  font-bold border-2 border-[--main-color] py-[8px] lg:pl-3 pl-[4px] px-2 rounded-lg  ${
                          activeIndex === index?'bg-[--main-color] text-white':""
                        }   `}
                        onClick={() => handleClick(index)}
                        href={dat.path}
                      >
                        <h1 className="block text-[18px] ">{dat.icon}</h1>
                       <h1 className="hidden md:flex"> {dat.content}</h1>

                      </Link>
                    </li>
                  );
                })}

                <li className="w-full">
                  <button
                    onClick={() => logOut(false)}
                    className="flex text-[14px] lg:text-[20px] font-bold transition-all gap-0 lg:gap-1 hover:bg-[--main-color] hover:text-white text-[--secondary-color] items-center  border-2 border-[--main-color] rounded-lg w-full py-[6px] px-[10px]"
                  >
                          <h1 className="block text-[18px] "><GoSignOut /></h1>
                       <h1 className="hidden md:flex"> Log out</h1>

                     
                  </button>
                </li>
              </ul>
            </div>
          </aside>
</>
}

export default Aside





 
 


