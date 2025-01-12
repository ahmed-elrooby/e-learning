"use client"
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMarkEmailRead , MdOutlinePhoneForwarded} from "react-icons/md";
import Link from 'next/link';
import { ImLocation2 } from "react-icons/im";
import Image from 'next/image';
import ContactImage from "../../Images/Social tree.gif"


const Contact = () => {
  return <>
 <section className='m-auto w-[90%] mt-[80px] mb-[80px] '>
 <div className="flex flex-col items-center gap-4 my-4 md:flex-row">
 <div className="flex flex-col items-start md:w-[800px] w-full gap-[15px]">
 <h1 className='text-[35px] font-bold capitalize text-[--main-color]'>Contact us </h1>
    <p className='text-[17px] text-[--secondary-color] font-semibold capitalize leading-[1.8]'>Get in touch with us for any inquiries or support related to courses or technical issues. We are here to help you achieve the best learning experience possible. You can reach us through the form below or use other available contact methods. We’ll be happy to answer your questions and provide the necessary assistance as soon as possible.</p>
  
    </div>
<Image src={ContactImage} alt='contact' />
  </div>
  <div>
    <div className="flex mt-[50px] flex-col gap-[100px] md:gap-[20px] items-center  md:flex-row">
    <div  className="skew-rotate  w-full  flex flex-col items-center justify-center  border border-[--main-color] rounded-lg p-[5px] bg-[--secondary-color] " >
        <h1 className="text-[40px] capitalize text-[--main-color] font-bold  mb-[20px]">social contacts</h1>
        <div className="flex flex-col items-start gap-[10px] ">
        <Link 
    href="https://wa.me/201554247018" 
    className="flex items-center gap-[20px]" 
    target="_blank" 
    rel="noopener noreferrer"
>
    <div className="w-[40px] flex items-center justify-center h-[40px] border-2 border-[--main-color] rounded-full">
        <MdOutlinePhoneForwarded className='text-[--main-color] text-[20px]' />
    </div>
    <h1 className="text-[20px] font-bold text-[--main-color]">01554247018</h1>
</Link>

<Link 
    href="mailto:ahmdalrwby24@gmail.com" 
    className="flex items-center gap-[20px]"
>
    <div className="w-[40px] flex items-center justify-center h-[40px] border-2 border-[--main-color] rounded-full">
        <MdOutlineMarkEmailRead className='text-[--main-color] text-[20px]' />
    </div>
    <h1 className="text-[20px] font-bold text-[--main-color]">ahmdalrwby24@gmail.com</h1>
</Link>

<Link 
    href="https://www.google.com/maps/place/29%C2%B011'36.2%22N+31%C2%B004'44.1%22E/@29.1933788,31.076331,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.1933788!4d31.0789059?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" 
    className="flex items-center gap-[20px]" 
    target="_blank" 
    rel="noopener noreferrer"
>
    <div className="w-[40px] flex items-center justify-center h-[40px] border-2 border-[--main-color] rounded-full">
        <ImLocation2 className='text-[--main-color] text-[20px]' />
    </div>
    <h1 className="text-[20px] font-bold text-[--main-color]">Behashin Village, Nasser Center, Beni Suef, Egypt</h1>
</Link>

        </div>
        </div>
     
       <form action="" className=" flex flex-col gap-[10px] w-full ">
        <div className="flex flex-col items-start gap-[2px]">
          <label className="text-[20px] font-bold capitalize text-[--secondary-color]">Name **</label>
        <div className='relative w-full '>
       
       <FaRegUser className='text-[--secondary-color] text-[19px] absolute top-[9px] left-1 ' />
       <input className=' p-2 rounded-lg text-[--secondary-color] outline-none border w-full md:w-[400px] border-[--secondary-color] pl-[25px] capitalize ' placeholder='Your Name' type="text" name="name" id="name"  />

     </div>
        </div>
        <div className="flex flex-col items-start gap-[2px]">
          <label className="text-[20px] font-bold capitalize text-[--secondary-color]">E-Mail **</label>
          <div className='relative w-full '>
       
       <MdOutlineMarkEmailRead className='text-[--secondary-color] text-[20px] absolute top-[9px] left-1 ' />
       <input className=' p-2 rounded-lg text-[--secondary-color] outline-none border w-full md:w-[400px] border-[--secondary-color] pl-[25px] capitalize ' placeholder='Your Name' type="text" name="name" id="name"  />

     </div>
        </div>
        <div className="flex flex-col gap-[2px] items-start ">
          <label className="text-[20px] font-bold capitalize text-[--secondary-color]">Phone **</label>
          <div className='relative w-full '>
       
       <MdOutlinePhoneForwarded className='text-[--secondary-color] text-[19px] absolute top-[9px] left-1 ' />
       <input className=' p-2 rounded-lg text-[--secondary-color] outline-none border w-full md:w-[400px] border-[--secondary-color] pl-[25px] capitalize ' placeholder='Your Name' type="text" name="name" id="name"  />

     </div>
        </div>
      <div className="flex flex-col items-start gap-[2px]">
      <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
          your message **
        </label>
        <textarea className='h-[150px] p-1  rounded-lg text-[--secondary-color] outline-none border w-full md:w-[400px] border-[--secondary-color]  capitalize 'placeholder="Your Message"></textarea>
      
      </div>
      </form>
 
    </div>
  </div>
 </section>
  </>
}

export default Contact