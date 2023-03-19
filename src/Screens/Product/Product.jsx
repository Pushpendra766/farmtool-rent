import React from "react";

const Product = () => {
  const products = [
    {
      title: "Spartan Thunder Football - Size: 5  (Pack of 1)",
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
      description: "",
      rating: "4.5",
    },
  ];
  return (
    <div className="flex flex-row mx-20 gap-10 pt-10">
      {products.map((product) => {
        return (
          <>
            <div className="flex flex-col">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-4">
                  {product.images.map((image) => {
                    return <img src={image} width={40} />;
                  })}
                </div>
                <div>
                  <img src={product.images[0]} />
                </div>
              </div>
              <div>buttons</div>
            </div>
            <div className="border-2">
              <p className="text-xl font-semibold">{product.title}</p>
              <p>{product.offer_price}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
