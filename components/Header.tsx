"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import ClearAllItems from "./ClearAllItems";

export default function Header() {
  const { cartItems, setCartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0,
  );

  return (
    <header className="border-b border-neutral-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-lg text-neutral-900 tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-xs font-bold shadow-xs">
              S
            </span>
            <span>My Shop</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-medium text-neutral-600">
            <span>
              Total:{" "}
              <strong className="text-neutral-900 font-semibold">
                {totalPrice.toFixed(2)}$
              </strong>
            </span>
            <Link
              href="/checkout"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-3.5 py-1.5 rounded-lg transition-colors"
            >
              Checkout ({cartItems.length})
            </Link>
          </div>
        </div>

        <div className="py-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-semibold uppercase tracking-wider text-neutral-500">
              My Cart ({cartItems.length})
            </h2>

            {cartItems.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                {cartItems.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-neutral-100/80 border border-neutral-200/60 rounded-lg px-2.5 py-1 text-neutral-700"
                  >
                    <span className="truncate max-w-[120px] sm:max-w-[160px] font-medium">
                      {item.title}
                    </span>
                    <span className="text-neutral-400">—</span>
                    <span className="font-semibold text-neutral-900">
                      {item.price}$
                    </span>
                    <span className="text-neutral-500 font-mono">
                      (x{item.quantity})
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-3.5 h-3.5 cursor-pointer text-neutral-400 hover:text-red-500 transition-colors ml-0.5"
                      onClick={() => {
                        if (item.quantity > 1) {
                          setCartItems(
                            cartItems.map((cartItem: any) =>
                              cartItem.id === item.id
                                ? {
                                    ...cartItem,
                                    quantity: cartItem.quantity - 1,
                                  }
                                : cartItem,
                            ),
                          );
                        } else {
                          setCartItems(
                            cartItems.filter(
                              (cartItem: any) => cartItem.id !== item.id,
                            ),
                          );
                        }
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            )}

            {cartItems.length === 0 && (
              <span className="text-neutral-400 italic">Cart is empty</span>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <ClearAllItems />
            <Link href="/checkout" className="flex">
              <button className="cursor-pointer text-neutral-700 hover:text-neutral-900 underline underline-offset-2">
                Checkout
              </button>
            </Link>
            <div className="font-semibold text-neutral-900 pl-2 border-l border-neutral-200">
              Total: {totalPrice.toFixed(2)}$
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
