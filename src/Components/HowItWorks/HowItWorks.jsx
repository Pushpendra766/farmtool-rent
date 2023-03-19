import React from "react";
import Lottie from "lottie-react";
import browse from "./browse.json";
import rent from "./rent.json";
import returnItem from "./return.json";

const HowItWorks = () => {
  return (
    <div className="px-6 md:px-40 py-10">
      <h1 className="text-3xl font-bold text-center">How It Works</h1>
      <div className="md:grid md:grid-cols-3 pt-10 gap-20 text-center justify-items-center">
        <div className="flex flex-col justify-between">
          {/* <img src="images/browse.png" width={300} /> */}
          <Lottie animationData={browse} loop={true} />
          <div>
            <h2 className="text-xl font-semibold">
              1. Browse and Choose tools :
            </h2>
            <p className="text-lg">
              Browse our selection of farming tools, equipment, and machinery on
              our website or in-person and select the ones that you need for
              your farm.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="pt-20">
            <h2 className="text-xl font-semibold">2. Rent tools : </h2>
            <p className="text-lg">
              Reserve the tools you need online or by calling our customer
              service team. We offer flexible rental options, including daily,
              weekly, and monthly rates.
            </p>
          </div>
          <Lottie animationData={rent} loop={true} />
        </div>
        <div className="flex flex-col justify-between">
          {/* <img src="images/return.png" width={300} /> */}
          <Lottie animationData={returnItem} loop={true} />
          <div>
            <h2 className="text-xl font-semibold">3. Use and return :</h2>
            <p className="text-lg">
              Pick up the tools from our rental location or have them delivered
              to your farm. Use the tools as needed, and when you're finished,
              return them to our rental location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
