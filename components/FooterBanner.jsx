import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className="relative py-[100px] px-[40px] bg-[#f02d34] rounded-2xl h-[400px] w-full mt-32 text-white">
      <div className="flex justify-between">
        <div className="">
          <p> {discount}</p>
          <h3 className="ml-6 font-extrabold text-4xl md:text-7xl text-white">
            {largeText1}
          </h3>
          <h3 className="ml-6 font-extrabold text-4xl md:text-7xl text-white">
            {largeText2}
          </h3>
          <p className="ml-4">{saleTime}</p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p className=" text-lg">{smallText}</p>
          <h3 className=" font-extrabold text-4xl md:text-6xl text-right">
            {midText}
          </h3>
          <p className=" text-lg">{desc}</p>
          <Link href={`/product/${product}`}>
            <button className="bg-white text-[#f02d34] rounded-[15px] py-[10px] px-[16px]  mt-[40px] text-lg font-semibold cursor-pointer z-50">
              {buttonText}
            </button>
          </Link>
        </div>
        <img
          alt="footer-img"
          src={urlFor(image)}
          className="absolute -top-[21%] md:-top-[25%]  left-[25%] w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
