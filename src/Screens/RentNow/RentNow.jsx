import React, { useState } from "react";

const RentNow = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    address:"",
    email:"",
    phone:"",
    
  });
  return (
    <div className="pt-16">
      <div className="my-2">
        <h1 className="font-semibold text-2xl text-dark-green text-center">
         Provide your details
        </h1>
        <div className="bg-white border border-green w-1/4 m-auto rounded-xl p-2 mt-20 flex-col flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TooAFSc9BmItp4K8LDt5TXM3Znf1-4G2iw7Xmj_KcQ&usqp=CAU&ec=48600112"
            alt=""
            className="w-5/12 border border-green rounded-full -mt-20"
          />
         
          <input
            type="text"
            value={productDetails.name}
            onChange={(e) => {
              setProductDetails({ ...productDetails, name: e.target.value });
            }}
            placeholder="Enter your name"
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={productDetails.email}
            onChange={(e) => {
              setProductDetails({ ...productDetails, email: e.target.value });
            }}
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
          <input
            type="number"
            placeholder="Enter your number"
            value={productDetails.phone}
            onChange={(e) => {
              setProductDetails({ ...productDetails, phone: e.target.value });
            }}
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
          <input
            type="string"
            placeholder="Enter your address"
            value={productDetails.address}
            onChange={(e) => {
              setProductDetails({ ...productDetails, address: e.target.value });
            }}
            className="my-2 w-11/12 outline-none border border-gray-light rounded-md block px-2 py-0.5 m-auto"
          />
        
          <button className="transition-all m-auto">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default RentNow;
