import Image from 'next/image'
import React from 'react'
import profileImg from "../../Images/profile.svg"
const Profile = () => {
  return <>
  <div className='w-full mx-auto'>
    <div className='flex flex-col md:flex-row items-center gap-3'>
        <form action="" className="flex flex-col items-center gap-[20px]">
<div className="flex flex-col items-start gap-2">
<label className='text-[20px] font-bold capitalize text-[--secondary-color]'>
      email</label>
    <input  className="w-full  py-[8px] md:w-[400px] border outline-none border-[--main-color] px-[6px]  rounded-lg" type="email" name="email" id="email" />
</div>
<div className="flex flex-col items-start gap-2">
<label className='text-[20px] font-bold capitalize text-[--secondary-color]'>
      Name</label>
    <input className="w-full  md:w-[400px] border outline-none border-[--main-color] px-[6px] py-[8px] rounded-lg" type="text" name="name" id="name" />
</div>
<div className="flex flex-col items-start gap-3">
<label className='text-[20px] font-bold capitalize text-[--secondary-color]'>
  upload image </label>

  <input type="file" className="hidden" id="fileUpload" />
<label for="fileUpload" className="block w-[200px]  cursor-pointer">
  <span className="bg-[--secondary-color] flex justify-center items-center   transition-all border-2 border-[--secondary-color] hover:text-[--secondary-color] hover:bg-white text-white px-4 py-2 rounded-lg">Upload File</span>
</label>
</div>
<input className="border-2 md:w-[200px] w-full border-[--secondary-color] bg-[--secondary-color] text-white font-bold transition-all hover:bg-white hover:text-[--secondary-color] cursor-pointer py-[8px] px-[10px] rounded-lg" type="submit" value="Update" />
        </form>
        <Image alt='profile' className='w-[350px]' src={profileImg}/>
    </div>
  </div>
  </>
}

export default Profile
