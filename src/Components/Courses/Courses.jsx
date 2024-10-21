
"use client"
import Lottie from 'lottie-react';
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt';
import courses from "../../Images/courses.json"
import Link from 'next/link';




const Courses = () => {
  return <>
<div className="w-[90%] mx-auto my-[50px]">
<div className="flex flex-col items-center justify-between md:flex-row">
<div className="flex flex-col items-start gap-4 md:w-[800px] w-full">
  <h1 className="text-center text-[--main-color]  capitalize font-bold text-[25px] md:text-[35px]">Discover Our Courses</h1>
  <p className='text-[17px] text-[--secondary-color] font-semibold capitalize leading-[1.8]'>Explore a variety of courses designed to enhance your skills and knowledge. Whether you're looking to start something new or deepen your expertise, our selection of lessons offers something for everyone. Begin your learning journey today and take the next step toward achieving your goals.</p>
  </div>
  <Lottie animationData={courses} className="w-full"/>
  
  </div>  
   <div className="grid items-center grid-cols-2 gap-3 mb-[50px] md:grid-cols-3 lg:grid-cols-4">
    <Tilt>
        <Link href="courses/id" className="border transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
            </div>
            <div className="flex  pb-[10px] flex-col items-center justify-around md:flex-row">
                <span className="text-[18px] capitalize">price</span>
                <input className="border border-[--main-color] text-[--main-color] font-bold px-4 py-[2px] cursor-pointer transition-all hover:text-white hover:bg-[--main-color] rounded-lg text-[20px]" type="submit" value="Enroll" />
            </div>
        </Link>

        </Tilt>
        <Tilt>
        <div className="border transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
            </div>
            <div className="flex  pb-[10px] flex-col items-center justify-around md:flex-row">
                <span className="text-[18px] capitalize">price</span>
                <input className="border border-[--main-color] text-[--main-color] font-bold px-4 py-[2px] cursor-pointer transition-all hover:text-white hover:bg-[--main-color] rounded-lg text-[20px]" type="submit" value="Enroll" />
            </div>
        </div>

        </Tilt>
        <Tilt>
        <div className="border transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
            </div>
            <div className="flex  pb-[10px] flex-col items-center justify-around md:flex-row">
                <span className="text-[18px] capitalize">price</span>
                <input className="border border-[--main-color] text-[--main-color] font-bold px-4 py-[2px] cursor-pointer transition-all hover:text-white hover:bg-[--main-color] rounded-lg text-[20px]" type="submit" value="Enroll" />
            </div>
        </div>

        </Tilt>
        <Tilt>
        <div className="border transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
            </div>
            <div className="flex  pb-[10px] flex-col items-center justify-around md:flex-row">
                <span className="text-[18px] capitalize">price</span>
                <input className="border border-[--main-color] text-[--main-color] font-bold px-4 py-[2px] cursor-pointer transition-all hover:text-white hover:bg-[--main-color] rounded-lg text-[20px]" type="submit" value="Enroll" />
            </div>
        </div>

        </Tilt>
        <Tilt>
        <div className="border transition-all hover:shadow-lg cursor-pointer rounded-lg border-[--main-color] flex flex-col gap-2">
<div className="p-2">
<Image className="w-full max-w-full rounded-lg" src={require("../../Images/avatar-01.png")} alt="img" />
</div>            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize font-bold text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
            </div>
            <div className="flex  pb-[10px] flex-col items-center justify-around md:flex-row">
                <span className="text-[18px] capitalize">price</span>
                <input className="border border-[--main-color] text-[--main-color] font-bold px-4 py-[2px] cursor-pointer transition-all hover:text-white hover:bg-[--main-color] rounded-lg text-[20px]" type="submit" value="Enroll" />
            </div>
        </div>

        </Tilt>























        
    </div>
</div>
  </>
}

export default Courses