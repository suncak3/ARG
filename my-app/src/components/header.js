import React from "react";
import logo from "../images/arg-logo.png";
import phone from "../images/Phone.png";


const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-60">
        {/* Верхний блок с телефоном, логотипом и адресом */}
        <div className="flex justify-between items-center py-2">
          {/* Телефон в левом верхнем углу */}
          <a href="tel:+77777777777" className="text-gray-700 flex items-center space-x-0">
            <img src={phone} alt="Телефон" className="h-6 w-6 relative top-1" />
            <span className="font-semibold">+7 777 777 77 77</span>
          </a>

          {/* Адрес ближе к переключателю языков */}
          <p className="text-gray-700 text-lg font-bold ml-96">
            г. Астана ул. Конаева <span className="font-bold">33</span>
          </p>

          {/* Переключение языка */}
          <div className="flex items-center space-x-2 text-base">
            <a href="/" className="text-orange-500 font-semibold">рус</a>
            <span className="text-gray-400">|</span>
            <a href="/" className="text-gray-600 hover:text-orange-500">eng</a>
          </div>
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

          {/* Меню навигации справа */}
          <nav className="flex space-x-6 text-gray-700 font-medium text-lg">
            <a href="/" className="hover:text-orange-500">Каталог</a>
            <a href="/" className="hover:text-orange-500">О компании</a>
            <a href="/" className="hover:text-orange-500">Доставка и оплата</a>
            <a href="/" className="hover:text-orange-500">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
