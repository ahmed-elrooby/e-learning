"use client"
import React from 'react'
import home from "../../../Images/home.json";
import Lottie from 'lottie-react';
const ImageComponent = () => {
  return <>
  <div>


  <Lottie 
className="md:w-[500px] w-full "
animationData={home}

/>

  </div>
  </>
}

export default ImageComponent