"use client";
import Testimonials from "./components/Testimonial";
import Faq from "./components/Faq";
import refurbishedLaptops from "./data/refurbishedLaptops";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CardsSlider from "./components/CardSlider";

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only run once
    threshold: 0.2, // 20% visible to trigger
  });

  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden ">
        {/* ✅ Background image */}
        <img
          src="/Banner/B-1.jpg" // replace with your path
          alt="Refurbished Laptops Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ Text & CTA */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Certified Refurbished Laptops
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Save up to 50% on top brands with warranty included.
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-[#00CAFF] text-white rounded hover:bg-[#67bed4]"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* {rating} */}
      <section ref={ref} className="py-12 bg-white">
        <div className="max-w-6xl border-b border-gray-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* PRODUCTS SOLD */}
          <div className="p-3">
            <div className="flex gap-2 items-center justify-center">
              {" "}
              <img className="w-[50px]" src="/icons/product-sold.png" alt="" />
              <h2 className="text-3xl text-[#00CAFF] font-bold">
                {inView && <CountUp end={1000} duration={2} separator="," />}+
              </h2>
            </div>
            <p className="mt-2 text-gray-700">PRODUCTS SOLD</p>
          </div>

          {/* PINCODES DELIVERED */}
          <div className="p-3">
            <div className="flex gap-2 items-center justify-center">
              <img className="w-[50px]" src="/icons/truck.png" alt="" />
              <h2 className="text-3xl text-[#00CAFF] font-bold">
                {inView && <CountUp end={19101} duration={2} separator="," />}+
              </h2>
            </div>
            <p className="mt-2 text-gray-700">PINCODES DELIVERED</p>
          </div>

          {/* CO2 REDUCED */}
          <div className="p-3">
            <div className="flex gap-2 items-center justify-center">
              <img
                className="w-[50px]"
                src="/icons/carbon-neutral.png"
                alt=""
              />
              <h2 className="text-2xl text-[#00CAFF] font-bold">
                {inView && (
                  <>
                    <CountUp end={523660} duration={3} separator="," /> Kg
                  </>
                )}
              </h2>
            </div>
            <p className="mt-2 text-gray-700">CO2 REDUCED</p>
          </div>

          {/* GOOGLE RATING */}
          <div className="p-3">
            <div className="flex items-center justify-center gap-2">
              <img className="w-[50px]" src="/icons/rate.png" alt="" />
              <h2 className="text-3xl text-[#00CAFF] font-bold">
                {inView && <CountUp end={4.4} duration={2} decimals={1} />} ★
              </h2>
            </div>
            <p className="mt-2 text-gray-700">GOOGLE RATING</p>
            <p className="text-sm text-gray-500">(Reviews)</p>
          </div>
        </div>
      </section>

      {/* ✅ Brand/Category Grid */}
      <section className="py-12 text-black px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Brand</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            { name: "HP", logo: "/Logos/hp.png" },
            { name: "Dell", logo: "/Logos/dell.png" },
            { name: "Apple", logo: "/Logos/apple.svg" },
            { name: "Lenovo", logo: "/Logos/lenovo.png" },
            { name: "Asus", logo: "/Logos/asus.png" },
            { name: "Acer", logo: "/Logos/acer.png" },
            { name: "Samsung", logo: "/Logos/samsung.svg" },
            { name: "MSI", logo: "/Logos/msibusiness.svg" },
          ].map((brand) => (
            <div
              key={brand.name}
              className="group  p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer"
            >
              {/* Placeholder for logos */}
              <div className="w-16 h-16 mb-4  flex items-center justify-center rounded-full bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-12 h-12 brightness-0 hover:brightness-100 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ How We Work */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#00CAFF]">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-gray-700">
            Our simple, transparent process ensures you get the best quality
            refurbished laptops, every time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "1. Sourcing",
                description:
                  "We carefully source pre-owned laptops from trusted suppliers and partners.",
                icon: "📦",
              },
              {
                title: "2. Testing",
                description:
                  "Every laptop undergoes strict diagnostics and multi-point quality checks.",
                icon: "🧪",
              },
              {
                title: "3. Refurbishment",
                description:
                  "Our experts replace faulty parts, upgrade where needed, and ensure top performance.",
                icon: "🔧",
              },
              {
                title: "4. Delivery",
                description:
                  "Your certified laptop is safely packed, comes with warranty, and is shipped to your doorstep.",
                icon: "🚚",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-white border rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Products */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {refurbishedLaptops.slice(0, 8).map((product) => (
            <div
              key={refurbishedLaptops.id}
              className="border rounded-lg p-6 flex flex-col text-center hover:shadow-xl transition"
            >
              {/* Product Image */}
              <div className="mb-4  w-full h-40 flex items-center justify-center rounded">
                <img
                  src={product.image}
                  className="hover:scale-110 transition-all ease-in "
                  alt=""
                />
              </div>

              {/* Product Name & Price */}
              <h3 className="font-semibold text-lg mb-2 text-black">
                {product.name}
              </h3>
              <p className="text-[#00CAFF] font-bold mb-4">{product.price}</p>

              {/* Buttons */}
              <div className="flex justify-center gap-2 mt-auto">
                <a
                  href={`/products/${product.id}`}
                  className="inline-block whitespace-nowrap bg-[#00CAFF] text-white text-sm px-4 py-2 rounded hover:bg-[#67bed4] transition"
                >
                  View Details
                </a>
                <button
                  type="button"
                  className="inline-block whitespace-nowrap border border-[#00CAFF] text-[#00CAFF] text-sm px-4 py-2 rounded hover:bg-[#00CAFF] hover:text-white transition"
                  onClick={() => console.log("Add to cart:", product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Benefits Row */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { title: "Warranty Included", icon: "✅" },
            { title: "Free Shipping", icon: "🚚" },
            { title: "Quality Checked", icon: "🔍" },
            { title: "24/7 Support", icon: "📞" },
          ].map((benefit) => (
            <div key={benefit.title} className="p-4">
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h4 className="font-semibold text-black">{benefit.title}</h4>
            </div>
          ))}
        </div>
      </section>
      <CardsSlider />
      <Faq />
      <div></div>
    </div>
  );
}
