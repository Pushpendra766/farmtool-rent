import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const Category = ({ mobile, data ,children}) => {
  const location = useLocation();
  const ref = useRef();
  const history = useNavigate('');

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
          ? { width: "47%", margin: " 0 0.35rem" }
          : {}
      }
      onClick={(e) => {
        history(`/product/${data.name}`);
      }}
      className="items-center flex flex-col self-center w-1/5 md:my-2 mobile:my-8 rounded-md border-1 
      py-2 border-lightest-grey md:mx-2 cursor-pointer transition-all hover:scale-105 shrink-0 mobile:mx-auto px-2"
    >
      <img
        src={data?.url}
        alt=""
        className="mobile:w-full object-cover object-center h-44 rounded-md"
      />
      <div className="flex flex-col items-center">
        <h3 className="md:text-xl mobile:text-[22px]">{data?.name}</h3>
        <p className="text-sm text-dark-green">
          Rs. {data?.price}{" "}
          <span className="line-through text-orange">{data?.price * 1.25}</span>
        </p>
        <p className="text-sm text-center px-2">
          {data?.description?.slice(0, 75) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Category;
