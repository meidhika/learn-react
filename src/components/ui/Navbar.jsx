import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

function Navbar({ brand }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listMenuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blogs" },
  ];
  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow backdrop-blur border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className={`text-xl font-bold transition-colors ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {brand}
        </div>
        <nav className="space-x-8 hidden md:flex">
          {listMenuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <LoginButton scrolled={scrolled}>Login</LoginButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
