import React, { useEffect } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  const reviews = [
    {
      image: "farmeri1.png",
      name: "Dhirendra Kumar",
      text: "I rented a chipper shredder from this rental service and it worked like a charm! The machine was well-maintained and in great condition. The staff was very helpful and walked me through the operating instructions step-by-step. Highly recommend this rental service to anyone in need of quality equipment.",
      rating: 5,
    },
    {
      image: "farmeri2.png",
      name: "Ravi Patel",
      text: "I rented a mini-excavator from this rental service and it was the perfect tool for the job. The equipment was in excellent condition, and the staff was very helpful and friendly. I was able to complete my project quickly and efficiently, thanks to the high-quality equipment provided by this rental service.",
      rating: 4.5,
    },
    {
      image: "farmeri3.png",
      name: "Vishvas Singh",
      text: "I had a great experience with this rental service. I rented a trencher and was impressed with how easy it was to use. The machine was clean, well-maintained, and in great condition. The staff was very knowledgeable and took the time to answer all of my questions. I would definitely recommend this service to anyone in need of quality equipment.",
      rating: 3,
    },
    {
      image: "farmeri4.png",
      name: "Kishan Chand",
      text: "I rented a mini-excavator from this rental service and it was the perfect tool for the job. The equipment was in excellent condition, and the staff was very helpful and friendly. I was able to complete my project quickly and efficiently, thanks to the high-quality equipment provided by this rental service.",
      rating: 4.5,
    },
  ];
  return (
    <div className="md:my-4 bg-gradient-to-r from-[#c8f7c6] via-[#eef3dc] to-[#c8f7c6] md:py-10 mobile:py-4">
      <p className="text-center text-3xl font-bold md:pb-8 mobile:pb-4">
        Testimonials
      </p>
      <div className="md:flex mx-auto md:mt-14 mobile:my-0 w-10/12 items-center justify-evenly">
        {reviews.map((review) => {
          return <Component review={review} />;
        })}
      </div>
    </div>
  );
};

const Component = ({ review }) => {
  const boxRef = React.useRef(null);
  return (
    <div
      ref={boxRef}
      className="mx-4 rounded-xl px-3 py-2 mobile:my-24 md:my-0"
      style={{ backgroundColor: "#ffffff" }}
    >
      <img
        className="rounded-full mx-auto w-8/12 -mt-20"
        src={`/images/${review.image}`}
        alt=""
      />
      <p className="text-center font-semibold mt-1 text-lg pt-2 pb-4">
        {review.name}
      </p>
      <p className="px-2 text-center">{review.text}</p>
    </div>
  );
};

export default Testimonials;
