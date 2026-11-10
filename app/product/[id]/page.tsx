import { Suspense } from "react";
import AddToCart from "@/components/AddToCart";
import Link from "next/link";

export const instant = false;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Product({ params }: Props) {
  "use cache";
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="bg-neutral-50/80 rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-100 flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
          {product.image && (
            <img
              src={product.image}
              alt={product.title || "Product image"}
              className="max-h-[380px] w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div>
            {product.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 rounded-full mb-3">
                {product.category}
              </span>
            )}

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-snug">
              {product.title}
            </h1>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-neutral-900 tracking-tight">
                {product.price}$
              </span>
            </div>

            {product.rating && (
              <div className="flex items-center gap-2 mt-3 text-sm text-neutral-500">
                <div className="flex items-center text-amber-500">
                  <svg
                    className="w-4 h-4 fill-current mr-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-neutral-800">
                    {product.rating.rate}
                  </span>
                </div>
                <span className="text-neutral-300">•</span>
                <span>{product.rating.count} reviews</span>
              </div>
            )}

            <div className="border-t border-neutral-100 my-6" />

            <div className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Description
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-neutral-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Free standard shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-neutral-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>30-day return policy</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
