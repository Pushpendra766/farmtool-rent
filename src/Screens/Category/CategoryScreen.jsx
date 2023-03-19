import React from "react";
import { useParams } from "react-router";

import Category from "../../Components/Category/Category";

const CategoryScreen = () => {
  const params = useParams();
  return (
    <div>
      <h1 className="text-center font-semibold text-dark-green md:pt-20 mobile:pt-28 md:text-2xl mobile:text-[26px]">
        Best of {params.name}
      </h1>
      <p className="text-center md:text-lg mobile:text-[20px] mb-1 text-orange">103 Items</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default CategoryScreen;
