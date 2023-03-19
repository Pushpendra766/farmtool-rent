import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import { useTranslation } from "react-i18next";

const SearchBar = ({ additionalClass }) => {
  const {t} = useTranslation();
  return (
    <div className={`w-full mx-auto mt-1 flex flex-row ${additionalClass}`}>
      <input
        className="rounded-md w-full px-2 py-1 text-[#000000] outline-0"
        type="text"
        placeholder={t("search_placeholder")}
      />
      <span className="pt-2 cursor-pointer">
        <BsSearch className="relative right-6 text-primary" />
      </span>
      <span className="pt-1 cursor-pointer text-[#ffffff]">
        <MdMic size={25} />
      </span>
    </div>
  );
};

export default SearchBar;
