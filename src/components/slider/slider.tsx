"use client";
import Image from "next/image";
import img_2 from "@/images/walls-io-Dn8XDbY3shg-unsplash.jpg";
import img_3 from "@/images/luke-thorn-1zqhNlDaltE-unsplash.jpg";
import img_1 from "@/images/brandon-romanchuk-rQb-17JmGmk-unsplash.jpg";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import React, { useState } from "react";
import { GoDot } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showPic1, setShowPic1] = useState(true);
  const [showPic2, setShowPic2] = useState(false);
  const [showPic3, setShowPic3] = useState(false);

  // Function to go to the next image
  const nextSlide = () => {
    //setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setCurrentIndex(currentIndex + 1);
    if (currentIndex === 1) {
      setShowPic3(false);
      setShowPic1(true);
      setShowPic2(false);
    } else if (currentIndex === 3) {
      setShowPic3(true);
      setShowPic1(false);
      setShowPic2(false);
    } else if (currentIndex === 2) {
      setShowPic2(true);
      setShowPic3(false);
      setShowPic1(false);
    }
    if (currentIndex >= 3) setCurrentIndex(1);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    // setCurrentIndex(
    //   (prevIndex) => (prevIndex - 1 + images.length) % images.length
    // );
    if (currentIndex <= 1) setCurrentIndex(3);
    else setCurrentIndex(currentIndex - 1);
    if (currentIndex === 2) {
      setShowPic2(true);
      setShowPic1(false);
      setShowPic3(false);
    } else if (currentIndex === 1) {
      setShowPic1(true);
      setShowPic2(false);
      setShowPic3(false);
    } else if (currentIndex === 3) {
      setShowPic1(false);
      setShowPic2(false);
      setShowPic3(true);
    }

    if (currentIndex <= 1) setCurrentIndex(3);
    //console.log(currentIndex);
  };

  return (
    <div className="">
      {
        <div className="max-md:w-190 2xl:w-784 max-2xl:w-331 xl:w-337 max-sm:w-121 sm:w-167 md:w-206 lg:w-275">
          {showPic1 ? (
            <Image
              src={img_1}
              alt="laptop-img"
              width={3136}
              height={100}
              className=""
            />
          ) : showPic2 ? (
            <Image
              src={img_2}
              alt="laptop-img"
              width={2200}
              height={100}
              className=""
            />
          ) : showPic3 ? (
            <Image
              src={img_3}
              alt="laptop-img"
              width={2000}
              height={100}
              className=""
            />
          ) : (
            <Image
              src={img_1}
              alt="laptop-img"
              width={2000}
              height={100}
              className=""
            />
          )}
        </div>
      }

      <div className="controls relative">
        <FaCaretLeft
          onClick={prevSlide}
          className="absolute mobile:left-50 ipad:left-80 tablet:left-110 laptop:left-140 top-5 max-lg:left-100 md:left-130 max-md:left-50 2xl:left-350 bg-stone-100 text-stone-900 rounded p-1 ml-12 text-3xl max-sm:left-60 max-xl:left-130 2xl:text-6xl max-2xl:left-130 sm:left-60"
        />

        <FaCaretRight
          onClick={nextSlide}
          className="absolute mobile:left-100 ipad:left-130 tablet:left-160 laptop:left-190 top-5 max-lg:left-150 md:left-180 max-xl:left-180 max-md:left-120 2xl:left-460 bg-stone-100 max-sm:left-110 text-stone-900 rounded p-1 text-3xl mr-20 2xl:text-6xl max-2xl:left-180 sm:left-110"
        />
      </div>
      <div className="relative mobile:left-70 ipad:left-100 tablet:left-130 laptop:left-160 w-20 max-sm:left-80 max-md:left-80 max-xl:left-150 px-3 rounded-xl m-4 my-6 2xl:left-400 2xl:w-70 2xl:text-2xl max-2xl:left-150">
        {showPic1 ? (
          <>
            <RxDotFilled className="inline-block text-2xl" />
            <GoDot className="inline-block" />
            <GoDot className="inline-block" />
          </>
        ) : showPic2 ? (
          <>
            <GoDot className="inline" />
            <RxDotFilled className="inline text-2xl" />
            <GoDot className="inline" />
          </>
        ) : showPic3 ? (
          <>
            <GoDot className="inline" />
            <GoDot className="inline" />
            <RxDotFilled className="inline text-2xl" />
          </>
        ) : (
          <>
            <GoDot className="inline" />
            <GoDot className="inline" />
            <GoDot className="inline" />
          </>
        )}
      </div>
    </div>
  );
}
