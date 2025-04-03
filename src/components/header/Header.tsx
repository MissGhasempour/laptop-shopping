"use client";
import Image from "next/image";
import img_2 from "../../images/laptop-3.jpg";
import img_1 from "../../images/lenovo-sensational-spring-sale-2025-w1.jpg";
import img_3 from "./laptop-1.jpg";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import React, { useState } from "react";
import { GoDot } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
export default function Header() {
  // const images = ["./laptop-3.jpg", "./laptop-2.jpg", "./laptop-1.jpg"];

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
  const img1 = <Image src={img_1} alt="laptop-img" width={1300} height={100} />;
  const img2 = <Image src={img_2} alt="laptop-img" width={1300} height={100} />;
  const img3 = <Image src={img_3} alt="laptop-img" width={1300} height={100} />;

  return (
    <div className="relative">
      {<div>{showPic1 ? img1 : showPic2 ? img2 : showPic3 ? img3 : img1}</div>}

      <div className="controls">
        <button className="absolute left-0 top-20 bg-stone-100 rounded p-1">
          Previous
        </button>
        <FaCaretLeft
          onClick={prevSlide}
          className="absolute left-20 top-20 bg-stone-100 rounded p-1 text-3xl"
        />
        <button className="absolute right-0 top-20 bg-stone-100 rounded p-1">
          Next
        </button>
        <FaCaretRight
          onClick={nextSlide}
          className="absolute right-13 top-20 bg-stone-100 rounded p-1 text-3xl"
        />
      </div>
      <div className="relative left-100 w-20 bg-stone-300 px-3 rounded-xl m-4">
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
