
"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const PopularCourses = () => {
  return <>
<div className="w-[90%] mx-auto my-[50px]">
    <h1 className="text-center text-[--main-color] capitalize font-bold text-[22px]">popular courses</h1>
    <div className="grid items-center grid-cols-2 gap-3 mb-[50px] md:grid-cols-3 lg:grid-cols-4">
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
        <div className="border rounded-lg border-[--main-color] flex flex-col gap-2">
            <Image className="max-w-full rounded-t-lg" src={require("../../Images/avatar-01.png")} alt="img" />
            <div className="flex flex-col items-start gap-2 p-3 m-2">
                <h1 className="capitalize text-[--main-color]">name of course</h1>
                <p className="capitalize text-[18px]">description</p>
            </div>
            <div className="flex  pb-[10px] flex-col items-center justify-around md:flex-row">
                <span className="text-[18px] capitalize">price</span>
                <input className="border border-[--main-color] text-[--main-color] font-bold px-4 py-[2px] cursor-pointer transition-all hover:text-white hover:bg-[--main-color] rounded-lg text-[20px]" type="submit" value="Enroll" />
            </div>
        </div>

        </Tilt>
    </div>
    <Link href="/" className="border block w-fit mx-auto border-[--main-color] text-white font-bold px-4 py-[8px] cursor-pointer bg-[--main-color] transition-all hover:text-[--main-color] hover:bg-white rounded-lg text-[20px]">view all courses</Link>
</div>
  </>
}

export default PopularCourses