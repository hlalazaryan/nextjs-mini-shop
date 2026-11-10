"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { key: "All", label: "All" },
  { key: "men's clothing", label: "Men's Clothing" },
  { key: "women's clothing", label: "Women's Clothing" },
  { key: "electronics", label: "Electronics" },
  { key: "jewelery", label: "Jewelry" },
];

export default function ProductList({ products }: { products: any[] }) {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product: any) => {
    const matchesCategory = category === "All" || product.category === category;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters Section */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 shadow-xs hover:border-neutral-300 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all duration-150"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = category === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 px-4 bg-neutral-50/50 rounded-2xl border border-dashed border-neutral-200">
          <p className="text-neutral-500 text-sm">
            No products found matching your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product: any) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Link
                href={`/product/${product.id}`}
                className="flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full p-8 bg-neutral-50/70 flex items-center justify-center overflow-hidden border-b border-neutral-100">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  )}
                  {product.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-white/90 backdrop-blur-xs rounded-full shadow-xs border border-neutral-200/60">
                      {product.category}
                    </span>
                  )}
                </div>

                {/* Info Container */}
                <div className="flex flex-col flex-1 p-5 justify-between">
                  <div>
                    <h2 className="font-medium text-neutral-900 text-sm line-clamp-2 leading-snug group-hover:text-neutral-600 transition-colors">
                      {product.title}
                    </h2>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-base font-semibold text-neutral-900 tracking-tight">
                      {product.price}$
                    </span>
                    <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors flex items-center gap-1">
                      View
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
