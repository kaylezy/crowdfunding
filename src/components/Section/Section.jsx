import React, { useState } from "react";
import SectionThree from "../SectionThree/Section";
import Modal from "../Modal/Modal";

export default function Section() {
  // State to track whether the item is bookmarked
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Function to toggle the bookmark state
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="align-center  flex flex-col justify-center items-center -mt-20 z-10 p-4">
        <div id="logo" className="relative top-8 sm:-top-10 z-10">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#000" cx="28" cy="28" r="28" />
              <g fillRule="nonzero">
                <path
                  d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                  fill="#444"
                />
                <path
                  d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                  fill="#FFF"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="text-center border border-gray-200 bg-white p-8 sm:px-24 rounded-md sm:relative sm:-top-16">
          <h1 className="font-bold text-2xl mt-4">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-gray-500 mt-4">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="flex items-center justify-between mt-10 cursor-pointer">
            <button className="border rounded-full text-white p-4 font-bold px-6 cursor-pointer bg-teal-700">
              <Modal />
            </button>

            <div className="flex cursor-pointer">
              <button
                onClick={toggleBookmark}
                className={`px-2 rounded-full font-semibold text-gray-500 transition-colors duration-300 
        ${
          isBookmarked
            ? "md:bg-gray-200 md:hover:bg-gray-200 text-teal-700"
            : "md:bg-gray-200 md:hover:bg-gray-300  "
        }`}
              >
                {isBookmarked ? (
                  <span className="flex items-center ">
                    <svg
                      width="56"
                      height="56"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" relative flex items-center right-4"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle fill="#0f766e" cx="28" cy="28" r="28" />
                        <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
                      </g>
                    </svg>
                    <span className="hidden md:block text-teal-700 font-bold hover:text-teal-700">
                      Bookmarked
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center ">
                    <svg
                      width="56"
                      height="56"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" relative flex items-center right-4 "
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle fill="#4b5563" cx="28" cy="28" r="28" />
                        <path fill="#9ca3af" d="M23 19v18l5-5.058L33 37V19z" />
                      </g>
                    </svg>
                    <span className="hidden md:block text-gray-500 font-bold hover:text-gray-500">
                      Bookmark
                    </span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Section two */}
        <div className="flex flex-col md:-mt-8 mt-8 bg-white border border-gray-200 rounded-md p-8 md:px-20 px-20">
          <div className="md:flex md:flex-row flex flex-col items-center md:space-x-12 p-6">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-2xl">$89,914</h2>
              <p className="text-gray-300">of $100,000 backed</p>
            </div>{" "}
            <span className="border border-gray-200 md:h-16 w-24 mb-6 mt-6 md:mt-auto md:mb-auto md:w-auto"></span>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-2xl">5,007</h2>
              <p className="text-gray-300">total backers</p>
            </div>{" "}
            <span className="border border-gray-200 md:h-16 w-24 mb-6 mt-6 md:mt-auto md:mb-auto md:w-auto"></span>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-2xl">56</h2>
              <p className="text-gray-300">days left</p>
            </div>
          </div>
          <div id="progress">
            <div className="flex items-center">
              <div className="grow bg-gray-300 rounded-full h-2.5">
                <div
                  className="bg-teal-700 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Section three */}
        <SectionThree />
      </div>
    </div>
  );
}
