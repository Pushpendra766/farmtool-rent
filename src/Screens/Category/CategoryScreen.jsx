import React, { useEffect } from "react";
import { useParams } from "react-router";

import Div from "./Div";
import { data } from "../../data";

const CategoryScreen = () => {
  const params = useParams();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center font-semibold text-dark-green md:pt-20 mobile:pt-28 md:text-2xl mobile:text-[29px]">
        Best of{" "}
        {params.name == "smallTools"
          ? "Hand Held Tools"
          : params.name == "largeTools"
          ? "Large Tools"
          : "Tractor Attachments"}
      </h1>
      <p className="text-center md:text-lg mobile:text-[22px] mb-1 text-orange">
        {data.filter((e) => e.type === params.name).length} Items
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
        {data
          .filter((e) => e.type === params.name)
          .map((e) => {
            return <Div data={e} />;
          })}
      </div>
    </div>
  );
};

export default CategoryScreen;
