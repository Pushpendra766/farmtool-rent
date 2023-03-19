import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const Div = () => {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (location.pathname.includes("Category")) {
      ref.current.classList.add("w-10/12");
      ref.current.classList.add("mx-auto");
      ref.current.classList.add("my-5");
      ref.current.classList.remove("w-2/12");
    }
  }, [location]);

  return (
    <div
      ref={ref}
      className="items-center flex flex-col self-center w-11/12 my-2 rounded-md border-1 pb-3
       border-lightest-grey md:mx-2 px-2 cursor-pointer transition-all hover:scale-105 shrink-0 mobile:mx-auto"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8xB9u3Fg0HvPxY23zCzu0P5dL_g-DUtxeA&usqp=CAU"
        alt=""
        className="mobile:w-full md:w-10/12"
      />
      <div className="flex flex-col items-center">
        <h3 className="md:text-xl mobile:text-[28px]">Tractor</h3>
        <p className="md:text-sm mobile:text-lg text-dark-green">
          Rs. 499 <span className="line-through text-orange">899</span>
        </p>
        <p className="mobile:text-base md:text-sm text-center px-2">
          A tractor is a vehicle that's used on a farm or work site, often to
          pull a trailer or other equipment...
        </p>
      </div>
    </div>
  );
};

export default Div;
