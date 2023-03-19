import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";

const Language = () => {
  const [currentLang, setCurrentLang] = useState("English");
  const toggleLanguage = () => {
    if (currentLang == "English") {
      setCurrentLang("हिंदी");
    } else {
      setCurrentLang("English");
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
