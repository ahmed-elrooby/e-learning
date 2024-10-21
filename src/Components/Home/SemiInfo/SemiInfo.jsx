import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const SemiInfo = () => {
  return <>
  <div className="bg-[--secondary-color] md:mt-[0px] my-[50px]">
    <div className="w-[95%] mx-auto py-[15px] flex flex-wrap lg:items-center items-start justify-center gap-5  md:justify-around">
    <div className="flex gap-[15px] items-center capitalize text-[--main-color] font-bold text-[20px]">
<FaBookOpen className="text-[--main-color]" size={32}/>
<h1 className="">
    100 online courses
</h1>

</div>

<div className="flex gap-[15px] items-center capitalize text-[--main-color] font-bold text-[20px]">
<RiTeamFill className="text-[--main-color]" size={32}/>
<h1>
    experts instructor
</h1>

</div>

<div className="flex gap-[15px] items-center text-[--main-color] font-bold text-[20px]">
<FaAccessibleIcon className="text-[--main-color]" size={32}/>
<h1 className="">
    lifeTime access
</h1>

</div>

<div className="flex gap-[15px] items-center text-[--main-color] font-bold text-[20px]">
<FaMoneyBillTransfer className="text-[--main-color]" size={32}/>
<h1 className="">
Money Back Guarantee</h1>

</div>
    </div>
  </div>
  
  </>
}

export default SemiInfo