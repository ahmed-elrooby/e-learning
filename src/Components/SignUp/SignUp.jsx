"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import Joi from "joi";
import { FaRegEye } from "react-icons/fa6";
import book from "../../Images/book.json";
import { useRouter } from "next/navigation";
import { IoMdEyeOff } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import { ContextValue } from "@/Context/ContextData";

const SignUp = () => {
  const {setUserData,userData} = useContext(ContextValue)
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
//make show password
const [show, setShow] = useState(false)
const showPassword =()=>{
  setShow((ele)=> !ele)
}

//error 
const [errorApi, setErrorApi] = useState(null);
const successMessage = () => toast.success("Account Created Successfully");

// spinner loading 

const [loading, setLoading] = useState(false)

  // get data from user
  const getData = (e) => {
    const userName = e.target.id;
    const userValue = e.target.value;
    const newUser = { ...user };
    newUser[userName] = userValue;
    setUser(newUser);
    setUserData(user)
  };

  // send data
  const sendData = async () => {
    setLoading(true); 
    try {
      const { data } = await axios.post(
        "http://elearningsystem.runasp.net/api/Auth/register-student",
        user
      );
      if (data.succeeded) {
        successMessage();
       
        router.push("/SignIn");
      } else {
        toast.error(data.message); 
      }
    } catch (error) {
      toast.error("The new password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
    } finally {
      setLoading(false);

    }
  };
  

  // make regular expression

  let reg = (e) => {
    e.preventDefault();
    const schema = Joi.object({
      firstName: Joi.string().min(3).max(13).required(),
      lastName: Joi.string().min(3).max(13).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
        password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .required(),
      
    });
    const joiresponse = schema.validate(user, { abortEarly: false });
    if (joiresponse.error === undefined) {
      sendData();
    } else {
      // show error for user
      toast.error("Please ensure all fields are filled in correctly.");

    }
  };

  return (
    <>
      <div className="pt-[100px] w-[90%] h-screen mx-auto mb-[50px]">
        <h1 className="text-[--main-color] font-bold capitalize text-center mb-[20px] text-[16px] md:text-[24px]">
          {" "}
          Welcome to Eduvi Online Learning Platform{" "}
        </h1>

        <div className="flex flex-col mx-auto  gap-[20px] justify-center  items-center md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h1 className="capitalize flex items-center p-0 m-0 text-[22px] font-bold text-[--secondary-color]">
              <Lottie animationData={book} className="w-[50px] " /> title
            </h1>
           <Image src={require("../../Images/Sign up.gif")} alt="sign up"/>
          </div>
          <div className="">
            <form
              action=""
              onSubmit={reg}
              className=" flex flex-col gap-[10px]  "
            >
              <div className="flex flex-col items-start  gap-[2px]">
                <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                  firstName *
                </label>
                <div className="relative w-full ">
                  <FaRegUser className="text-[--main-color] text-[19px] absolute top-[11px] left-1 " />
                  <input
                    onChange={getData}
                    className=" p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px]  md:w-[400px] border-[--main-color] pl-[25px]  "
                    placeholder="Your firstName"
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                  lastName *
                </label>
                <div className="relative w-full ">
                  <FaRegUser className="text-[--main-color] text-[19px] absolute top-[12px] left-1 " />
                  <input
                    onChange={getData}
                    className=" p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px]  md:w-[400px] border-[--main-color] pl-[25px]  "
                    placeholder="Your lastName"
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                  {" "}
                  email *
                </label>
                <div className="relative w-full ">
                  <MdOutlineMarkEmailRead className="text-[--main-color] text-[20px] absolute top-[12px] left-1 " />
                  <input
                    onChange={getData}
                    className=" p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px]  md:w-[400px] border-[--main-color] pl-[30px]  "
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[2px] items-start ">
                <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                  password *
                </label>
                <div className="relative w-full ">
                  <RiLockPasswordLine className="text-[--main-color] text-[19px] absolute top-[12px] left-1 " />
                  <input
                    onChange={getData}
                    className="placeholder-xs p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px]  md:w-[400px] border-[--main-color] pl-[25px]  "
                    placeholder=" uppercase,lowercase,number,and symbol."
                    type={`${show?"text":"password"}`}
                    name="password"
                    id="password"
                    required
                  />
                  <span onClick={showPassword} className="absolute cursor-pointer right-2 top-3">{show?<IoMdEyeOff className="text-[20px] text-[--main-color]"/>:<FaRegEye className="text-[20px] text-[--main-color]"/>}</span>
                </div>
              </div>
              <button
                className="border  w-[350px] md:w-[400px] max-w-full mt-[8px]  cursor-pointer transition-all hover:bg-[--main-color] hover:text-white border-[--main-color] py-[8px] px-2 rounded-lg capitalize font-bold text-[--main-color] text-[18px]"
                type="submit"
              >
                {loading? <FaSpinner className="mx-auto text-[22px] animate-spin" />:"Sign Up"}
              </button>
              <p>
                Alreay have account?{" "}
                <Link
                  href="/SignIn"
                  className="text-[--main-color] transitin-all hover:text-[--secondary-color] mt-[15px] font-bold"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
