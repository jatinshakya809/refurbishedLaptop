"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Show 1 at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  const reviews = [
    {
      name: "Alice",
      text: "Amazing laptop, works like new!",
      stars: 5,
      image: "testimonial/T-1.jpg",
    },
    {
      name: "Bob",
      text: "Great support and fast shipping!",
      stars: 5,
      image: "testimonial/T-1.jpg",
    },
    {
      name: "Charlie",
      text: "Saved a lot compared to new.",
      stars: 5,
      image: "testimonial/T-1.jpg",
    },
  ];

  return (
    <section className="py-12 text-black px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.name} className="px-4">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col items-center">
              {/* ✅ Profile image */}
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* ⭐ Stars */}
              <div className="flex justify-center mb-2 text-yellow-500 text-xl">
                {"⭐".repeat(review.stars)}
              </div>

              {/* ✅ Text */}
              <p className="italic mb-4">“{review.text}”</p>
              <p className="font-semibold">- {review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
