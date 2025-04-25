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
    if (currentIndex >= 3) setCurrentIndex(3);
    //console.log(currentIndex);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    // setCurrentIndex(
    //   (prevIndex) => (prevIndex - 1 + images.length) % images.length
    // );
    setCurrentIndex(currentIndex - 1);
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

    if (currentIndex <= 1) setCurrentIndex(1);
    //console.log(currentIndex);
  };
  const img1 = <Image src={img_1} alt="laptop-img" width={1400} height={50} />;
  const img2 = <Image src={img_2} alt="laptop-img" width={1400} height={50} />;
  const img3 = <Image src={img_3} alt="laptop-img" width={1400} height={50} />;

  return (
    <div className="relative">
      {
        <div className="sm:ml-2 max-sm:w-102">
          {showPic1 ? img1 : showPic2 ? img2 : showPic3 ? img3 : img1}
        </div>
      }

      <div className="">
        <div className="relative bottom-18 max-sm:top-0 text-stone-900">
          <button className="absolute left-0 top-20 bg-stone-100 rounded p-1 w-25 text-center ml-4">
            Previous
          </button>
          <FaCaretLeft
            onClick={prevSlide}
            className="absolute left-20 top-20 bg-stone-100 rounded p-1 ml-12 text-3xl "
          />
        </div>

        <div className="relative bottom-18 right-0 max-sm:top-0 text-stone-900">
          <button className="absolute right-0 top-20 bg-stone-100 rounded p-1 w-25 text-center mr-4">
            Next
          </button>
          <FaCaretRight
            onClick={nextSlide}
            className="absolute right-13 top-20 bg-stone-100 rounded p-1 text-3xl mr-20"
          />
        </div>
      </div>
      <div className="relative left-160 w-20 bg-stone-300 text-zinc-900 px-3 rounded-xl m-4 sm:left-70 md:left-85 lg:left-150 max-sm:left-40 ">
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
