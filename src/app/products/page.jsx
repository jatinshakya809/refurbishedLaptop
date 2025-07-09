"use client";

import { useState } from "react";
import refurbishedLaptops from "../data/refurbishedLaptops";

export default function ProductsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // ✅ Filters state
  const [filters, setFilters] = useState({
    companies: [],
    storages: [],
    processors: [],
    rams: [],
    screenSizes: [],
  });

  // ✅ Handle checkbox toggle
  const handleCheckboxChange = (filterName, value) => {
    setFilters((prev) => {
      const current = prev[filterName];
      if (current.includes(value)) {
        // Remove
        return { ...prev, [filterName]: current.filter((v) => v !== value) };
      } else {
        // Add
        return { ...prev, [filterName]: [...current, value] };
      }
    });
  };

  // ✅ Filter your products
  const filteredProducts = refurbishedLaptops.filter((product) => {
    const companyMatch =
      filters.companies.length === 0 ||
      filters.companies.includes(product.company);

    const storageMatch =
      filters.storages.length === 0 ||
      filters.storages.includes(product.storage);

    const processorMatch =
      filters.processors.length === 0 ||
      filters.processors.includes(product.processor);

    const ramMatch =
      filters.rams.length === 0 || filters.rams.includes(product.ram);

    const screenSizeMatch =
      filters.screenSizes.length === 0 ||
      filters.screenSizes.includes(product.screenSize);

    return (
      companyMatch &&
      storageMatch &&
      processorMatch &&
      ramMatch &&
      screenSizeMatch
    );
  });

  return (
    <div className="flex">
      {/* ✅ Sidebar filter */}
      {isFilterOpen && (
        <aside className="w-64 text-black bg-white border-r border-gray-200 p-6 shadow-lg h-screen sticky top-0 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* ✅ Company */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Company</h3>
            {["Dell", "Hp", "Lenovo"].map((company) => (
              <label key={company} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.companies.includes(company)}
                  onChange={() => handleCheckboxChange("companies", company)}
                  className="mr-2"
                />
                {company}
              </label>
            ))}
          </div>

          {/* ✅ Storage */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Storage</h3>
            {["256GB", "512GB", "1TB"].map((storage) => (
              <label key={storage} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.storages.includes(storage)}
                  onChange={() => handleCheckboxChange("storages", storage)}
                  className="mr-2"
                />
                {storage}
              </label>
            ))}
          </div>

          {/* ✅ Processor */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Processor</h3>
            {["i3", "i5", "i7", "M1", "M2"].map((processor) => (
              <label key={processor} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.processors.includes(processor)}
                  onChange={() => handleCheckboxChange("processors", processor)}
                  className="mr-2"
                />
                {processor}
              </label>
            ))}
          </div>

          {/* ✅ RAM */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">RAM</h3>
            {["4GB", "8GB", "16GB", "32GB"].map((ram) => (
              <label key={ram} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.rams.includes(ram)}
                  onChange={() => handleCheckboxChange("rams", ram)}
                  className="mr-2"
                />
                {ram}
              </label>
            ))}
          </div>

          {/* ✅ Screen Size */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Screen Size</h3>
            {['13"', '14"', '15.6"', '17"'].map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.screenSizes.includes(size)}
                  onChange={() => handleCheckboxChange("screenSizes", size)}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>

          <button
            onClick={() => setIsFilterOpen(false)}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded"
          >
            Close Filter
          </button>
        </aside>
      )}

      {/* ✅ Main content */}
      <div className="flex-1 text-black bg-gray-50 py-6">
        {/* Toggle button */}
        <div className="">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-4 py-2 bg-[#00CAFF] text-white rounded-tr-2xl rounded-br-2xl hover:bg-blue-700 transition"
          >
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* ✅ Display filtered products */}
        <Section title="Our Products" products={filteredProducts} />
      </div>
    </div>
  );
}

function Section({ title, products }) {
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">
        {title} ({products.length})
      </h1>
      {products.length === 0 ? (
        <p className="text-gray-600">No products match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition duration-300 group cursor-pointer">
      <div className="relative w-full pb-[66%] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h2 className="text-md md:text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h2>
        <p className="text-gray-600 font-medium mb-3">
          {product.price.toLocaleString()}
        </p>
        <a
          href={`/products/${product.id}`}
          className="inline-block px-3 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
