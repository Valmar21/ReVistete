import { createContext, useState } from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });



  const addToCart = (product) => {

    const newCart = [
      ...cart,
      product
    ];

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );

  };



  const removeFromCart = (index) => {

    const newCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(newCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );

  };



  const clearCart = () => {

    setCart([]);

    localStorage.removeItem("cart");

  };



  const total = cart.reduce(
    (acc, product) =>
      acc + Number(product.precio),
    0
  );



  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}