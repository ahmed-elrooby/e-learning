"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import signin from "../../Images/signin.json";
import axios from "axios";
import Joi from "joi";
import { useRouter } from "next/navigation";
import { FaRegEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
const SignIn = () => {
  const successMessage = () =>{
    toast.success(`Welcome,  Your account has been created successfully.`);

  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //loading
  const [loading, setLoading] = useState(false);

  //make show password
  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow((ele) => !ele);
  };
  const router = useRouter();
  // get data from user
  const getData = (e) => {
    const userName = e.target.id;
    const userValue = e.target.value;
    const newUser = { ...user };
    newUser[userName] = userValue;
    setUser(newUser);
  };

  // send data
  const sendData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://elearningsystem.runasp.net/api/Auth/login",
        user
      );
      if (data.message == "Login successful.") {
        localStorage.setItem("tkn", data.token);

        successMessage();
        router.push("/Courses");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error?.response?.data.message || "An unexpected error occurred"
      ); 
    } finally {
      setLoading(false);
    }
  };

  // make regular expression

  let reg = (e) => {
    e.preventDefault();
    const schema = Joi.object({
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
      toast.error(error?.response?.data.message);
    }
  };

  return (
    <>
      <div className="pt-[100px] w-[90%] mx-auto mb-[50px]">
        <h1 className="mb-[30px] text-[--main-color] font-bold capitalize text-center text-[16px] md:text-[24px]">
          {" "}
          Welcome to Eduvi Online Learning Platform{" "}
        </h1>

        <div className="flex flex-col mx-auto items-center gap-[20px] justify-center   md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Lottie
              animationData={signin}
              className="w-full max-w-full lg:w-[400px]"
            />
          </div>
          <div className="">
            <form action="" onSubmit={reg}>
              <div className=" flex flex-col gap-[20px]">
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
                    type={`${show ? "text" : "password"}`}
                    name="password"
                    id="password"
                    required
                  />
                  <span
                    onClick={showPassword}
                    className="absolute cursor-pointer right-2 top-3"
                  >
                    {show ? (
                      <IoMdEyeOff className="text-[20px] text-[--main-color]" />
                    ) : (
                      <FaRegEye className="text-[20px] text-[--main-color]" />
                    )}
                  </span>
                </div>
              </div>
              <button
                className="border  w-[350px] md:w-[400px] max-w-full mt-[8px]  cursor-pointer transition-all hover:bg-[--main-color] hover:text-white border-[--main-color] py-[8px] px-2 rounded-lg capitalize font-bold text-[--main-color] text-[18px]"
                type="submit"
              >
                {loading ? (
                  <FaSpinner className="mx-auto text-[22px] animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>
              </div>

              
              <Link href="/ForgetPassword" className=" mt-[10px] block transition-all w-fit font-bold hover:text-[--secondary-color]  text-[--main-color] capitalize"> forget password</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
