import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../contextAPI/stateContext";
import Cart from "./Cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="flex justify-between items-center mb-2 px-5  z-50 border-2 border-solid border-slate-300 h-[52px] backdrop-blur-sm w-full">
      <p>
        <Link href="/" className="font-bold text-xl">
          Commerce Store
        </Link>
      </p>
      <button className="relative" onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={40} />
        <span className="absolute -top-1 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          {totalQuantity}
        </span>
      </button>
      {console.log(showCart)}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
