import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 ${
        isSticky
          ? "sticky top-0 left-0 right-0 bottom-0 border-b bg-white duration-300 shadow-md"
          : "bg-transparent"
      }`}>
      <nav className={`py-4 lg:px-14 px-4`}>
        <div className="flex items-center justify-between text-base gap-8">
          <a
            className="text-2xl font-semibold flex items-center space-x-3"
            href="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItem.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-lg text-gray-800 hover:text-gray-500">
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button className="text-2xl" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">
              Login
            </a>
            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              sign up
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden fixed top-0 right-0 left-0 mt-16 py-4 bg-brandPrimary z-50`}>
          <ul className="flex flex-col items-center space-y-4">
            {navItem.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-white hover:text-brandPrimary">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
