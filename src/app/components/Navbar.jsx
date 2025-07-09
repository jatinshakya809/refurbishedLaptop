"use client";

import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      image: "/icons/apple.png",
      name: "Macbook",
      subcategories: [
        "MacBook Air",
        "MacBook Pro",
        "M1 / M2 Chip",
        "Retina Display",
        "Long Battery Life",
      ],
    },
    {
      image: "/icons/order.png",
      name: "Product",
      myUrl: "/products",
      subcategories: [
        "Business Laptops",
        "Gaming Laptops",
        "Student Laptops",
        "Touchscreen Laptops",
        "2-in-1 Convertible",
      ],
    },
    {
      image: "/icons/office-building.png",
      name: "Company",
      subcategories: ["Apple", "HP", "Dell", "Lenovo", "Acer", "Asus"],
    },
    {
      image: "/icons/convenience-store.png",
      name: "Store",
      subcategories: [
        "Best Sellers",
        "New Arrivals",
        "Refurbished Deals",
        "Under ₹30,000",
        "Premium Series",
      ],
    },
    {
      image: "/icons/more.png",
      name: "More",
      subcategories: [
        "Accessories",
        "Laptop Bags",
        "Cooling Pads",
        "Extended Warranty",
        "Customer Support",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* ✅ Top Bar */}
      {showTopBar && (
        <div className="bg-[#00CAFF] text-white shadow-md transition-all duration-300">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
            {/* Search */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none placeholder-white border-b border-gray-800 md:border-none"
              />
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              LapBazar
            </Link>

            {/* Cart & Account */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/cart"
                className="relative flex items-center border border-gray-400 px-3 py-1 rounded-full text-sm"
              >
                <FaShoppingCart className="mr-2" />
                <span>₹22,500</span>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                  2
                </span>
              </Link>
              <div className="flex items-center gap-1 cursor-pointer">
                <FaUser />
                <span>Account</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Sticky Menu */}
      <div className="sticky text-black top-0 z-50 bg-[#F8FAFC] border-t border-gray-300 shadow-md">
        <div className="container mx-auto flex gap-4 md:gap-6 p-2 overflow-x-auto no-scrollbar justify-start md:justify-center whitespace-nowrap">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:underline flex-shrink-0 px-2 py-1"
            >
              {link.name}
            </Link>
          ))}

          {/* ✅ "All Laptops" with toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="hover:underline flex-shrink-0 px-2 py-1"
            >
              Refurbished Laptops
            </button>{" "}
            <FaPlus />
          </div>

          {[{ name: "Contact Us", href: "/conatct" }].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:underline flex-shrink-0 px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Sidebar with Mega Menu */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay still covers the whole screen */}
          <div
            className="absolute inset-0 "
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar container: starts below navbar height */}
          <div className="absolute top-[112px] left-0 flex w-full h-[calc(100vh-60px)]">
            {/* Sidebar */}
            <aside className="bg-white w-64 p-6 overflow-y-auto shadow-lg h-full">
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat.name}
                    onMouseEnter={() => setActiveCategory(cat)}
                    className="cursor-pointer text-black hover:text-[#00CAFF]"
                  >
                    <a href={cat.myUrl}>
                      {" "}
                      <div className="flex gap-3 text-center items-center">
                        <img className="w-[35px]" src={cat.image} alt="" />
                        <p> {cat.name}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Mega Panel */}
            {activeCategory && (
              <div className="flex-1 text-black bg-gray-200 p-8 overflow-y-auto shadow-lg h-full">
                <h4 className="text-xl font-bold mb-4">
                  {activeCategory.name}
                </h4>

                {activeCategory.name === "Macbook" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeCategory.subcategories.map((sub) => (
                      <div key={sub} className="bg-white p-4 shadow rounded">
                        <h5 className="font-semibold mb-2">{sub}</h5>
                        <p className="text-sm text-gray-600">
                          Brief description or details here.
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeCategory.name === "Product" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2">Laptops</h5>
                      <ul className="space-y-2">
                        {activeCategory.subcategories
                          .filter((sub) => sub.includes("Laptop"))
                          .map((sub) => (
                            <li
                              key={sub}
                              className="hover:underline cursor-pointer"
                            >
                              {sub}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Desktops</h5>
                      <ul className="space-y-2">
                        {/* Add your desktop subcategories here — adjust as needed */}
                        <li className="hover:underline cursor-pointer">
                          Gaming Desktop
                        </li>
                        <li className="hover:underline cursor-pointer">
                          Office Desktop
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Default layout for other categories */}
                {activeCategory.name !== "Macbook" &&
                  activeCategory.name !== "Product" && (
                    <ul className="space-y-2">
                      {activeCategory.subcategories.map((sub) => (
                        <li
                          key={sub}
                          className="hover:underline cursor-pointer"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
