"use client"
import { ContextValue } from '@/Context/ContextData'
import React, { useContext } from 'react'
const Profile = () => {
  const {userData} = useContext(ContextValue)
  return <>
<div className='w-full mx-auto'>

<div className='flex flex-col w-full   items-center gap-3'>
<h1 className="text-2xl font-bold text-center my-4 text-[--secondary-color]">
Update Your Profile
</h1>
    <form action="" className="flex w-full flex-col  text-center  items-center gap-[20px]">
<div className="flex flex-col w-full items-start md:w-[500px] gap-2">
<label className='text-[20px] font-bold capitalize text-[--secondary-color]'>
  email</label>
<input  className="w-full  py-[8px] md:w-[500px] border-2 outline-none border-[--secondary-color] px-[6px]  rounded-lg" type="email"

defaultValue={userData?.email}
name="email" id="email" />
</div>
<div className="flex flex-col w-full md:w-[500px] items-start gap-2">
<label className='text-[20px] font-bold capitalize text-[--secondary-color]'>
  Name</label>
<input className="w-full  md:w-[500px] border-2 outline-none border-[--secondary-color] px-[6px] py-[8px] rounded-lg" type="text" name="name" id="name"

defaultValue={`${userData?.firstName} ${userData?.lastName}`}

/>
</div>
<div className="flex flex-col items-start gap-3">
<label className='text-[20px] font-bold capitalize text-[--secondary-color]'>
upload image </label>

<input type="file" className="hidden" id="fileUpload" />
<label htmlFor="fileUpload" className="block w-[200px]  cursor-pointer">
<span className="bg-[--secondary-color] flex justify-center items-center   transition-all border-2 border-[--secondary-color] hover:text-[--secondary-color] w-full hover:bg-white text-white px-4 py-2 rounded-lg">Upload File</span>
</label>
</div>
<input className="border-2 md:w-[200px] w-full border-[--secondary-color] bg-[--secondary-color] text-white font-bold transition-all hover:bg-white hover:text-[--secondary-color] cursor-pointer py-[8px] px-[10px] rounded-lg" type="submit" value="Update" />
    </form>
</div>
</div>
  </>
}

export default Profile
