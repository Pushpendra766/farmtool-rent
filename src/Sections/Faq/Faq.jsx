import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  const faqsEnglish = [
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
  const faqsHindi = [
    {
      question:
        "मैं आपकी सेवा से किस प्रकार के कृषि उपकरण किराए पर ले सकता हूँ?",
      answer:
        "हमारी कृषि उपकरण किराये की सेवा ट्रैक्टर, टिलर, कल्टीवेटर, हल, हैरो, सीडर्स, और बहुत कुछ सहित उपकरणों की एक विस्तृत श्रृंखला प्रदान करती है। उपलब्ध उपकरणों की पूरी सूची के लिए हमारी वेबसाइट देखें।",
    },
    {
      question: "आपके कृषि उपकरणों के लिए किराये की दरें क्या हैं?",
      answer:
        "हमारे किराये की दरें उपकरण के प्रकार, किराये की अवधि और अन्य कारकों के आधार पर भिन्न होती हैं। हम प्रतिस्पर्धी मूल्य निर्धारण की पेशकश करते हैं और अपने ग्राहकों के लिए किफायती किराये के विकल्प प्रदान करने का लक्ष्य रखते हैं। विशिष्ट मूल्य निर्धारण जानकारी के लिए आप हमसे संपर्क कर सकते हैं या हमारी वेबसाइट देख सकते हैं।",
    },

    {
      question:
        "क्या मुझे किराए के उपकरणों को लेने और वापस करने के लिए अपना परिवहन प्रदान करने की आवश्यकता है?",
      answer:
        "हाँ, किराए पर लिए गए उपकरणों को लेने और वापस करने के लिए आपको अपना परिवहन प्रदान करने की आवश्यकता होगी। हालांकि, हम अतिरिक्त शुल्क देकर डिलीवरी की व्यवस्था कर सकते हैं। अधिक जानकारी के लिए हमसे संपर्क करें।",
    },
    {
      question:
        "क्या आपके खेती के उपकरणों के लिए न्यूनतम या अधिकतम किराये की अवधि है?",
      answer:
        "हां, हमारे खेती के उपकरणों के लिए आमतौर पर न्यूनतम किराये की अवधि होती है, जो उपकरणों के आधार पर भिन्न होती है। हमारे पास यह सुनिश्चित करने के लिए अधिकतम किराये की अवधि भी है कि हमारे उपकरण अच्छी स्थिति में रहें और अन्य ग्राहकों के लिए उपलब्ध हों। कृपया हमारी वेबसाइट देखें या अधिक जानकारी के लिए हमसे संपर्क करें।",
    },

    {
      question:
        "क्या होता है यदि किराए पर लिया गया उपकरण किराये की अवधि के दौरान क्षतिग्रस्त हो जाता है या खराब हो जाता है?",
      answer:
        "किराये की अवधि के दौरान किराए पर दिए गए उपकरणों के लिए आप जिम्मेदार हैं, और होने वाली किसी भी क्षति या खराबी की जिम्मेदारी आपकी होगी। हम अनुशंसा करते हैं कि आप किसी भी संभावित नुकसान या नुकसान को कवर करने के लिए बीमा करवाएं। किसी भी समस्या के मामले में, स्थिति पर चर्चा करने के लिए कृपया हमसे जल्द से जल्द संपर्क करें।",
    },

    {
      question:
        "क्या मुझे किराये के कृषि उपकरणों को संचालित करने के लिए किसी विशेष प्रशिक्षण या प्रमाणन की आवश्यकता है?",
      answer:
        "उपकरण के आधार पर, इसे सुरक्षित और प्रभावी ढंग से संचालित करने के लिए आपको कुछ विशेष प्रशिक्षण या प्रमाणन की आवश्यकता हो सकती है। हमारी टीम उपकरण का उपयोग करने के तरीके पर बुनियादी निर्देश प्रदान कर सकती है, लेकिन यह सुनिश्चित करना आपकी जिम्मेदारी है कि आपके पास संचालन के लिए आवश्यक कौशल और ज्ञान है। यह। कृपया हमें बताएं कि क्या आपके कोई प्रश्न या चिंताएं हैं।",
    },

    {
      question:
        "मुझे जिन उपकरणों की आवश्यकता है उन्हें मैं कैसे आरक्षित या बुक कर सकता हूँ?",
      answer:
        "आप हमारी वेबसाइट या फोन के माध्यम से हमसे संपर्क करके अपनी जरूरत के उपकरण आरक्षित कर सकते हैं। हम अनुशंसा करते हैं कि उपलब्धता सुनिश्चित करने के लिए, विशेष रूप से चरम अवधि के दौरान, आप उपकरण को पहले से आरक्षित कर लें। आपका अनुरोध प्राप्त होने के बाद हम आपके साथ उपलब्धता और किराये के विवरण की पुष्टि करेंगे।",
    },
  ];
  const [currentFaq, setCurrentFaq] = useState(null);
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    if (i18next.language == "en") {
      setFaqs(faqsEnglish);
    } else {
      setFaqs(faqsHindi);
    }
  }, [i18next.language]);

  return (
    <div className="md:py-5 mobile:py-4">
      <p className="font-bold text-3xl text-center md:pb-2 mobile:pb-1">
        {t("faqs")}
      </p>
 
        {faqs &&
          faqs.map((faq, index) => {
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
    <div className="my-3 border-0 mobile:w-11/12 md:w-8/12 lg:w-6/12 w-9/12 mx-auto border-gray bg-gradient-to-r from-[#AFF1DA] to-[#F9EA8F] rounded-md cursor-pointer">
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
