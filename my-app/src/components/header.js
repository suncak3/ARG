import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/arg-logo.png";
import phone from "../images/Phone.png";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n,t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ru";
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    setCurrentLanguage(savedLanguage);
  }, []);

  const changeLanguage = (lng) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
      setCurrentLanguage(lng);
    }
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container max-w-screen-xl mx-auto px-16">
        <div className="flex justify-between items-center py-2">
          <a href={`tel:${t("contact.phone")}`} className="text-gray-700 flex items-center space-x-0">
            <img src={phone} alt="Телефон" className="h-6 w-6 relative top-1" />
            <span className="font-semibold">{t("contact.phone")}</span>
          </a>

          {/* Адрес ближе к переключателю языков */}
          <p className="hidden lg:block text-gray-700 text-lg font-bold ml-96">
            {t("contact.address")}
          </p>

          {/* Переключение языка */}
          <div className="hidden lg:block flex items-center space-x-2 text-base">
            <button
                onClick={() => changeLanguage("ru")}
                className={`font-semibold ${currentLanguage === "ru" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}
            >
              Рус
            </button>
            <span className="text-gray-400">|</span>
            <button
                onClick={() => changeLanguage("en")}
                className={`font-semibold ${currentLanguage === "en" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}
            >
              Eng
            </button>
          </div>

          {/* Бургер-иконка (показывается только на мобилке) */}
          <button className="lg:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(true)}>
            <FaBars/>
          </button>
        </div>

        <div className="flex justify-between items-center py-3">
          <Link to="/">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="ARG Logo" className="h-20 w-auto"/>
              <div className="text-sm text-gray-600 leading-tight">
                <p className="font-semibold">{t("logo_description.title_1")}</p>
                <p className="font-semibold">{t("logo_description.title_2")}</p>
                <p className="font-semibold">{t("logo_description.title_3")}</p>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium text-lg">
            <Link to="/catalog" className="hover:text-orange-500">{t("header.catalog")}</Link>
            <Link to="/about" className="hover:text-orange-500">{t("header.about")}</Link>
            <Link to="/delivery" className="hover:text-orange-500">{t("header.delivery")}</Link>
            <Link to="/contact" className="hover:text-orange-500">{t("header.contacts")}</Link>
          </nav>
        </div>

        {/* Мобильное меню (появляется при клике на бургер) */}
        <div
          className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-2xl space-y-6 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <button className="absolute top-6 right-6 text-3xl text-gray-700" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <Link to="/catalog" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>{t("header.catalog")}</Link>
          <Link to="/about" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>{t("header.about")}</Link> {/* Updated mobile menu link */}
          <Link to="/delivery" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>{t("header.delivery")}</Link>
          <Link to="/contact" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>{t("header.contacts")}</Link>
          <div className="text-lg">
            <button
                onClick={() => changeLanguage("ru")}
                className={`font-semibold ${currentLanguage === "ru" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}
            >
              Рус
            </button>
            <span className="text-gray-400 mx-2">|</span>
            <button
                onClick={() => changeLanguage("en")}
                className={`font-semibold ${currentLanguage === "en" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}
            >
              Eng
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
