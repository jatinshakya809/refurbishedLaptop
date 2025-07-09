import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";
import PaymentFooter from "./PaymentFooter";

export default function Footer() {
  return (
    <footer className="text-black border-t border-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {/* Left: Logo & text */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full">
              🌐
            </span>
            <h2 className="text-xl font-bold">LapBazar</h2>
          </div>
          <p className="mb-4">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div className="flex gap-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaGithub />
            <FaYoutube />
          </div>
        </div>

        {/* Right: Columns */}
        {[
          {
            title: "Solutions",
            links: [
              "Marketing",
              "Analytics",
              "Automation",
              "Commerce",
              "Insights",
            ],
          },
          {
            title: "Support",
            links: ["Submit ticket", "Documentation", "Guides"],
          },
          { title: "Company", links: ["About", "Blog", "Jobs", "Press"] },
          {
            title: "Legal",
            links: ["Terms of service", "Privacy policy", "License"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h3 className="text-lg font-semibold mb-2">{col.title}</h3>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-600 mt-8">
        &copy; 2025 LapBazar, Inc. All rights reserved.
      </div>
      <PaymentFooter />
    </footer>
  );
}
