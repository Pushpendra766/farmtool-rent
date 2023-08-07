import React, { useEffect, useState } from "react";

import Category from "../Category/Category";
import { data } from "../../data";
import db from "../../firebase";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const CategorySection = ({ name, product, url }) => {
  const userRef = React.useRef(null);
  // const [data, setnewData] = useState([]);
  const history = useNavigate();
  // useEffect(() => {
  //   async function ofetch() {
  //     db.ref("tools/").on("child_added", function (snapshot) {
  //       const messages = snapshot.val();
  //       // console.log(messages)
  //       setnewData((data) => [...data, messages]);
  //     });
  //   }
  //   ofetch();
  // }, []);
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
      <div
        style={
          product === "smallTools"
            ? { width: "90vw" }
            : product === "largeTools"
            ? { width: "32vw" }
            : { width: "39vw" }
        }
        className="flex sm:flex-row whitespace-nowrap mobile:flex-row mobile:items-center mobile:justify-between md:justify-center md:flex-col items-center p-1 rounded-md mx-2 md:px-2 justify-center md:mx-0 mobile:mx-2"
      >
        <img
          className="w-full rounded md:block mobile:hidden"
          src={url}
          alt=""
        />
        <p className="md:text-xl mobile:text-2xl text-center">Best of {name}</p>
        <button
          className="bg-dark-green border-yellow border-1 mobile:text-xl md:text-base transition-all text-yellow outline-0 py-1 mobile:mr-2 md:mr-0"
          onClick={() => {
            history(`/Category/${product}`);
          }}
        >
          View All
        </button>
      </div>
      <div
        className="flex overflow-x-scroll items-center scrollbar-hide"
        ref={userRef}
      >
        {product === "smallTools"
          ? data
              .filter((e) => e.type === product)
              .map((e, id) => {
                return <Category key={id} mobile={true} data={e} />;
              })
          : product === "largeTools"
          ? data
              .filter((e) => e.type === product)
              .map((e, id) => {
                return <Category key={id} mobile={true} data={e} />;
              })
          : data
              .filter((e) => e.type === product)
              .map((e, id) => {
                return <Category key={id} mobile={true} data={e} />;
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
