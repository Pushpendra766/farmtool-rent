import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TractorAnimation = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const animationStyle = isInView ? "animate-tractor" : "";

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  const keyFrameStyle = `
  @keyframes move-tractor {
    from {
      transform: translateX(-${0.401 * screenWidth}%);
    }
    to {
      transform: translateX(${0.401 * screenWidth}%);
    }
  }
  
  .animate-tractor {
    animation: move-tractor ${screenWidth/149.6}s linear infinite;
  }
  `;

  return (
    <>
      <div className="flex flex-row md:px-6 lg:px-20 items-end justify-between overflow-hidden">
        <img src="/images/tree.svg" className="h-16 md:h-20 z-40" />
        <img
          src="/images/tractor.svg"
          ref={ref}
          className={`h-8 md:h-12 ${animationStyle}`}
          style={{
            animationPlayState: isInView ? "running" : "paused",
            animationName: "move-tractor",
          }}
        />
        <style>{keyFrameStyle}</style>
        <img src="/images/house.svg" className="h-16 md:h-20 z-40" />
      </div>
      <hr className="mx-2 h-1 bg-[#6E260E] border-0" />
    </>
  );
};

export default TractorAnimation;
