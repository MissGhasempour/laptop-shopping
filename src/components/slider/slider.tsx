"use client";
import Image from "next/image";
import img_2 from "@/images/subhra-jyoti-paul-aAZMEpZVgo4-unsplash.jpg";
import img_1 from "@/images/kaiyu-wu-pYgwmH--qgU-unsplash.jpg";
import img_3 from "@/images/james-lewis-RP6sZTOCvuA-unsplash.jpg";
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
    console.log(currentIndex);
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

    console.log(currentIndex);
  };

  return (
    <div className="relative">
      {
        <div className="sm:ml-2 max-sm:w-96 ">
          {showPic1 ? (
            <Image src={img_1} alt="laptop-img" width={1400} height={50} />
          ) : showPic2 ? (
            <Image src={img_2} alt="laptop-img" width={1400} height={50} />
          ) : (
            <Image src={img_3} alt="laptop-img" width={1300} height={50} />
          )}
        </div>
      }

      <div className="text-4xl">
        <div className="relative bottom-18 max-sm:top-0 text-stone-900 ">
          <FaCaretLeft
            onClick={prevSlide}
            className="absolute left-120 max-sm:left-0 top-20 bg-stone-100 rounded p-1 ml-5  "
          />
        </div>

        <div className="relative bottom-18 right-0 max-sm:top-0 text-stone-900">
          <FaCaretRight
            onClick={nextSlide}
            className="absolute right-130 top-20 max-sm:right-5 bg-stone-100 rounded p-1  mr-5"
          />
        </div>
      </div>
      <div className="relative left-160  w-20 bg-stone-300 text-zinc-900 px-3 rounded-xl m-4 sm:left-70 md:left-85 lg:left-150 max-sm:left-40 ">
        {showPic1 ? (
          <>
            <RxDotFilled className="inline text-2xl" />
            <GoDot className="inline" />
            <GoDot className="inline" />
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
