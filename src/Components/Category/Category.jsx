import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const Category = ({ mobile }) => {
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

  const { innerWidth } = window;

  return (
    <div
      ref={ref}
      style={
        mobile === true && innerWidth < 700
          ? { width: "31%", margin: " 0 0.35rem" }
          : {}
      }
      className="items-center flex flex-col self-center w-2/12 md:my-2 mobile:my-1 rounded-md border-1 py-2 border-lightest-grey md:mx-2 cursor-pointer transition-all hover:scale-105 shrink-0 mobile:mx-auto"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8xB9u3Fg0HvPxY23zCzu0P5dL_g-DUtxeA&usqp=CAU"
        alt=""
        className="mobile:w-full"
      />
      <div className="flex flex-col items-center">
        <h3 className="text-xl">Tractor</h3>
        <p className="text-sm text-dark-green">
          Rs. 499 <span className="line-through text-orange">899</span>
        </p>
        <p className="text-sm text-center px-2">
          {mobile === true && innerWidth < 700
            ? "A tractor is a vehicle that's used on a farm or work site, often to pull a trailer or other equipment.".slice(
                0,
                25
              ) + "..."
            : "A tractor is a vehicle that's used on a farm or work site, often to pull a trailer or other equipment.".slice(
                0,
                50
              ) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Category;
