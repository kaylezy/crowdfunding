import React, { useState } from "react";
import ImageHeroDesktop from "../../assets/images/image-hero-desktop.jpg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src={ImageHeroDesktop}
        alt="hero"
        className="relative w-full bg-cover bg-center bg-no-repeat"
      />
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 flex md:justify-around justify-between items-center text-gray-100">
        <div className="text-2xl font-bold">CrowdFund</div>
        <div
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } space-y-2 md:space-y-0 md:space-x-6`}
        >
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#discover" className="hover:text-gray-300">
            Discover
          </a>
          <a href="#getstarted" className="hover:text-gray-300">
            Get Started
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none "
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
