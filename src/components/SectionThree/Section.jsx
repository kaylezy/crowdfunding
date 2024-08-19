import React from "react";

function Section() {
  return (
    <>
      <div className="md:w-[700px] mt-8 flex flex-col justify-between items-center p-10 bg-white border border-gray-200 rounded-md">
        <div>
          <h2 className="font-bold text-2xl pb-8">About this project</h2>
          <p className="text-gray-600 pb-8 leading-7">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="text-gray-600 pb-8 leading-7">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-md p-6">
          <div className="md:flex justify-between items-center ">
            <h2 className="font-bold">Bamboo Stand</h2>
            <span className="text-teal-500">Pledge $25 or more</span>
          </div>
          <div className="pt-4">
            <p className="text-gray-600">
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you&apos;ll be
              added to a special Backer member list.
            </p>
          </div>

          <div className="md:flex justify-between mt-6">
            <span className="flex items-center text-2xl font-bold">
              101 <span className="text-gray-500 text-sm pl-2">left</span>
            </span>
            <button className="rounded-full text-white p-4 font-bold px-6 cursor-pointer bg-teal-500 hover:bg-teal-700 md:-mt-0 mt-6">
              Select Reward
            </button>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md p-6 mt-6">
          <div className="md:flex justify-between items-center ">
            <h2 className="font-bold">Black Edition Stand</h2>
            <span className="text-teal-500">Pledge $75 or more</span>
          </div>
          <div className="pt-4">
            <p className="text-gray-600">
              You get a Black Special Edition computer stand and a personal
              thank you. You&apos;ll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>

          <div className="md:flex justify-between mt-6">
            <span className="flex items-center text-2xl font-bold">
              64 <span className="text-gray-500 text-sm pl-2">left</span>
            </span>
            <button className="rounded-full text-white p-4 font-bold px-6 cursor-pointer bg-teal-500 hover:bg-teal-700 md:-mt-0 mt-6">
              Select Reward
            </button>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-md p-6 mt-6 z-20">
          <div className="md:flex justify-center items-center md:space-x-[220px]">
            <h2 className="font-bold text-gray-300">
              Mahogany Special Edition
            </h2>
            <span className="text-teal-100">Pledge $200 or more</span>
          </div>
          <div className="pt-4">
            <p className="text-gray-300">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You&apos;ll be added to our Backer member
              list. Shipping is included.
            </p>
          </div>

          <div className="md:flex md:space-x-[380px] mt-6">
            <span className="flex items-center text-2xl font-bold text-gray-300">
              0 <span className="text-gray-300 text-sm pl-2">left</span>
            </span>
            <button className="rounded-full text-white p-4 font-bold px-6 cursor-pointer bg-gray-300 hover:bg-teal-700 md:-mt-0 mt-6">
              Out of Stock
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
