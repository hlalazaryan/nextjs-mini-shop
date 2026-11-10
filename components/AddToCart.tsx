"use client";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AddToCart({ product }: { product: any }) {
  const { cartItems, setCartItems } = useCart();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast]);

  const handleAdd = () => {
    const existingItem = cartItems.find((item: any) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={() => {
            handleAdd();
            setShowToast(true);
          }}
          className="flex-1 flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] text-white text-sm font-medium py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-200 shadow-xs"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Add to cart
        </button>

        <Link href="/checkout" className="flex">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 active:scale-[0.98] text-neutral-800 text-sm font-medium py-3.5 px-6 rounded-xl border border-neutral-200 hover:border-neutral-300 cursor-pointer transition-all duration-200">
            Checkout
            <svg
              className="w-4 h-4 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </Link>
      </div>

      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 bg-neutral-900/95 backdrop-blur-md text-white px-5 py-4 rounded-2xl shadow-2xl border border-neutral-800/80 animate-[toast-slide-in_0.3s_cubic-bezier(0.16,1,0.3,1)] max-w-sm"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex flex-col min-w-0 pr-1">
            <span className="text-sm font-medium text-white leading-tight">
              Added to cart!
            </span>
            {product?.title && (
              <span className="text-xs text-neutral-400 truncate max-w-[200px] mt-0.5">
                {product.title}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
