import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import plantGrowing from "./plant_growing.json";
const LoadingAnimation = ({ setBgColor }) => {
  setBgColor("bg-gradient-to-r from-[#39F3BB] via-[#DFFFCD] to-[#39F3BB] ");
  return (
    <div className="w-80 mx-auto flex h-screen items-center">
      <div className="flex flex-col">
        <Lottie animationData={plantGrowing} loop={true} />
      </div>
    </div>
  );
};

export default LoadingAnimation;
