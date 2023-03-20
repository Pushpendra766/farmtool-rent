import React from "react";
import { data } from "../../data";

const Cart = () => {
  return (
    <div className="w-10/12 m-auto mb-3 pt-5">
      <h1 className="pt-16 text-2xl font-bold text-dark-green">Cart</h1>
      <div className="flex py-2">
        <div className="border border-gray-light w-9/12 mx-2 h-[65vh] rounded-md overflow-scroll">
          {data.map((e) => {
            return <Card data={e} />;
          })}
        </div>
        <div className="border border-gray-light w-3/12 mx-2 h-[31vh] rounded-md px-2 py-1">
          <h1 className="text-xl font-semibold text-dark-green">Payment</h1>
          <div className="py-1">
            <p>Product Price : Rs. 00</p>
            <p>Tax (18%) : Rs. 00</p>
            <p>Delivery Price : Rs. 00</p>
            <div className="h-[1px] my-1.5 w-4/6 bg-gray-dark"></div>
            <p>Total Price : Rs. 00</p>
            <button className="transition-all my-2">Proceed for Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  const { name, url, price, description } = data;
  return (
    <div className="h-auto border border-[#f0f0f0] shadow-md flex mx-2 my-3 rounded-xl">
      <img
        src={url}
        alt=""
        className="object-cover object-center w-3/12 rounded-2xl p-2"
      />
      <div className="flex justify-center flex-col">
        <p className="text-xl pt-1">{name}</p>
        <p className="text-base text-[#555]">
          {description.slice(0, 100) + "..."}
        </p>
        <p className="text-dark-green">
          Rs. {price}{" "}
          <span className="text-orange line-through">{price * 1.25}</span>
        </p>
      </div>
      <div className="w-4/12 items-center justify-center flex">
        <button className="transition-all">- Remove</button>
      </div>
    </div>
  );
};

export default Cart;
