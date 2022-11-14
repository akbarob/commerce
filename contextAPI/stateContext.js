import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;
  const incQty = () => {
    console.log("increase");
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const CheckProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice((prevState) => prevState + product.price * quantity);
    setTotalQuantity((prevState) => prevState + quantity);

    if (CheckProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);

    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setCartItems(newCartItems);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    toast.success(` ${product.name} removed from  cart`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  const ToggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    if (value === "inc") {
      const newCartItems = cartItems.map((item) =>
        item._id === id
          ? { ...item, quantity: foundProduct.quantity + 1 }
          : item
      );

      setCartItems([...newCartItems]);

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantity((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const newCartItems = cartItems.map((item) =>
          item._id === id
            ? { ...item, quantity: foundProduct.quantity - 1 }
            : item
        );

        setCartItems([...newCartItems]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantity((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantity,
        setTotalQuantity,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        ToggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
