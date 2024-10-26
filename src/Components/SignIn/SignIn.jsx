"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
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
import { ContextValue } from "@/Context/ContextData";

const SignIn = () => {
  const { setRefToken,refToken, setToken } = useContext(ContextValue);

  const successMessage = () => {
    toast.success(`Welcome, Your account has been created successfully.`);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Loading state
  const [loading, setLoading] = useState(false);

  // Show password state
  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow((prevState) => !prevState);
  };

  const router = useRouter();

  // Get data from user
  const getData = (e) => {
    const userName = e.target.id;
    const userValue = e.target.value;
  const NewUser ={...user}
  NewUser[userName]=userValue;
  setUser(NewUser)
  };

  // Send data to login
  const sendData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://elearningsystem.runasp.net/api/Auth/login",
        user
      );
      console.log(data)
      if (data.message === "Login successful.") {
        setToken(data.data.token);
        setRefToken(data.data.refreshToken)

        successMessage();
        router.push("/Courses");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      
        toast.error(
          error?.response?.data.message || "An unexpected error occurred"
        );
      }
    finally {
      setLoading(false);
    }
  };
  
  
  

  // Regular expression validation
  const reg = (e) => {
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
      toast.error(
        "The new password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    }
  };

  return (
    <>
      <div className="pt-[100px] h-screen w-[90%] mx-auto mb-[50px]">
        <h1 className="mb-[30px] text-[--main-color] font-bold capitalize text-center text-[16px] md:text-[24px]">
          Welcome to Eduvi Online Learning Platform
        </h1>

        <div className="flex flex-col mx-auto items-center gap-[20px] justify-center md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Lottie
              animationData={signin}
              className="w-full max-w-full lg:w-[400px]"
            />
          </div>
          <div>
            <form onSubmit={reg}>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col items-start gap-[2px]">
                  <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                    email *
                  </label>
                  <div className="relative w-full">
                    <MdOutlineMarkEmailRead className="text-[--main-color] text-[20px] absolute top-[12px] left-1" />
                    <input
                      onChange={getData}
                      className="p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px] md:w-[400px] border-[--main-color] pl-[30px]"
                      placeholder="example@gmail.com"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start">
                  <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                    password *
                  </label>
                  <div className="relative w-full">
                    <RiLockPasswordLine className="text-[--main-color] text-[19px] absolute top-[12px] left-1" />
                    <input
                      onChange={getData}
                      className="p-[10px] rounded-lg text-[--main-color] outline-none border w-[350px] md:w-[400px] border-[--main-color] pl-[25px]"
                      placeholder="Uppercase, lowercase, number, and symbol."
                      type={show ? "text" : "password"}
                      id="password"
                      required
                    />
                    <span onClick={showPassword} className="absolute cursor-pointer right-2 top-3">
                      {show ? (
                        <IoMdEyeOff className="text-[20px] text-[--main-color]" />
                      ) : (
                        <FaRegEye className="text-[20px] text-[--main-color]" />
                      )}
                    </span>
                  </div>
                </div>
                <button
                  className="border w-[350px] md:w-[400px] mt-[8px] cursor-pointer transition-all hover:bg-[--main-color] hover:text-white border-[--main-color] py-[8px] px-2 rounded-lg font-bold text-[--main-color] text-[18px]"
                  type="submit"
                >
                  {loading ? (
                    <FaSpinner className="mx-auto text-[22px] animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
              <Link href="/ForgetPassword" className="mt-[10px] block font-bold hover:text-[--secondary-color] text-[--main-color] capitalize">
                Forget password
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
