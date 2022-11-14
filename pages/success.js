import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../contextAPI/stateContext";
import { Fireworks } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems("");
    setTotalPrice(0);
    setTotalQuantity(0);
    Fireworks();
  }, []);
  return (
    <div className="bg-white  flex flex-col items-center justify-center w-full text-white h-screen -mt-10">
      <div className="success bg-gray-400 rounded-xl w-[300px] md:w-[700px]  flex flex-col items-center justify-center py-16 px-6 text-center">
        <p className="text-green-500 mb-8">
          <BsBagCheckFill size={40} />
        </p>
        <h2 className="font-bold text-2xl capitalize mb-2">
          Thank You for Your Purchase!
        </h2>
        <p className="">Check your email inbox for the receipt</p>
        <p className="mt-2">
          if you have any questions, please email
          <a href="mailto:badak07@live.com">badak07@live.com</a>
        </p>
        <Link href="/">
          <button className="mt-6 py-3 px-4 bg-rose-600 text-white w-full rounded-xl uppercase hover:scale-110 transition-all ease-in-out ">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
