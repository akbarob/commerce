import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  console.log(heroBanner);
  return (
    <div className="bg-[#dcdcdc] py-[100px] px-[40px] relative rounded-[15px] w-full  uppercase">
      <p className="text-xl">{heroBanner.smallText} </p>
      <h3 className=" text-2xl font-bold">{heroBanner.midText} </h3>
      <h3 className="text-white text-8xl font-bold">
        {heroBanner.largeText1}{" "}
      </h3>

      <img
        src={urlFor(heroBanner.image)}
        alt="headphones"
        className="absolute top-0 left-[20%]  w-[250px] h-[250px] md:w-[450px] md:h-[450px]"
      />
      <div>
        <Link href={`/Product/${heroBanner.product}`}>
          <button
            type="button"
            className="rounded-[15px] py-[10px] px-[16px] bg-[#f02d34] text-white mt-[40px] text-lg font-semibold cursor-pointer z-50"
          >
            {heroBanner.buttonText}
          </button>
        </Link>
        <div className="absolute right-[10%] bottom-5  w-[300px] flex flex-col text-[#324d67] text-end">
          <h5 className="mb-[12px] font-bold text-lg flex self-end">
            Description
          </h5>
          <p className="text-[#5f5f5f] font-semibold "> {heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
