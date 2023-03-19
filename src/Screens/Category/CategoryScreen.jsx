import React from "react";
import { useParams } from "react-router";

import Category from "../../Components/Category/Category";

const CategoryScreen = () => {
  const params = useParams();
  return (
    <div className="w-full my-5">
      <h1 className="text-center lg:text-2xl max-[820px]:text-xl font-semibold text-dark-green mt-1">
        Best of {params.category}
      </h1>
      <p className="text-center text-base mb-1 text-orange">103 Items</p>
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
