import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams, useNavigate } from "react-router";
import { data } from "../../data";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const history  = useNavigate('');
 
  const handlerent =()=>{
    history("/profile/rentnow")
    }
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // const product = {
  //   title: "Spartan Thunder Football - Size: 5  (Pack of 1)",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis facilisis mi sed fermentum. Pellentesque aliquam nibh felis, eget luctus quam vulputate a. Aliquam ex eros, sodales sed egestas a, rutrum id est. Cras et ex id metus dapibus tincidunt non vel augue. Curabitur eget egestas dolor, eu blandit sapien.",
  //   images: [
  //     "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/g/e/h/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8ntdtrajj.jpeg?q=70",
  //     "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/t/m/6/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggjftyjwpx4ky.jpeg?q=70",
  //     "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/o/e/w/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8u5cuvggv.jpeg?q=70",
  //     "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/o/r/j/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8zzhqzqwx.jpeg?q=70",
  //     "https://rukminim1.flixcart.com/image/416/416/xif0q/ball/a/x/q/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8v47nzdx2.jpeg?q=70",
  //   ],
  //   original_price: "₹450",
  //   offer_percentage: "36",
  //   offer_price: "₹286",
  //   rating: "4.5",
  // };

  useEffect(() => {
    const e = data.filter((e) => e.name === params.name);
    setProduct(e[0]);
  }, [params.name]);

  return (
    <div className="md:w-9/12 mx-auto py-20">
      <div className="md:flex md:border rounded-md p-6">
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-row gap-6">
            <img
              src={product?.url}
              className="w-full h-full object-cover object-center mr-4 rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-xl font-semibold">{product?.name}</p>
          <span className="flex bg-[#fcf403] w-min px-2 rounded-md">
            {Math.floor(Math.random() * (5 - 2 + 1)) + 2}{" "}
            <AiFillStar className="mt-1" />
          </span>
          <p className="text-base">{product?.description}</p>
          <p className="text-lg font-bold">
            Rs. {product?.price}{" "}
            <span className="line-through text-gray-dark">
              {product?.price * 1.25}
            </span>
          </p>
          <div className="flex gap-6 text-base whitespace-nowrap md:text-lg">
            <button onClick={handlerent} className="py-2 px-4">Rent</button>
            <button>Add to Rentlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
