import React, { useState } from "react";
import Language from "../../SubComponents/Language/Language";
import SearchBar from "../../SubComponents/SearchBar/SearchBar";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = ({ logstatus, handleAuthentication }) => {
  const history = useNavigate();
  const { t } = useTranslation();
  const [home, setHome] = useState(1);
  return (
    <div
      style={{ position: "fixed", width: "100vw", zIndex: 999 }}
      className="bg-gradient-to-r from-[#0BAB64] to-[#3BB78F] items-center sticky"
    >
      <div className="flex flex-row gap-4 lg:gap-8  text-[#ffffff] px-4 pr-8 md:px-10 lg:px-20  py-2">
        <div
          className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer whitespace-nowrap"
          onClick={() => history("/")}
        >
          <img src="/images/logo.png" />
          {/* Farm <span className="text-[#F0FF42]">Rent</span> */}
        </div>
        <div className="md:hidden w-full"></div>
        <div className="flex flex-row gap-2 cursor-pointer mt-2">
          <span className="pt-0 align-middle"></span>{" "}
        </div>
        <SearchBar additionalClass="hidden md:flex" />
        <Language />
        <AiOutlineShoppingCart
          size={35}
          style={{ transform: "translateY(3px)" }}
          onClick={() => history(logstatus ? "/cart" : "/login")}
        />
        {logstatus ? (
          <span className="flex flex-row gap-4 hidden md:flex">
            <CgProfile
              size={30}
              style={{ transform: "translateY(5px)" }}
              onClick={() => history("/profile")}
            />
            <button onClick={() => handleAuthentication(false)}>Logout</button>
          </span>
        ) : (
          <span className="flex flex-row gap-4 hidden md:flex whitespace-nowrap">
            <button onClick={() => history("/login")}>{t("login")}</button>
            <button onClick={() => history("/signup")}>{t("signup")}</button>
          </span>
        )}
      </div>
      <div className="pb-2 mx-4">
        <SearchBar additionalClass="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
