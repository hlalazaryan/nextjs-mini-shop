"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function Checkout() {
  const { cartItems, setCartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      <nav className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Shop
        </Link>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 mb-8 gap-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
          Checkout ({cartItems.length} items)
        </h1>
        <span className="text-xs font-medium px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full w-fit">
          Secure Payment
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-xs">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-neutral-900">
              Customer Information
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Please enter your details to complete your order.
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setCartItems([]);
              alert("Checkout successful!");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-all duration-150"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-all duration-150"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Mail"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-all duration-150"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-all duration-150"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-4 px-6 rounded-xl bg-neutral-900 text-white font-medium text-sm tracking-wide shadow-xs hover:bg-neutral-800 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Complete Order</span>
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 mt-2">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Encrypted 256-bit SSL transaction</span>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5 bg-neutral-50/80 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 sticky top-8">
          <h2 className="text-base font-semibold text-neutral-900 mb-4 pb-3 border-b border-neutral-200/70">
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <div className="py-8 text-center text-neutral-500 text-sm">
              <p>Your cart is empty.</p>
              <Link
                href="/"
                className="mt-2 inline-block text-xs font-semibold text-neutral-900 underline underline-offset-4"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="divide-y divide-neutral-200/60 max-h-72 overflow-y-auto pr-1">
                {cartItems.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="py-3 flex items-center justify-between gap-3 text-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {item.image && (
                        <div className="w-12 h-12 bg-white rounded-lg p-1.5 border border-neutral-200/60 shrink-0 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain mix-blend-multiply"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-medium text-neutral-900 truncate text-xs">
                          {item.title}
                        </p>
                        <p className="text-neutral-500 text-xs mt-0.5">
                          Qty: {item.quantity} × {item.price}$
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-semibold text-neutral-900 text-xs">
                        {(item.price * item.quantity).toFixed(2)}$
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-200/80 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>{totalPrice.toFixed(2)}$</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-baseline pt-3 border-t border-neutral-200 text-sm font-semibold text-neutral-900">
                  <span>Total</span>
                  <span className="text-lg">{totalPrice.toFixed(2)}$</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
