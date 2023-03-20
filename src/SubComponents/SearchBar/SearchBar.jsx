import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Context from "../../Context/Context";
import { data } from "../../data";

const SearchBar = ({ additionalClass }) => {
  const { t } = useTranslation();
  const contextApi = useContext(Context);
  return (
    <div className={`w-full mx-auto mt-1 flex flex-row ${additionalClass}`}>
      <input
        className="rounded-md w-full px-2 py-1 text-[#000000] outline-0"
        type="text"
        placeholder={t("search_placeholder")}
        value={contextApi.search}
        onChange={(e) => {
          contextApi.setSearch(e.target.value);
        }}
      />
      <span className="pt-2 cursor-pointer">
        <BsSearch className="relative right-6 text-primary" />
      </span>
      <span className="pt-1 cursor-pointer text-[#ffffff]">
        <MdMic size={25} />
      </span>
      <div className="w-1/4 top-12 absolute bg-white border-dark-green rounded-md grid grid-cols-2 p-3">
        {contextApi.search
          ? data
              .filter((e) => {
                return e.name
                  .toLowerCase()
                  .includes(contextApi.search.toLowerCase());
              })
              .map((e) => {
                return <Component data={e} />;
              })
          : null}
      </div>
    </div>
  );
};

const Component = ({ data }) => {
  const { name, price } = data;
  return (
    <div className="w-2/4">
      <p className="text-gray-dark">{name}</p>
    </div>
  );
};

export default SearchBar;
