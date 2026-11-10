import AddToCart from "@/components/AddToCart";
import Link from "next/link";
import { Suspense } from "react";
import ProductList from "@/components/ProductList";
import Checkout from "./checkout/page";

export default async function Home() {
  "use cache";
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  const products = await response.json();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-8 border-b border-neutral-100 pb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
          Store Catalog
        </h1>
        <p className="mt-2 text-sm text-neutral-500 max-w-xl">
          Explore our collection of essentials designed with minimalism and quality.
        </p>
      </div>

      <div>
        <ProductList products={products} />
      </div>
    </main>
  );
}
