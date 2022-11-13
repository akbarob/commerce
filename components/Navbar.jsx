import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-2">
      <p>
        <Link href="/">Commerce Store</Link>
      </p>
      <button className="relative">
        <AiOutlineShopping size={40} />
        <span className="absolute -top-2 -right-3 w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center">
          0
        </span>
      </button>
    </div>
  );
};

export default Navbar;
