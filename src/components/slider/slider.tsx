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
    <div className="relative">
      {
        <div>
          {showPic1 ? (
            <Image
              src={img_1}
              alt="laptop-img"
              width={1400}
              height={100}
              className="2xl:w-800"
            />
          ) : showPic2 ? (
            <Image
              src={img_2}
              alt="laptop-img"
              width={1400}
              height={100}
              className="2xl:w-800"
            />
          ) : showPic3 ? (
            <Image
              src={img_3}
              alt="laptop-img"
              width={1400}
              height={100}
              className="2xl:w-800"
            />
          ) : (
            <Image
              src={img_1}
              alt="laptop-img"
              width={1400}
              height={100}
              className="2xl:w-800"
            />
          )}
        </div>
      }

      <div className="controls relative">
        <FaCaretLeft
          onClick={prevSlide}
          className="absolute left-120 top-5 max-xl:left-50 2xl:left-350 bg-stone-100 text-stone-900 rounded p-1 ml-12 text-3xl max-sm:left-20"
        />

        <FaCaretRight
          onClick={nextSlide}
          className="absolute left-210 top-5 max-xl:left-160 2xl:left-460 bg-stone-100 max-sm:left-70 text-stone-900 rounded p-1 text-3xl mr-20"
        />
      </div>
      <div className="relative left-160 w-20 max-sm:left-40 max-xl:left-100 px-3 rounded-xl m-4 2xl:left-400">
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
