import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyCourses = () => {
  return <>
  <div>
    <div>
      <h1 className="text-[25px] text-center mb-2 font-bold text-[--secondary-color] capitalize">your learning</h1>
      <div className="grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-[50px]  ">
        <Link href="courses/id" className="border relative transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
                <span className="text-[18px] p-1 absolute right-0 bg-[--secondary-color] text-white rounded-tr-lg top-0 border border-[--secondary-color] capitalize">price</span>

            </div>
            
        </Link>

        <Link href="courses/id" className="border relative transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
                <span className="text-[18px] p-1 absolute right-0 bg-[--secondary-color] text-white rounded-tr-lg top-0 border border-[--secondary-color] capitalize">price</span>

            </div>
            
        </Link>





        <Link href="courses/id" className="border relative transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
                <span className="text-[18px] p-1 absolute right-0 bg-[--secondary-color] text-white rounded-tr-lg top-0 border border-[--secondary-color] capitalize">price</span>

            </div>
            
        </Link>









        <Link href="courses/id" className="border relative transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
                <span className="text-[18px] p-1 absolute right-0 bg-[--secondary-color] text-white rounded-tr-lg top-0 border border-[--secondary-color] capitalize">price</span>

            </div>
            
        </Link>









        
    </div>
    </div>
  </div>
  </>
};

export default MyCourses;
