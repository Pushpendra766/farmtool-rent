import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Testimonials = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);

  const reviewsEnglish = [
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
  const reviewsHindi = [
    {
      image: "farmeri1.png",
      name: "धीरेंद्र कुमार",
      text: "मैंने इस किराये की सेवा से एक चिप्पर श्रेडर किराए पर लिया और यह एक आकर्षण की तरह काम किया! मशीन अच्छी तरह से बनाए रखी गई थी और अच्छी स्थिति में थी। कर्मचारी बहुत मददगार थे और उन्होंने मुझे कदम-दर-कदम ऑपरेटिंग निर्देश दिए। गुणवत्ता वाले उपकरणों की आवश्यकता वाले किसी को भी इस किराये की सेवा की अत्यधिक अनुशंसा करें।",
      rating: 5,
    },
    {
      image: "farmeri2.png",
      name: "रवि पटेल",
      text: "मैंने इस किराये की सेवा से एक मिनी-एक्सकेवेटर किराए पर लिया और यह काम के लिए एकदम सही उपकरण था। उपकरण उत्कृष्ट स्थिति में थे, और कर्मचारी बहुत सहायक और मित्रवत थे। इस किराये की सेवा द्वारा प्रदान किए गए उच्च-गुणवत्ता वाले उपकरणों के कारण, मैं अपनी परियोजना को जल्दी और कुशलता से पूरा करने में सक्षम था।",
      rating: 4.5,
    },
    {
      image: "farmeri3.png",
      name: "विश्वास सिंह",
      text: "इस किराये की सेवा के साथ मेरा अनुभव बहुत अच्छा रहा। मैंने एक ट्रेंचर किराए पर लिया और इससे प्रभावित हुआ कि इसका उपयोग करना कितना आसान था। मशीन साफ, अच्छी तरह से बनाए रखी गई और अच्छी स्थिति में थी। स्टाफ बहुत जानकार था और मेरे सभी सवालों के जवाब देने के लिए समय लेता था। मैं निश्चित रूप से किसी ऐसे व्यक्ति को इस सेवा की सिफारिश करूंगा जिसे गुणवत्तापूर्ण उपकरणों की आवश्यकता है।",
      rating: 3,
    },
    {
      image: "farmeri4.png",
      name: "किशन चंद",
      text: "मैंने इस किराये की सेवा से एक मिनी-एक्सकेवेटर किराए पर लिया और यह काम के लिए एकदम सही उपकरण था। उपकरण उत्कृष्ट स्थिति में थे, और कर्मचारी बहुत सहायक और मित्रवत थे। इस किराये की सेवा द्वारा प्रदान किए गए उच्च-गुणवत्ता वाले उपकरणों के कारण, मैं अपनी परियोजना को जल्दी और कुशलता से पूरा करने में सक्षम था।",
      rating: 4.5,
    },
  ];

  useEffect(() => {
    if (i18next.language == "en") {
      setReviews(reviewsEnglish);
    } else {
      setReviews(reviewsHindi);
    }
  }, [i18next.language]);

  return (
    <div className="bg-gradient-to-r from-[#c8f7c6] via-[#eef3dc] to-[#c8f7c6] md:py-10 mobile:py-4 hidden md:flex flex-col">
      <p className="text-center text-3xl font-bold md:pb-8 mobile:pb-4">
        {t("testimonial")}
      </p>
      <div className="flex mobile:overflow-scroll md:overflow-visible mobile:flex-row md:flex-row mx-auto md:mt-14 mobile:my-0 w-10/12 items-center justify-evenly">
        {reviews.map((review, id) => {
          return <Component key={id} review={review} />;
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
      className="mx-4 rounded-xl px-3 py-2 mobile:my-24 md:my-0 bg-white"
    >
      <img
        className="rounded-full mx-auto mobile:w-full md:w-8/12 -mt-20"
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
