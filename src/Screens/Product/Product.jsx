import React from "react";
import {AiFillStar} from "react-icons/ai";

const Product = () => {
  const product = {
    title: "Spartan Thunder Football - Size: 5  (Pack of 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis facilisis mi sed fermentum. Pellentesque aliquam nibh felis, eget luctus quam vulputate a. Aliquam ex eros, sodales sed egestas a, rutrum id est. Cras et ex id metus dapibus tincidunt non vel augue. Curabitur eget egestas dolor, eu blandit sapien.",
    images: [
      "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/g/e/h/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8ntdtrajj.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/t/m/6/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggjftyjwpx4ky.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/o/e/w/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8u5cuvggv.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/o/r/j/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8zzhqzqwx.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/a/x/q/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8v47nzdx2.jpeg?q=70",
    ],
    original_price: "₹450",
    offer_percentage: "36",
    offer_price: "₹286",
    rating: "4.5",
  };
  return (
    <div className="w-9/12 mx-auto py-20">
      <div className="flex flex-row border rounded-md p-6">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row gap-6">
            <img src={product.images[0]} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <p className="text-xl font-semibold">{product.title}</p>
          <span className="flex bg-[#fcf403] w-min px-2 rounded-md">{product.rating}{" "}<AiFillStar className="mt-1"/></span>
          <p className="text-base">{product.description}</p>
          <p className="text-lg font-bold">{product.offer_price}</p>
          <div className="flex gap-6 text-lg">
            <button className="py-2 px-4">Rent</button>
            <button>Add to Rentlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
