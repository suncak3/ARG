import React from "react";
import phone from "../images/Phone_footer.png";
import email from "../images/Email.png";
import address from "../images/Address.png";

const Footer = () => {
  return (
    <footer className="bg-customGray text-white py-10 mt-auto">
      <div className="container max-w-screen-xl mx-auto px-6 md:px-16">
        {/* Верхний блок подписки */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6 text-center md:text-left">
          <p className="text-lg font-semibold">
            Подпишитесь на нашу рассылку <br className="hidden md:block" /> и получайте выгодные предложения!
          </p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="pl-4 py-2 w-full md:w-96 rounded-lg bg-white text-gray-900"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg w-full md:w-auto">
              Подписаться
            </button>
          </div>
        </div>

        {/* Нижний блок с разделами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-center md:text-left">
          {/* Каталог */}
          <div>
            <h3 className="text-base font-bold">Каталог</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>Товары</li>
              <li>Услуги</li>
              <li>Бренды</li>
            </ul>
          </div>

          {/* Покупателям */}
          <div>
            <h3 className="text-base font-bold">Покупателям</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>Доставка и оплата</li>
              <li>Гарантия на товар</li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-base font-bold">Компания</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>О компании</li>
              <li>Сертификаты</li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-base font-bold">Наши контакты</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <img src={phone} alt="Телефон" className="w-5 h-5" />
                <span>+7 777 777 77 77</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <img src={email} alt="Email" className="w-5 h-5" />
                <span>info@arg.kz</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <img src={address} alt="Адрес" className="w-5 h-5" />
                <span>г. Астана, Конаева 33</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-600 mt-6 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm text-center md:text-left">
          <span>2025 © ARG</span>
          <span>ARG – самый надежный партнер!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
