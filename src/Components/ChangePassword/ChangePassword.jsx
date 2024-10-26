"use client"
import React, { useState } from 'react'
import { FaRegEye, FaSpinner } from 'react-icons/fa'
import { IoMdEyeOff } from 'react-icons/io'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import axios from 'axios'
import toast from 'react-hot-toast'
import Joi from 'joi'
const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const handleShowCurrentPassword = () => {
        setShowCurrentPassword((ele) => !ele);
    };
    const [loading, setLoading] = useState(false);

    const handleShoNewPassword = () => {
        setShowNewPassword((ele) => !ele);
    };

    // get data from user 
    const [user, setUser] = useState({
        username: "",
        currentPassword: "",
        newPassword: ""
    })

    const getDataToChangePassword = (e) => {

        const inputName = e.target.name;
        const inputValue = e.target.value;
        const NewUser = { ...user }
        NewUser[inputName] = inputValue;
        setUser(NewUser)
    }


    // send data 
    const SendData = async () => {
        setLoading(true);

        try {
            const token = localStorage.getItem("token"); 
            console.log(token);
            
            const { data } = await axios.post("http://elearningsystem.runasp.net/api/Auth/change-password", user, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                
            });
            if(data.succeeded === true)
            {
                toast.success("Password changed successfully");
            }else{
                toast.error("An error occurred while changing the password. Please try again.");
            }

            console.log(data);
        } catch (error) {
            console.error(error);

        }finally{
            setLoading(false);

        }
    };
    

    let reg = (e) => {
        e.preventDefault();
        const schema = Joi.object({
            username: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
            currentPassword: Joi.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
            .required(),
            newPassword: Joi.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
            .required(),
        });
        const joiresponse = schema.validate(user, { abortEarly: false });
        if (joiresponse.error === undefined) {
          SendData();
        } else {
            toast.error("The new password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
        }
      };
    
    return <>
    <div className=" h-scrren  mx-auto ">
    

    <div className="flex w-full flex-col mx-auto items-center gap-[20px] justify-center   md:flex-row-reverse">
      
      <div className="w-full">
        <form action="" className='md:w-[70%] w-full' onSubmit={reg}>
          <div className=" flex w-full  flex-col gap-[20px]">





          <div className="flex w-full flex-col items-start gap-[2px]">
            <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
              email *
            </label>
            <div className="relative w-full">
              <MdOutlineMarkEmailRead className="text-[--secondary-color] text-[20px] absolute top-[12px] left-1 " />
              <input
                            onChange={getDataToChangePassword}
                            className=" p-[10px] w-full rounded-lg text-[--secondary-color] outline-none border w-full   border-[--secondary-color] pl-[30px]  "
                placeholder="example@gmail.com"
                type="email"
                name="username"
                id="username"
                required
              />
            </div>
          </div>




          <div className="flex flex-col gap-[2px] items-start ">
            <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
                        current password *
            </label>
            <div className="relative w-full ">
              <RiLockPasswordLine className="text-[--secondary-color] text-[19px] absolute top-[12px] left-1 " />
              <input
                            onChange={getDataToChangePassword}
                            className="placeholder-xs w-full p-[10px] rounded-lg text-[--secondary-color] outline-none border    border-[--secondary-color] pl-[25px]  "
                placeholder=" uppercase,lowercase,number,and symbol."
                type={`${showCurrentPassword ? "text" : "password"}`}
                name="currentPassword"
                id="currentPassword"
                required
              />
              <span
                onClick={handleShowCurrentPassword}
                className="absolute cursor-pointer right-2 top-3"
              >
                {showCurrentPassword ? (
                  <IoMdEyeOff className="text-[20px] text-[--secondary-color]" />
                ) : (
                  <FaRegEye className="text-[20px] text-[--secondary-color]" />
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[2px] items-start ">
            <label className="text-[20px] font-bold capitalize text-[--secondary-color]">
            new password *

            </label>
            <div className="relative w-full ">
              <RiLockPasswordLine className="text-[--secondary-color] text-[19px] absolute top-[12px] left-1 " />
              <input
                            onChange={getDataToChangePassword}
                            className="placeholder-xs w-full p-[10px] rounded-lg text-[--secondary-color] outline-none border w-full  border-[--secondary-color] pl-[25px]  "
                placeholder=" uppercase,lowercase,number,and symbol."
                type={`${showNewPassword ? "text" : "password"}`}
                name="newPassword"
                id="newPassword"
                
                required
              />
              <span
                onClick={handleShoNewPassword}
                className="absolute cursor-pointer right-2 top-3"
              >
                {showNewPassword ? (
                  <IoMdEyeOff className="text-[20px] text-[--secondary-color]" />
                ) : (
                  <FaRegEye className="text-[20px] text-[--secondary-color]" />
                )}
              </span>
            </div>
          </div>
          <button
                    className="border-2 md:w-[200px] w-full max-w-full mt-[8px]  cursor-pointer transition-all hover:bg-[--secondary-color] hover:text-white border-[--secondary-color] py-[8px] px-2 rounded-lg capitalize font-bold text-[--secondary-color] text-[18px]"
                    type="submit"
          >
            {loading ? (
              <FaSpinner className="mx-auto text-[22px] animate-spin" />
            ) : (
              "Change Password"
            )}
          </button>
          </div>

          
        </form>
      </div>
    </div>
  </div>




       
    </>
}

export default ChangePassword