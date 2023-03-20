import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const history = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-b from-[#AFF1DA] to-[#F9EA8F] text-[#3E3E3E] pt-10">
      <div className=" lg:pt-20 mx-8 md:mx-20 text-center pt-40 flex flex-col md:gap-5 mobile:gap-2 bg-blue-200 z-40">
        <p className="text-3xl md:text-5xl font-bold mx-auto md:w-5/12 mobile:w-11/12 whitespace-nowrap">
          {t("intro_title")},
          <br />
          <Typewriter
            words={[t("tr_line1"), t("tr_line2"), t("tr_line3")]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <p className="md:text-xl w-10/12 text-lg lg:w-6/12 mx-auto">
          {t("intro_subtitle")}
        </p>
        <div className="flex flex-row gap-6 md:gap-8 justify-center text-[#ffffff] text-lg md:text-xl">
          <button
            className=" pt-1 md:pt-2 pb-2 md:pb-3 px-4 md:px-6  transition-all"
            onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth < 600) {
                window.scrollTo({ top: 625, behavior: "smooth" });
              } else {
                window.scrollTo({ top: 825, behavior: "smooth" });
              }
            }}
          >
            {t("action_button1")}
          </button>
          <button
            className="pt-2 pb-3 px-4 transition-all"
            onClick={() => history("/howitworks")}
          >
            {t("action_button2")}
          </button>
        </div>
      </div>
      <div className="z-0">
        <img src="/images/harvester.png" className="w-full" />
      </div>
    </div>
  );
};

export default Intro;
