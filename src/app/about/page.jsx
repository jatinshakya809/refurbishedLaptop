"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Dynamically load Leaflet Map
const Map = dynamic(() => import("../components/LeafletMap.jsx"), {
  ssr: false,
});

export default function AboutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <main className="text-black">
      {/* ✅ HERO */}
      <section className="relative bg-gradient-to-r from-[#00CAFF] to-[#67BED4] py-28 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            About LapBazar
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Premium certified refurbished laptops — affordable, reliable, and
            sustainable.
          </p>
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

      {/* ✅ WHO WE ARE */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00CAFF]">
          Who We Are
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          At <span className="font-bold">LapBazar</span>, our mission is to make
          high-quality laptops accessible and affordable for everyone — while
          promoting sustainability and reducing e-waste.
        </p>
        <p className="text-lg md:text-xl text-gray-700">
          Every laptop undergoes rigorous testing, certification, and comes with
          warranty support. Whether you’re a student, professional, or business,
          you’ll find premium devices at unbeatable prices.
        </p>
      </section>

      {/* ✅ CONTACT DETAILS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#00CAFF]">
          Contact Details
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaEnvelope className="text-3xl mb-4 text-[#00CAFF]" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:support@lapbazar.com"
              className="text-blue-600 hover:underline"
            >
              support@lapbazar.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaPhone className="text-3xl mb-4 text-[#00CAFF]" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+1 234 567 8900</p>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-3xl mb-4 text-[#00CAFF]" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p>123 Refurb Ave, Tech City</p>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT FORM */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#00CAFF]">
          Get in Touch
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-[#00CAFF]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-[#00CAFF]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 border rounded w-full md:col-span-2 focus:ring-2 focus:ring-[#00CAFF]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00CAFF] text-white px-6 py-3 rounded hover:bg-[#67bed4] transition md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ MAP */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#00CAFF]">
          Our Location
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Map />
        </div>
      </section>
    </main>
  );
}
