import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const Div = ({ data }) => {
  const location = useLocation();
  const ref = useRef();
  const history = useNavigate();

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
      onClick={(e) => {
        history(`/product/${data.name}`);
      }}
      className="items-center flex flex-col self-center w-11/12 my-2 rounded-md border-1 pb-3
       border-lightest-grey md:mx-2 px-2 cursor-pointer transition-all hover:scale-105 shrink-0 mobile:mx-auto"
    >
      <img
        src={data?.url}
        alt=""
        className="object-cover object-center h-60 rounded-md mt-2"
      />
      <div className="flex flex-col items-center">
        <h3 className="md:text-xl mobile:text-[28px]">{data?.name}</h3>
        <p className="md:text-sm mobile:text-lg text-dark-green">
          Rs. {data?.price}{" "}
          <span className="line-through text-orange">{data?.price * 1.25}</span>
        </p>
        <p className="mobile:text-base md:text-sm text-center px-2">
          {data?.description.slice(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Div;
