"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Dynamically load Leaflet Map

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00CAFF] to-[#00a5cf] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Revolutionizing the refurbished laptop industry with quality,
            affordability, and sustainability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At RefurbTech, we're committed to providing high-quality
                refurbished laptops that perform like new while reducing
                electronic waste and saving you money.
              </p>
              <p className="text-gray-600 mb-4">
                We meticulously test and certify every device to meet rigorous
                standards, ensuring you get reliable technology at a fraction of
                the price.
              </p>
              <div className="mt-8">
                <button className="bg-[#00CAFF] hover:bg-[#00ccffc9] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Explore Our Products
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b54ebcba-4a77-4c3a-a905-fcfdfe7e3b7c.png"
                alt="Clean, modern office workspace with refurbished laptops on desks and technicians working"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 text-black bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                200-point inspection process on every device with minimum 90-day
                warranty
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Premium laptops at 40-70% off retail prices without compromising
                performance
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Reducing e-waste by giving devices a second life and recycling
                responsibly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 text-black bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Our Refurbishment Process
          </h2>
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute border-2-2 border-opacity-20 h-full border-gray-400 left-1/2"></div>

            {/* Steps */}
            <div className="flex flex-col md:grid grid-cols-9 mx-auto">
              {/* Step 1 */}
              <div className="flex flex-row-reverse md:contents">
                <div className="col-start-1 col-end-5 p-4 my-4 ml-auto">
                  <h3 className="text-xl font-semibold mb-1">1. Sourcing</h3>
                  <p className="text-gray-600">
                    Carefully select devices from corporate leases, trade-ins,
                    and overstock with full diagnostic history
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-6 w-6 bg-[#00CAFF] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-6 w-6 bg-[#00CAFF] rounded-full"></div>
                  </div>
                </div>
                <div className="col-start-6 col-end-10 p-4 my-4 mr-auto">
                  <h3 className="text-xl font-semibold mb-1">
                    2. Deep Cleaning
                  </h3>
                  <p className="text-gray-600">
                    Complete sterilization and exterior refurbishment to
                    like-new condition
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-row-reverse md:contents">
                <div className="col-start-1 col-end-5 p-4 my-4 ml-auto">
                  <h3 className="text-xl font-semibold mb-1">
                    3. Hardware Testing
                  </h3>
                  <p className="text-gray-600">
                    Component-level diagnostics with replacement of any failing
                    parts
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-6 w-6 bg-[#00CAFF] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-6 w-6 bg-[#00CAFF] rounded-full"></div>
                  </div>
                </div>
                <div className="col-start-6 col-end-10 p-4 my-4 mr-auto">
                  <h3 className="text-xl font-semibold mb-1">
                    4. Software Load
                  </h3>
                  <p className="text-gray-600">
                    Fresh OS installation with necessary drivers and optional
                    software bundles
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-row-reverse md:contents">
                <div className="col-start-1 col-end-5 p-4 my-4 ml-auto">
                  <h3 className="text-xl font-semibold mb-1">
                    5. Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    48-hour stress testing with 5-stage verification process
                    before packaging
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-6 w-6 bg-[#00CAFF] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 text-black bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af85690f-b98e-4d6d-b734-e87db519cbfa.png"
                alt="Founder and CEO John Smith, a tech industry veteran with 15 years experience"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Former head of engineering at a major tech firm with 15+ years
                  in hardware development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70975e67-a13e-468d-9ec4-5372ef040590.png"
                alt="Operations Director Sarah Johnson, overseeing quality control processes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 mb-3">Operations Director</p>
                <p className="text-gray-600">
                  Leads our refurbishment team with expertise in supply chain
                  and quality assurance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a3205c4-1def-4d0c-b64b-de507e3b3e34.png"
                alt="Customer Experience Manager Michael Chen, responsible for post-sale support"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-blue-600 mb-3">Customer Experience</p>
                <p className="text-gray-600">
                  Ensures every customer receives exceptional support and
                  service throughout their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#00CAFF] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Laptops Refurbished</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98.7%</div>
              <div className="text-xl">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25,000+</div>
              <div className="text-xl">Pounds of e-Waste Prevented</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2 Days</div>
              <div className="text-xl">Average Shipping Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Find Your Perfect Refurbished Laptop?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've discovered the value of
            premium refurbished technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#00CAFF] hover:bg-[#00ccffcf] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Shop Now
            </button>
            <button className="border-2 border-[#00CAFF] text-[#00CAFF] hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
