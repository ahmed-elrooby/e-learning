"use client"
import Image from 'next/image'
import React,{useState} from "react";
import { FaSpinner } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import book from "../../Images/book.json";
import Lottie from "lottie-react";
import axios from 'axios';
import Joi from 'joi';
import toast from "react-hot-toast";

const ForgetPassword = () => {

  const [loading, setLoading] = useState(false);

const [email,setEmail] = useState(
  {
    email:""
  }
)
const getEmail = (e) => {
  const emailName = e.target.id;
  const emailValue = e.target.value;
  setEmail((prevEmail) => ({
    ...prevEmail,
    [emailName]: emailValue,
  }));
};


//send data 
const sendData = async () => {
  setLoading(true);
  try {
    const { data } = await axios.post(
      "http://elearningsystem.runasp.net/api/Auth/forgot-password",
      email
    );
    if (data.succeeded == true) {
      toast.success(data.message || "we have sent a password reset link to your email.");

    } else {
      console.error("there are not error")

    }
  } catch (error) {
    toast.error(
      error?.response?.data.message || "An unexpected error occurred"
    );   } finally {
    setLoading(false);
  }
};

//regExp
let reg = (e) => {
  e.preventDefault();
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
 
  });
  const joiresponse = schema.validate(email, { abortEarly: false });
  if (joiresponse.error === undefined) {
    sendData();
  } else {
    toast.error(error?.response?.data.message);
    console.error(error?.response?.data.message)
  }
};



  return <>
  <div className="my-[100px] w-[90%] mx-auto">
  <h1 className="text-[--main-color] flex items-center gap-2 font-bold capitalize text-center text-[16px] md:text-[24px]">
          {" "}
          Welcome to Eduvi Online Learning Platform
              <Lottie animationData={book} className="w-[80px] " /> 
           
        </h1>
    <div className='flex flex-col items-center justify-around gap-3 md:flex-row'>
<div>
  <Image src={require("../../Images/forget.svg")} alt="image" />
</div>

<div>
<form action="" onSubmit={reg} >
<div className="flex flex-col items-start gap-[15px]">
                <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                  {" "}
                  email *
                </label>
                <div className="relative w-full ">
                  <MdOutlineMarkEmailRead className="text-[--main-color] text-[20px] absolute top-[12px] left-1 " />
                  <input
                  onChange={getEmail}
                    className=" p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px]  md:w-[400px] border-[--main-color] pl-[30px]  "
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <button
                className="border  w-[350px] md:w-[400px] max-w-full mt-[20px]  cursor-pointer transition-all hover:bg-[--main-color] hover:text-white border-[--main-color] py-[8px] px-2 rounded-lg capitalize font-bold text-[--main-color] text-[18px]"
                type="submit"
              >
                {loading ? (
                  <FaSpinner className="mx-auto text-[22px] animate-spin" />
                ) : (
                  "Send Email"
                )}
              </button>
  </form> 
</div>
    </div>
  </div>
  
  </>
}

export default ForgetPassword
