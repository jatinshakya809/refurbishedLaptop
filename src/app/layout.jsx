import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export const metadata = {
  title: "My Laptop Store",
  description: "Buy laptops online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-50 lg:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
