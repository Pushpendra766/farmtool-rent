import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Transition } from "@headlessui/react";

const Faq = () => {
  const faqs = [
    {
      question: "What types of farming tools can I rent from your service?",
      answer:
        "Our farming tools rental service offers a wide range of tools including tractors, tillers, cultivators, plows, harrows, seeders, and more. Check our website for a full list of available equipment.",
    },
    {
      question: "What are the rental rates for your farming tools?",
      answer:
        "Our rental rates vary depending on the type of equipment, duration of rental, and other factors. We offer competitive pricing and aim to provide affordable rental options for our customers. You can contact us or check our website for specific pricing information.",
    },
    {
      question:
        "Do I need to provide my own transportation to pick up and return the rented equipment?",
      answer:
        "Yes, you will need to provide your own transportation to pick up and return the rented equipment. However, we may be able to arrange delivery for an additional fee. Please contact us for more information.",
    },
    {
      question:
        "Is there a minimum or maximum rental period for your farming tools?",
      answer:
        "Yes, there is typically a minimum rental period for our farming tools, which varies depending on the equipment. We also have maximum rental periods to ensure that our equipment remains in good condition and is available for other customers. Please check our website or contact us for more information.",
    },
    {
      question:
        "What happens if the rented equipment is damaged or malfunctions during the rental period?",
      answer:
        "You are responsible for the rented equipment during the rental period, and any damage or malfunction that occurs will be your responsibility. We recommend that you take out insurance to cover any potential damages or losses. In case of any issues, please contact us as soon as possible to discuss the situation.",
    },
    {
      question:
        "Do I need any special training or certification to operate the rented farming tools?",
      answer:
        "Depending on the equipment, you may need some special training or certification to operate it safely and effectively. Our team can provide basic instructions on how to use the equipment, but it's your responsibility to ensure that you have the necessary skills and knowledge to operate it. Please let us know if you have any questions or concerns.",
    },
    {
      question: "How do I reserve or book the equipment I need?",
      answer:
        "You can reserve the equipment you need by contacting us through our website or by phone. We recommend that you reserve the equipment in advance to ensure availability, especially during peak periods. We'll confirm the availability and rental details with you once we receive your request.",
    },
  ];
  const [currentFaq, setCurrentFaq] = useState(null);
  return (
    <div className="mobile:my-8 md:my-0 py-10">
      <p className="font-bold text-3xl text-center pb-8">FAQs</p>
      {faqs.map((faq, index) => {
        return (
          <Component
            faq={faq}
            key={faq.question}
            currentFaq={currentFaq}
            setCurrentFaq={setCurrentFaq}
            idx={index}
          />
        );
      })}
    </div>
  );
};

const Component = ({ faq, currentFaq, setCurrentFaq, idx }) => {
  const [opened, setOpened] = useState(false);
  const [animationClass, setAnimationClass] = useState("opacity-0");
  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setAnimationClass("opacity-100 transform transition-all duration-500 ");
      }, 0);
    } else {
      setAnimationClass("opacity-0");
    }
  }, [opened]);
  return (
    <div className="my-3 border-0 md:w-8/12 lg:w-6/12 w-9/12 mx-auto border-gray bg-gradient-to-r from-[#AFF1DA] to-[#F9EA8F] rounded-md cursor-pointer">
      <div
        onClick={() => {
          if (currentFaq === idx) {
            setCurrentFaq(null);
          } else {
            setCurrentFaq(idx);
          }
        }}
        className={`flex items-center justify-between py-2 px-3 font-semibold`}
      >
        <p>{faq.question}</p>
        {opened ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <Transition
        show={currentFaq === idx}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-500 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <div className="p-4 mt-2 bg-[#ffffff] rounded-b-md drop-shadow-lg">
          <p>{faq.answer}</p>
        </div>
      </Transition>
      {/* {opened ? <p className="px-2 py-1">{faq.answer}</p> : null} */}
    </div>
  );
};

export default Faq;
