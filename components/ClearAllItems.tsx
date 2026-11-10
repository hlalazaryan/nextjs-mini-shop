"use client";
import { useCart } from "./CartContext";

export default function ClearAllItems() {
  const { setCartItems, cartItems } = useCart();
  return (
    <button
      className="cursor-pointer text-xs font-medium text-neutral-400 hover:text-red-600 transition-colors"
      onClick={() => {
        if (cartItems.length > 0) {
          const isConfirmed = window.confirm(
            "Are you sure you want to clear the cart?",
          );

          if (isConfirmed) {
            setCartItems([]);
          }
        }
      }}
    >
      Clear Cart
    </button>
  );
}
