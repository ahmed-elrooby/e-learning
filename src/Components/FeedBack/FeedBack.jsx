"use client";
import Image from "next/image";
import React from "react";
import { MdMenuBook } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import feedback from "../../Images/feedback.json"
import Lottie from "lottie-react";
import book from "../../Images/book.json"

const FeedBack = () => {
  return (
    <>
      <div id="Feedback" className="py-[50px] bg-[--secondary-color]">
        <div className="w-[95%] m-auto">
    <div className="flex flex-col items-center justify-center mb-[40px] md:flex-row">
<div className="flex flex-col gap-[5px] items-start">
<h1 className="text-center my-5 text-[35px] font-bold text-[--main-color] capitalize">
            feedback student's
          </h1>

          <p className="leading-[1.9] text-white font-semibold text-[18px] capitalize">The Feedback page showcases student testimonials about courses. Each entry features a student's experience, photo, name, and title, helping build trust and providing insights for prospective students and instructors.</p>
          </div>
          <Lottie className="max-w-full" animationData={feedback} />


    </div>
          <Swiper
            spaceBetween={4}
            slidesPerView={4}
            speed={1000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {/* اعمل لوب علي دي لان دي اللي معموله صح  */}
            <SwiperSlide >
          <div className="relative flex flex-col items-center">
              <div className="border transition-all hover:shadow-lg border-[#f97316db] py-2 px-3 mb-2 rounded-lg text-center">
                <p className="text-[17px] cursor-pointer after:content-['']  relative after:top-0 after:absolute before:content-[''] before:absolute before:w-[4px] before:h-0 before:hover:h-full before:transition-all before:bg-[--main-color] before:bottom-0 before:left-[-13px] after:w-[4px] after:h-0 after:transition-all hover:after:h-full after:bg-[--main-color] after:rounded-lg before:rounded-lg after:right-[-13px] text-start leading-[1.8] text-[--main-color] font-semibold capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima eveniet ratione, dolorem accusamus maiores recusandae
                  sunt soluta sed alias temporibus sapiente, eligendi animi
                  dolores, repellat fugit nesciunt impedit magnam et?
                </p>
              </div>
              <div className="absolute right-[41px] rotate-[45deg]  bottom-[83px]">
                <Lottie animationData={book} className="w-[120px]"/>
              </div>
              <div className="flex flex-col items-center mt-6">
                <Image
                  src={require("../../Images/cat-08.jpg")}
                  className="h-[60px] w-[60px] rounded-full border-2 border-[--main-color] max-w-full"
                  alt="Person"
                />
                <h4 className="font-bold text-[20px] capitalize text-[--main-color]">
                  Title
                </h4>
                <span className="text-white capitalize">Jobs</span>
              </div>
              </div>
            
            </SwiperSlide>

            <SwiperSlide className="relative flex flex-col items-center">
              <div className="border border-[--main-color] py-2 px-3 mb-2 rounded-lg text-center">
                <p className="text-[17px] leading-[1.8] text-[--main-color] font-semibold capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima eveniet ratione, dolorem accusamus maiores recusandae
                  sunt soluta sed alias temporibus sapiente, eligendi animi
                  dolores, repellat fugit nesciunt impedit magnam et?
                </p>
              </div>
              <div className="absolute right-[41px] rotate-[45deg]  bottom-[93px]">
                <MdMenuBook className="text-[--main-color] text-[40px]" />
              </div>
              <div className="flex flex-col items-center mt-6">
                <Image
                  src={require("../../Images/cat-08.jpg")}
                  className="h-[60px] w-[60px] rounded-full border-2 border-[--main-color] max-w-full"
                  alt="Person"
                />
                <h4 className="font-bold capitalize text-[--main-color]">
                  Title
                </h4>
                <span className="text-sm text-gray-600">Jobs</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative flex flex-col items-center">
              <div className="border border-[--main-color] py-2 px-3 mb-2 rounded-lg text-center">
                <p className="text-[17px] leading-[1.8] text-[--main-color] font-semibold capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima eveniet ratione, dolorem accusamus maiores recusandae
                  sunt soluta sed alias temporibus sapiente, eligendi animi
                  dolores, repellat fugit nesciunt impedit magnam et?
                </p>
              </div>
              <div className="absolute right-[41px] rotate-[45deg]  bottom-[93px]">
                <MdMenuBook className="text-[--main-color] text-[40px]" />
              </div>
              <div className="flex flex-col items-center mt-6">
                <Image
                  src={require("../../Images/cat-08.jpg")}
                  className="h-[60px] w-[60px] rounded-full border-2 border-[--main-color] max-w-full"
                  alt="Person"
                />
                <h4 className="font-bold capitalize text-[--main-color]">
                  Title
                </h4>
                <span className="text-sm text-gray-600">Jobs</span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative flex flex-col items-center">
              <div className="border border-[--main-color] py-2 px-3 mb-2 rounded-lg text-center">
                <p className="text-[17px] leading-[1.8] text-[--main-color] font-semibold capitalize">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima eveniet ratione, dolorem accusamus maiores recusandae
                  sunt soluta sed alias temporibus sapiente, eligendi animi
                  dolores, repellat fugit nesciunt impedit magnam et?
                </p>
              </div>
              <div className="absolute right-[41px] rotate-[45deg]  bottom-[93px]">
                <MdMenuBook className="text-[--main-color] text-[40px]" />
              </div>
              <div className="flex flex-col items-center mt-6">
                <Image
                  src={require("../../Images/cat-08.jpg")}
                  className="h-[60px] w-[60px] rounded-full border-2 border-[--main-color] max-w-full"
                  alt="Person"
                />
                <h4 className="font-bold capitalize text-[--main-color]">
                  Title
                </h4>
                <span className="text-sm text-gray-600">Jobs</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
