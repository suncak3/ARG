import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/arg-logo.png";
import phone from "../images/Phone.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container max-w-screen-xl mx-auto px-16">
        {/* Верхний блок с телефоном, логотипом и адресом */}
        <div className="flex justify-between items-center py-2">
          {/* Телефон в левом верхнем углу */}
          <a href="tel:+77777777777" className="text-gray-700 flex items-center space-x-0">
            <img src={phone} alt="Телефон" className="h-6 w-6 relative top-1" />
            <span className="font-semibold">+7 777 777 77 77</span>
          </a>

          {/* Адрес ближе к переключателю языков */}
          <p className="hidden lg:block text-gray-700 text-lg font-bold ml-96">
            г. Астана ул. Конаева <span className="font-bold">33</span>
          </p>

          {/* Переключение языка */}
          <div className="flex items-center space-x-2 text-base">
            <a href="/" className="text-orange-500 font-semibold">рус</a>
            <span className="text-gray-400">|</span>
            <a href="/" className="text-gray-600 hover:text-orange-500">eng</a>
          </div>

          {/* Бургер-иконка (показывается только на мобилке) */}
          <button className="lg:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>

        {/* Нижний блок с логотипом и навигацией */}
        <div className="flex justify-between items-center py-3">
          {/* Логотип и текст рядом с ним */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="ARG Logo" className="h-20 w-auto" />
            <div className="text-sm text-gray-600 leading-tight">
              <p className="font-semibold">Поставка и сервисное</p>
              <p className="font-semibold">обслуживание промышленного</p>
              <p className="font-semibold">оборудования</p>
            </div>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium text-lg">
            <a href="/" className="hover:text-orange-500">Каталог</a>
            <a href="/" className="hover:text-orange-500">О компании</a>
            <a href="/" className="hover:text-orange-500">Доставка и оплата</a>
            <a href="/" className="hover:text-orange-500">Контакты</a>
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
          <a href="/" className="hover:text-orange-500">Каталог</a>
          <a href="/" className="hover:text-orange-500">О компании</a>
          <a href="/" className="hover:text-orange-500">Доставка и оплата</a>
          <a href="/" className="hover:text-orange-500">Контакты</a>
          <div className="text-lg">
            <a href="/" className="text-orange-500 font-semibold">рус</a>
            <span className="text-gray-400 mx-2">|</span>
            <a href="/" className="text-gray-600 hover:text-orange-500">eng</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
