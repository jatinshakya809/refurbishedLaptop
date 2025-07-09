"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "What is a refurbished laptop?",
      answer:
        "A refurbished laptop is a pre-owned device that has been tested, repaired, cleaned, and certified to work like new — often with a warranty included.",
    },
    {
      question: "Do refurbished laptops come with a warranty?",
      answer:
        "Yes! All our refurbished laptops come with a minimum 6-month warranty for your peace of mind.",
    },
    {
      question: "Can I return or exchange my laptop?",
      answer:
        "Absolutely. We offer a hassle-free return policy within 14 days if you’re not satisfied with your purchase.",
    },
    {
      question: "Are refurbished laptops reliable for daily use?",
      answer:
        "Yes, they go through rigorous testing and quality checks to ensure they perform just like new laptops for daily tasks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-black font-medium hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-gray-600" />
              ) : (
                <FaPlus className="text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-4 bg-[#00CAFF] text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
