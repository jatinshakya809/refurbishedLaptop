"use client";

import Image from "next/image";

export default function CardsSlider() {
  const cards = [
    {
      title: "Macbook M1",
      subtitle: "Apple Intelligence",
      price: "From ₹119900.00",
      badge: null,
      bg: "bg-white",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg", // Replace with your image path
    },
    {
      title: "Save on Mac and iPad for college",
      subtitle: "LIMITED-TIME OFFER",
      price: "Choose AirPods or an eligible accessory.",
      badge: "🎓",
      bg: "bg-cyan-50",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg",
    },
    {
      title: "MacBook Air",
      subtitle: "Apple Intelligence",
      price: "From ₹99900.00",
      badge: null,
      bg: "bg-blue-50",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg",
    },
    {
      title: "MacBook Air",
      subtitle: "Apple Intelligence",
      price: "From ₹99900.00",
      badge: null,
      bg: "bg-orange-50",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg",
    },
    {
      title: "MacBook Air",
      subtitle: "Apple Intelligence",
      price: "From ₹99900.00",
      badge: null,
      bg: "bg-yellow-50",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg",
    },
    {
      title: "MacBook Air",
      subtitle: "Apple Intelligence",
      price: "From ₹99900.00",
      badge: null,
      bg: "bg-pink-50",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg",
    },
    {
      title: "MacBook Air",
      subtitle: "Apple Intelligence",
      price: "From ₹99900.00",
      badge: null,
      bg: "bg-green-50",
      textColor: "text-black",
      image: "/Laptops/Apple MacBook Air 2019.jpg",
    },
  ];

  return (
    <section className="w-full text-black py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        The latest.{" "}
        <span className="text-gray-600">
          Take a look at what's new right now.
        </span>
      </h2>
      <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[300px] md:w-[350px] rounded-xl p-6 ${card.bg} ${card.textColor} shadow-md`}
          >
            {card.badge && (
              <span className="inline-block mb-2 text-xs font-bold text-orange-600 uppercase">
                {card.subtitle}
              </span>
            )}
            {!card.badge && (
              <h4 className="text-lg mb-1 font-semibold">{card.title}</h4>
            )}
            {card.badge && (
              <h4 className="text-lg mb-1 font-semibold flex items-center gap-2">
                {card.subtitle} <span className="text-2xl">{card.badge}</span>
              </h4>
            )}
            {!card.badge && (
              <p className="text-sm text-gray-400 mb-1">{card.subtitle}</p>
            )}
            <p className="text-sm mb-4">{card.price}</p>
            <div className="relative w-full h-40">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
