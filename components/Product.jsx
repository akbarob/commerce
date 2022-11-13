import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  {
    console.log(name);
  }
  return (
    <div className="my-10">
      <Link href={`/Product/${slug.current}`}>
        <div className=" w-[150px] h-[150px] md:w-[250px] md:h-[250px] cursor-pointer hover:scale-110 transition-all ease-in-out ">
          <img
            src={urlFor(image && image[0])}
            className=" w-full bg-gray-300 rounded-lg "
          />
          <p className="capitalize">{name}</p>
          <p>
            <span className="decoration-double line-through font-extrabold">
              N
            </span>
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
