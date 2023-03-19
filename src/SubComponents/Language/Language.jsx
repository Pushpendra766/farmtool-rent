import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import i18n from "../../i18n";

const Language = () => {
  const [currentLang, setCurrentLang] = useState("हिंदी");
  const toggleLanguage = () => {
    if (currentLang == "English") {
      setCurrentLang("हिंदी");
      i18n.changeLanguage("en");
    } else {
      setCurrentLang("English");
      i18n.changeLanguage("hi");
    }
  };
  return (
    <div
      className="flex flex-row gap-2 cursor-pointer items-center"
      onClick={() => toggleLanguage()}
    >
      <span className="pt-1 align-middle">
        <MdLanguage size={20} />
      </span>{" "}
      <span className="hidden lg:flex pt-1">{currentLang}</span>
    </div>
  );
};

export default Language;
