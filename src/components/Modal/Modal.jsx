import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "../../App.css";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [number, setNumber] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption && number) {
      setIsModalOpen(false);
      setIsThankYouModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsThankYouModalOpen(false);
  };

  return (
    <div id="modal" className="flex items-center justify-center text-black">
      <button
        onClick={() => setIsModalOpen(true)}
        className=" text-white  rounded-full"
      >
        Back this Project
      </button>

      {isModalOpen && (
        <div className="fixed min-h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
          {/* <div className="bg-white rounded-lg p-8 md:w-6/12 max-h-[80h] overflow-y-auto"> */}
          <div className="bg-white rounded-lg p-6 md:w-6/12 max-h-[95vh] overflow-y-auto">
            <div className="flex flex-col justify-left">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-center">
                  Back this Project
                </h2>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-black text-2xl"
                >
                  <MdOutlineCancel />
                </button>
              </div>
              <p className="text-left text-gray-500 mt-4">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
            </div>
            {/* Option modal reward */}
            {/* First column */}
            <div className="border border-gray-200 text-left mt-6 mb-4 rounded-md p-4 hover:border hover:border-teal-500">
              <label className="mb-2 space-x-4 ">
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-teal-500"
                />
                <span
                  id="option1"
                  className="text-left hover:text-teal-500 cursor-pointer"
                >
                  Pledge with no reward
                </span>
                <p className="text-gray-500 mt-4 pl-4">
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </label>

              {selectedOption === "option1" && (
                <input
                  type="number"
                  value={number}
                  onChange={handleNumberChange}
                  className="border p-2 rounded-md ml-8"
                  placeholder="Enter a number"
                />
              )}
            </div>
            {/* Second column */}
            <div className="border border-gray-200 text-left mt-6 mb-4 rounded-md hover:border hover:border-teal-500 focus:border-teal-500">
              <div className="p-4">
                <label className="mb-2 space-x-4 ">
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-teal-500"
                  />
                  <span
                    id="option2"
                    className="text-left hover:text-teal-500 cursor-pointer"
                  >
                    Bamboo Standard
                  </span>
                  <span className="text-teal-500 md:inline-block flex flex-col px-4">
                    Pledge $25 or more
                  </span>
                  <span className="md:inline-block hidden pl-56">101</span>
                  <span className="md:inline-block hidden text-gray-300 text-sm">
                    left
                  </span>
                  <p className="text-gray-500 mt-4 pl-4">
                    You get an ergonomic stand made of natural bamboo.
                    You&apos;ve helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                  </p>
                </label>
                <span className="inline-block md:hidden pl-8 mt-4">101</span>
                <span className="inline-block md:hidden text-gray-300 text-sm pl-2">
                  left
                </span>
              </div>
              <div>
                {selectedOption === "option2" && (
                  <div className="">
                    <div className="w-full border-b-2 mt-6 mb-6 "></div>
                    <div className="flex items-center p-4 md:flex-row flex-col justify-between">
                      <label
                        htmlFor="number"
                        className="text-gray-500 md:mr-60"
                      >
                        Enter your pledge
                      </label>
                      <div className="flex mt-4 space-x-8">
                        <input
                          type="number"
                          value={number}
                          onChange={handleNumberChange}
                          className="outline-none border border-gray-300 focus:border-teal-500 p-2 text-center rounded-full w-20"
                          placeholder="$"
                        />
                        <div className="">
                          <button
                            onClick={handleSubmit}
                            className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700 cursor-pointer"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Third column */}
            <div className="border border-gray-200 text-left mt-6 mb-4 rounded-md hover:border hover:border-teal-500">
              <div className="p-4">
                <label className="mb-2 space-x-4 ">
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-teal-500"
                  />
                  <span
                    id="option3"
                    className="text-left hover:text-teal-500 cursor-pointer"
                  >
                    Black Edition Stand
                  </span>
                  <span className="text-teal-500 md:inline-block flex flex-col px-4">
                    Pledge $75 or more
                  </span>
                  <span className="md:inline-block hidden pl-52">64</span>
                  <span className="md:inline-block hidden text-gray-300 text-sm">
                    left
                  </span>
                  <p className="text-gray-500 mt-4 pl-4">
                    You get a Black Special Edition computer stand and a
                    personal thank you. You&apos;ll be added to our Backer
                    member list. Shipping is included.
                  </p>
                </label>
                <span className="inline-block md:hidden pl-8 mt-4">64</span>
                <span className="inline-block md:hidden text-gray-300 text-sm pl-2">
                  left
                </span>
              </div>
              <div>
                {selectedOption === "option3" && (
                  <div className="">
                    <div className="w-full border-b-2 mt-6 mb-6 "></div>
                    <div className="flex items-center p-4 md:flex-row flex-col justify-between">
                      <label
                        htmlFor="number"
                        className="text-gray-500 md:mr-60"
                      >
                        Enter your pledge
                      </label>
                      <div className="flex mt-4 space-x-8">
                        <input
                          type="number"
                          value={number}
                          onChange={handleNumberChange}
                          className="outline-none border border-gray-300 focus:border-teal-500 p-2 text-center rounded-full w-20"
                          placeholder="$"
                        />
                        <div className="">
                          <button
                            onClick={handleSubmit}
                            className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700 cursor-pointer"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Fourth column */}
            <div className="border border-gray-200 text-left mt-6 mb-4 rounded-md hover:border hover:border-teal-500">
              <div className="p-4">
                <label className="mb-2 space-x-4 ">
                  <input
                    type="radio"
                    value="option4"
                    checked={selectedOption === "option4"}
                    onChange={handleOptionChange}
                    className="form-radio h-4 w-4 text-teal-500"
                  />
                  <span
                    id="option4"
                    className="text-left hover:text-teal-500 text-gray-300 cursor-pointer"
                  >
                    Mahogany Special Edition
                  </span>
                  <span className="text-teal-100 md:inline-block flex flex-col px-4">
                    Pledge $200 or more
                  </span>
                  <span className="md:inline-block hidden pl-40 text-gray-400">
                    0
                  </span>
                  <span className="md:inline-block hidden text-gray-300 text-sm">
                    left
                  </span>
                  <p className="text-gray-300 mt-4 pl-4">
                    You get two Special Edition Mahogany stands, a Backer
                    T-Shirt, and a personal thank you. You&apos;ll be added to
                    our Backer member list. Shipping is included.
                  </p>
                </label>
                <span className="inline-block md:hidden pl-8 mt-4">0</span>
                <span className="inline-block md:hidden text-gray-300 text-sm pl-2">
                  left
                </span>
              </div>
              <div>
                {selectedOption === "option4" && (
                  <div className="">
                    <div className="w-full border-b-2 mt-6 mb-6 "></div>
                    <div className="flex items-center p-4 md:flex-row flex-col justify-between">
                      <label
                        htmlFor="number"
                        className="text-gray-300 md:mr-60"
                      >
                        Enter your pledge
                      </label>
                      <div className="flex mt-4 space-x-8">
                        <input
                          type="number"
                          value={number}
                          onChange={handleNumberChange}
                          className="outline-none border border-gray-300 focus:border-teal-500 p-2 text-center rounded-full w-20"
                          placeholder="$"
                        />
                        <div className="">
                          <button
                            onClick={handleSubmit}
                            className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700 cursor-pointer"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isThankYouModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg p-8 md:w-1/3 relative">
            <div className="flex flex-col justify-self-center items-center text-center text-teal-500 text-7xl mb-6">
              <IoCheckmarkDoneCircle />
            </div>
            <h2 className="text-xl font-bold text-center mb-4">
              Thank You for your Support!
            </h2>
            <p className="text-center text-gray-400">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button
              onClick={closeModal}
              className="text-white border bg-teal-500 rounded-full px-4 py-2 mt-8 hover:bg-teal-700"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
