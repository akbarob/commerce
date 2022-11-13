import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
// import toast from "react-hot-toast";

import { urlFor } from "../lib/client";
// import getStripe from "../lib/Getstripe";
// import getPayStack from "../lib/GetPaystack";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/router";
import { useStateContext } from "../contextAPI/stateContext";

const Cart = () => {
  const router = useRouter();
  const cartRef = useRef();
  const {
    setShowCart,
    Showcart,
    cartItems,
    totalPrice,
    totalQuantity,
    qty,
    incQty,
    decQty,
    onAdd,
    ToggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email: "akbarbadmus07@gmail.com",
    amount: totalPrice * 100,
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: cartItems.map((item) => {
            return {
              cart: `${item.name}, ${item.quantity}`,
            };
          }),
        },
      ],
    },

    publicKey,
    text: "Pay With PayStack",
    onSuccess: () => {
      router.push("/success");
      toast.success("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => toast.error("Wait! You need this oil, don't go!!!!"),
  };

  const handleCheckout = async () => {
    const stripe = await stripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    console.log("RESPONSEs", response);

    const data = await response.json();
    console.log("body_data:", data.id);

    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div
      className=" fixed inset-x-0 inset-y-0  bg-black/70 h-screen z-50 flex justify-end"
      ref={cartRef}
      onClick={() => setShowCart(false)}
    >
      <div
        className=" w-full lg:w-1/3 bg-white h-screen borderr-solid border-2 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          {" "}
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantity} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center m-10 bg-rose-100">
            <AiOutlineShopping size={150} />
            <h3 className="font-semibold text-xl">Your bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => {
                  setShowCart(false);
                }}
                className="btn w-full"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className=" overflow-y-auto h-[70vh]">
          {cartItems.length >= 1 &&
            cartItems.map((item, i) => (
              <div
                className="flex justify-between p-6 border-b-2 border-dashed border-black"
                key={item._id}
              >
                <img
                  src={urlFor(item?.image[0])}
                  alt={item?.name}
                  className="rounded-md bg-gray-300  selected-image w-[120px]"
                />
                <div className="flex flex-col justify-between w-2/3">
                  <div className="flex items-center justify-between ">
                    <h5 className="font-semibold mr-4">{item?.name}</h5>
                    <h4 className="font-semibold mt-2 md:mt-0 text-rose-500">
                      <span className="decoration-double line-through font-extrabold">
                        N
                      </span>{" "}
                      {""}
                      {item?.price}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-10">
                    <p className="flex  gap-2 items-center border-2 rounded-md justify-between ">
                      <span
                        className="text-[#f02d34] border-r-[1px] border-solid cursor-pointer py-1.5 px-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          ToggleCartItemQuantity(item._id, "dec");
                        }}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className=" border-solid text-xl py-1.5 px-3">
                        {item.quantity}
                      </span>

                      <span
                        className="border-l-[1px] text-[ rgb(49, 168, 49)] cursor-pointer py-1.5 px-3"
                        onClick={(e) => {
                          e.stopPropagation();

                          ToggleCartItemQuantity(item._id, "inc");
                        }}
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>
                    <button
                      className="text-red-500"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(item);
                      }}
                    >
                      <TiDeleteOutline size={30} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems?.length >= 1 && (
          <div className="">
            <div className="total px-12 flex justify-between">
              <h3>Subtotal: </h3>
              <h3>
                {" "}
                <span className="decoration-double line-through font-extrabold">
                  N
                </span>{" "}
                {totalPrice}
              </h3>
            </div>
            <div className="px-10 mt-2">
              <button
                type="button"
                className="py-3 px-4 bg-[#f02d34] text-white w-full rounded-xl uppercase hover:scale-110 transition-all ease-in-out"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
              <PaystackButton
                {...componentProps}
                className="mt-6 py-3 px-4 bg-blue-600 text-white w-full rounded-xl uppercase hover:scale-110 transition-all ease-in-out "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
