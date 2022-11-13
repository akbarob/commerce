import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../contextAPI/stateContext";
import Cart from "./Cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="flex justify-between items-center px-6 py-4 border-2">
      <p>
        <Link href="/">Commerce Store</Link>
      </p>
      <button className="relative" onClick={() => setShowCart(true)}>
        <AiOutlineShopping size={40} />
        <span className="absolute -top-2 -right-3 w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center">
          0
        </span>
      </button>
      {console.log(showCart)}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
