import React from "react";

import Category from "../Category/Category";
import { smallTools } from "../../data";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const CategorySection = () => {
  const userRef = React.useRef(null);
  const { innerWidth: deviceWidth } = window;
  const history = useNavigate();
  return (
    <div className="flex relative align-middle m-2 md:py-1 mobile:pt-1 mobile:pb-2.5 md:pt-0 md:pb-0 rounded-xl border-lightest-grey border-1 shadow-xl my-6 sm:flex-col mobile:flex-col md:flex-row">
      <div
        className="absolute md:left-72 mobile:left-5 bg-lightest-grey p-2 rounded-full top-2/4 z-10 cursor-pointer md:opacity-70 mobile:opacity-50 transition-all hover:opacity-100"
        onClick={() => {
          userRef.current.scrollBy(-500, 0);
        }}
      >
        <AiOutlineArrowLeft size={25} color="white" />
      </div>
      <div className="w-full flex sm:flex-row mobile:flex-row mobile:items-center mobile:justify-between md:justify-center md:flex-col items-center p-1 rounded-md mx-2 md:px-2 justify-center md:mx-0 mobile:mx-2">
        <img
          className="w-full rounded md:block mobile:hidden"
          src="https://5.imimg.com/data5/UU/MP/LH/SELLER-7374463/agricultural-hand-tools-250x250.jpg"
          alt=""
        />
        <p className="md:text-xl mobile:text-2xl text-center">
          Best of Hand Held Tools
        </p>
        <button
          className="bg-dark-green border-yellow border-1 mobile:text-xl md:text-base transition-all text-yellow outline-0 py-1 mobile:mr-2 md:mr-0"
          onClick={() => {
            history("/Category/smallTools");
          }}
        >
          View All
        </button>
      </div>
      <div
        className="flex overflow-x-scroll items-center scrollbar-hide"
        ref={userRef}
      >
        {smallTools.map((e) => {
          return <Category mobile={true} data={e} />;
        })}
      </div>
      <div
        className="absolute right-5 bg-lightest-grey p-2 rounded-full top-2/4 z-10 cursor-pointer opacity-70 transition-all hover:opacity-100"
        onClick={() => {
          userRef.current.scrollBy(500, 0);
        }}
      >
        <AiOutlineArrowRight size={25} color="white" />
      </div>
    </div>
  );
};

export default CategorySection;
