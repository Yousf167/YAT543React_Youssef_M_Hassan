import { createContext, useState } from "react";
import { getCart } from "../Services/services";

// 1️⃣ Create the context object
export const CartContext = createContext(null);

// 2️⃣ Create a provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState(getCart());

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
