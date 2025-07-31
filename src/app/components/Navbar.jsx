"use client";

import Link from "next/link";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
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
        {
          name: "MacBook Air",
          image:
            "/apple/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg",
          url: "/macbook/air",
        },
        {
          name: "MacBook Pro",
          image:
            "/apple/apple-macbook-pro-14-m1-pro-chip-mkgt3hn-a-500x500-500x500.webp",
          url: "/macbook/pro",
        },
        {
          name: "M1 / M2 Chip",
          image: "/apple/mbp-spacegray-select-202206.jpg",
          url: "/macbook/m1-m2",
        },
      ],
    },
    {
      image: "/icons/order.png",
      name: "Product",
      subcategories: {
        laptops: [
          { name: "All Laptops", url: "/products" },
          { name: "Business Laptops", url: "/products/business-laptops" },
          { name: "Gaming Laptops", url: "/products/gaming-laptops" },
          { name: "Student Laptops", url: "/products/student-laptops" },
          { name: "Touchscreen Laptops", url: "/products/touchscreen-laptops" },
          { name: "2-in-1 Convertible", url: "/products/2-in-1-convertible" },
        ],
        desktops: [
          { name: "Gaming Desktops", url: "/products/gaming-desktops" },
          { name: "Office Desktops", url: "/products/office-desktops" },
          { name: "All-in-One", url: "/products/all-in-one" },
        ],
      },
    },
    {
      image: "/icons/office-building.png",
      name: "Company",
      subcategories: [
        { name: "Apple", url: "/company/apple" },
        { name: "HP", url: "/company/hp" },
        { name: "Dell", url: "/company/dell" },
        { name: "Lenovo", url: "/company/lenovo" },
        { name: "Acer", url: "/company/acer" },
        { name: "Asus", url: "/company/asus" },
      ],
    },
    {
      image: "/icons/convenience-store.png",
      name: "Store",
      subcategories: [
        { name: "Our Stores", url: "/stores" },
        { name: "Store Locator", url: "/stores/locator" },
        { name: "Online Store", url: "/stores/online" },
        { name: "Store Offers", url: "/stores/offers" },
        { name: "Store Events", url: "/stores/events" },
        { name: "Store Policies", url: "/stores/policies" },
        { name: "Store Hours", url: "/stores/hours" },
        { name: "Store FAQs", url: "/stores/faqs" },
      ],
    },
    {
      image: "/icons/more.png",
      name: "More",
      subcategories: [
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
        { name: "Blogs", url: "/blogs" },
        { name: "Our Happy Customers", url: "/customers" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Customer Support", url: "/support" },
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
    <header className="fixed text-black w-full z-50">
      {/* ✅ Top Bar */}
      {showTopBar && (
        <div className="bg-[#00CAFF] text-white shadow-md transition-all duration-300">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-4 gap-4">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none placeholder-white border-b border-gray-300"
              />
            </div>
            <Link
              href="/"
              className="flex items-center uppercase gap-2 text-2xl md:text-3xl font-bold"
            >
              LapBazar
            </Link>
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
        <div className="container mx-auto flex items-center justify-between p-2 px-4 md:px-16">
          <div className="flex gap-4 overflow-x-auto md:overflow-visible no-scrollbar whitespace-nowrap">
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
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="hidden md:flex hover:underline flex-shrink-0 px-2 py-1 items-center gap-1"
            >
              Refurbished Laptops <FaPlus />
            </button>
            <Link
              href="/contact"
              className="hover:underline flex-shrink-0 px-2 py-1"
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden ml-2 text-xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <aside className="relative bg-white w-72 max-w-full h-full overflow-y-auto shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-lg font-bold">
              LapBazar
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="p-4 space-y-4">
            {categories.map((cat) => (
              <li key={cat.name}>
                <button
                  onClick={() =>
                    activeCategory?.name === cat.name
                      ? setActiveCategory(null)
                      : setActiveCategory(cat)
                  }
                  className="w-full flex items-center gap-3 text-left text-lg font-medium hover:text-[#00CAFF]"
                >
                  <img src={cat.image} alt="" className="w-6 h-6" />
                  {cat.name}
                </button>
                {activeCategory?.name === cat.name && (
                  <div className="mt-2 pl-10 space-y-2 text-sm text-gray-700">
                    {cat.name === "Product"
                      ? [
                          ...cat.subcategories.laptops,
                          ...cat.subcategories.desktops,
                        ].map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.url || "#"}
                            className="block hover:underline"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))
                      : cat.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.url || "#"}
                            className="block hover:underline"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* ✅ Desktop Mega Menu */}
      {isSidebarOpen && (
        <div className="hidden md:block fixed inset-0 z-50">
          <div
            className="absolute inset-0"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="absolute top-[112px] left-0 flex w-full h-[calc(100vh-60px)]">
            <aside className="bg-white w-64 p-6 overflow-y-auto shadow-lg h-full">
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat.name}
                    onMouseEnter={() => setActiveCategory(cat)}
                    className="cursor-pointer text-black hover:text-[#00CAFF]"
                  >
                    <div className="flex gap-3 items-center">
                      <img className="w-[35px]" src={cat.image} alt="" />
                      <p>{cat.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
            {activeCategory && (
              <div className="flex-1 text-black bg-gray-200 p-8 overflow-y-auto shadow-lg h-full">
                <h4 className="text-xl font-bold mb-4">
                  {activeCategory.name}
                </h4>
                {activeCategory.name === "Macbook" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeCategory.subcategories.map((sub) => (
                      <Link
                        href={sub.url || "#"}
                        key={sub.name}
                        className="bg-white p-4 shadow rounded block hover:shadow-md"
                        onClick={() => {
                          setIsSidebarOpen(false);
                          setActiveCategory(null);
                        }}
                      >
                        <img src={sub.image} alt={sub.name} className="mb-2" />
                        <h5 className="font-semibold mb-1">{sub.name}</h5>
                        <p className="text-sm text-gray-600">
                          Click to explore details.
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : activeCategory.name === "Product" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold mb-3">Laptops</h5>
                      <ul className="space-y-2">
                        {activeCategory.subcategories.laptops.map((sub) => (
                          <Link
                            href={sub.url}
                            key={sub.name}
                            className="hover:underline block"
                            onClick={() => {
                              setIsSidebarOpen(false);
                              setActiveCategory(null);
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Desktops</h5>
                      <ul className="space-y-2">
                        {activeCategory.subcategories.desktops.map((sub) => (
                          <Link
                            href={sub.url}
                            key={sub.name}
                            className="hover:underline block"
                            onClick={() => {
                              setIsSidebarOpen(false);
                              setActiveCategory(null);
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {activeCategory.subcategories.map((sub) => (
                      <Link
                        href={sub.url || "#"}
                        key={sub.name}
                        className="hover:underline block"
                        onClick={() => {
                          setIsSidebarOpen(false);
                          setActiveCategory(null);
                        }}
                      >
                        {sub.name}
                      </Link>
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
