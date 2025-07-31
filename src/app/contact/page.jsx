import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#00CAFF]  text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our team is ready to answer your questions about refurbished laptops
            and help you find the perfect device.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-indigo-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Our Location
              </h3>
              <p className="text-gray-600">
                123 Tech Park Drive
                <br />
                San Francisco, CA 94107
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Phone
              </h3>
              <p className="text-gray-600">
                Sales: (800) 555-0199
                <br />
                Support: (800) 555-0123
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Email
              </h3>
              <p className="text-gray-600">
                sales@refurbtech.com
                <br />
                support@refurbtech.com
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Hours
              </h3>
              <p className="text-gray-600">
                Mon-Fri: 9am - 6pm EST
                <br />
                Sat: 10am - 4pm EST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Send Us a Message
          </h2>

          <div className="flex flex-col text-black lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00CAFF] hover:bg-[#4f8a98] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="h-full">
                  <img
                    src="/Banner/1064096_102050-OM6HOF-898.jpg"
                    alt="Map showing our downtown San Francisco location with tech companies nearby"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Visit Our Showroom
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experience our refurbished laptops firsthand at our San
                      Francisco showroom. Our team will guide you through our
                      inventory and help you find the perfect device.
                    </p>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      <span>123 Tech Park Drive, San Francisco, CA 94107</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="w-5 h-5 mr-2" />
                      <span>Open Mon-Fri 9am-6pm, Sat 10am-4pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Question 1 */}
              <div className="border-b border-gray-200">
                <button className="w-full flex justify-between items-center p-6 hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-800">
                    What is your warranty policy?
                  </h3>
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    All our refurbished laptops come with a minimum 90-day
                    warranty, with many premium models offering 1-year coverage.
                    Our warranty covers all hardware components and includes
                    free technical support.
                  </p>
                </div>
              </div>

              {/* Question 2 */}
              <div className="border-b border-gray-200">
                <button className="w-full flex justify-between items-center p-6 hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-800">
                    How do you test your refurbished laptops?
                  </h3>
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Each device undergoes our rigorous 200-point inspection
                    process including hardware diagnostics, stress testing,
                    cosmetic evaluation, and software verification. We replace
                    all worn components and thoroughly clean each device.
                  </p>
                </div>
              </div>

              {/* Question 3 */}
              <div className="border-b border-gray-200">
                <button className="w-full flex justify-between items-center p-6 hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-800">
                    What payment methods do you accept?
                  </h3>
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    We accept all major credit cards (Visa, Mastercard, American
                    Express, Discover), PayPal, Apple Pay, Google Pay, and
                    financing options through Affirm. Business customers can
                    request net-30 terms.
                  </p>
                </div>
              </div>

              {/* Question 4 */}
              <div className="border-b border-gray-200">
                <button className="w-full flex justify-between items-center p-6 hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-800">
                    Do you buy used laptops?
                  </h3>
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Yes! We offer competitive buyback prices for laptops in good
                    condition. Fill out our trade-in form with your device
                    details and we'll provide a quote. We accept both individual
                    and bulk corporate trade-ins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00CAFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our customer support team is available to answer any questions about
            our refurbished laptops.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-indigo-800 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Call Us Now
            </button>
            <button className="border-2 border-white text-white hover:bg-[#80dcf3] font-semibold py-3 px-8 rounded-lg transition duration-300">
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
