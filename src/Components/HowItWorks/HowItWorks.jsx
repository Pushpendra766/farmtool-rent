import React from "react";
import Lottie from "lottie-react";
import browse from "./browse.json";
import rent from "./rent.json";
import returnItem from "./return.json";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const {t} = useTranslation();
  return (
    <div className="px-6 md:px-40 py-20">
      <h1 className="text-3xl font-bold text-center">{t("how it works")}</h1>
      <div className="md:grid md:grid-cols-3 pt-10 gap-20 text-center justify-items-center">
        <div className="flex flex-col justify-between">
          {/* <img src="images/browse.png" width={300} /> */}
          <Lottie animationData={browse} loop={true} />
          <div>
            <h2 className="text-xl font-semibold">
              {t("step1_title")}
            </h2>
            <p className="text-lg">
            {t("step1_subtitle")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="pt-20">
            <h2 className="text-xl font-semibold">{t("step2_title")}</h2>
            <p className="text-lg">
            {t("step2_subtitle")}
            </p>
          </div>
          <Lottie animationData={rent} loop={true} />
        </div>
        <div className="flex flex-col justify-between">
          {/* <img src="images/return.png" width={300} /> */}
          <Lottie animationData={returnItem} loop={true} />
          <div>
            <h2 className="text-xl font-semibold">{t("step3_title")}</h2>
            <p className="text-lg">
            {t("step3_subtitle")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
