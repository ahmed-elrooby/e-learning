"use client";
import React, { useState, useEffect } from "react";
import { CiSaveUp1 } from "react-icons/ci";

const Up = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
                <div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
          onClick={handleTop}
          className="  fixed bottom-[100px] right-[20px]   font-bold text-white cursor-pointer z-[555555] transition-all hover:bg-[--main-color] rounded-full p-2 bg-[--secondary-color]"
        >
          <CiSaveUp1 size={36} />
        </div>
      )}
    </>
  );
};

export default Up;