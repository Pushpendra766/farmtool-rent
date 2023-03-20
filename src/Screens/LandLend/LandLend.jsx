import React, { useState } from "react";

const LandLend = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
  });
  return (
    <div className="pt-16">
      <div className="my-2">
        <h1 className="font-semibold text-2xl text-dark-green text-center">
          List your Land here..
        </h1>
        <div className="bg-white border border-green w-1/4 m-auto rounded-xl p-2 my-2 flex-col flex items-center">
          <input
            type="text"
            value={productDetails.name}
            onChange={(e) => {
              setProductDetails({ ...productDetails, name: e.target.value });
            }}
            placeholder="Enter the Land location"
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
          <input
            type="text"
            value={productDetails.description}
            onChange={(e) => {
              setProductDetails({
                ...productDetails,
                description: e.target.value,
              });
            }}
            placeholder="Enter the Your contact number"
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
          <input
            type="number"
            placeholder="Enter it's price"
            value={productDetails.price}
            onChange={(e) => {
              setProductDetails({ ...productDetails, price: e.target.value });
            }}
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
          <button className="transition-all m-auto">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LandLend;
