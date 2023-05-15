import React from "react";
import banner from '../../../public/banner.svg';

const Banner = () => {
  return (
    <div className="my-16 flex justify-between">
      <div className="w-1/2 space-y-10 flex items-center">
        <div>
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-blue-700">Find</span> Your Job
          <br />
          Fit <span className="text-orange-600 text-7xl">Your Career</span>
        </h1>
        <p className="text-gray-500 leading-7">
          Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
          condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta
          sit amet. Suspendisse et sapien varius, pellentesque dui non.
        </p>
        <div className="flex items-center mt-10 w-full">
          <input
            className="focus:border-2 w-3/5 h-10 py-2 px-4 rounded-full border focus:border-gray-800 focus:outline-none"
            type="text"
            name=""
            placeholder="Search Your Job"
            id=""
          />
          <button className="bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 ml-3 w-32 h-10 py-2 px-4 rounded-full text-lg font-semibold border-none">
            Search
          </button>
        </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
