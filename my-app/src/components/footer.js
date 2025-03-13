import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import phone from "../images/Phone_footer.png";
import email from "../images/Email.png";
import address from "../images/Address.png";

const Footer = () => {
  const { t, i18n } = useTranslation(); // Получаем функцию для перевода и i18n
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Сохраняем текущий язык

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ru"; // Берем язык из localStorage или по умолчанию "ru"
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Если язык отличается, меняем язык
    }
    setCurrentLanguage(savedLanguage); // Обновляем текущий язык в state
  }, [i18n.language]); // Следим за изменениями языка

  return (
      <footer className="bg-customGray text-white py-10 mt-auto">
        <div className="container max-w-screen-xl mx-auto px-6 md:px-16">
          {/* Верхний блок подписки */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6 text-center md:text-left">
            <p className="text-lg font-semibold">
              {t('footer.subscribe')} <br className="hidden md:block" /> {t('footer.receiveOffers')}
            </p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 mt-4 md:mt-0 w-full md:w-auto">
              <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="pl-4 py-2 w-full md:w-96 rounded-lg bg-white text-gray-900"
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg w-full md:w-auto">
                {t('footer.subscribeButton')}
              </button>
            </div>
          </div>

          {/* Нижний блок с разделами */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-center md:text-left">
            {/* Каталог */}
            <div>
              <h3 className="text-base font-bold">{t('footer.catalog')}</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>{t('footer.products')}</li>
                <li>{t('footer.services')}</li>
                <li>{t('footer.brands')}</li>
              </ul>
            </div>

            {/* Покупателям */}
            <div>
              <h3 className="text-base font-bold">{t('footer.customers')}</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>{t('footer.deliveryAndPayment')}</li>
                <li>{t('footer.productWarranty')}</li>
              </ul>
            </div>

            {/* Компания */}
            <div>
              <h3 className="text-base font-bold">{t('footer.company')}</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>{t('footer.aboutCompany')}</li>
                <li>{t('footer.certificates')}</li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-base font-bold">{t('footer.contacts')}</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="flex justify-center md:justify-start items-center space-x-2">
                  <img src={phone} alt={t('footer.phoneAlt')} className="w-5 h-5" />
                  <span>+7 777 777 77 77</span>
                </li>
                <li className="flex justify-center md:justify-start items-center space-x-2">
                  <img src={email} alt={t('footer.emailAlt')} className="w-5 h-5" />
                  <span>info@arg.kz</span>
                </li>
                <li className="flex justify-center md:justify-start items-center space-x-2">
                  <img src={address} alt={t('footer.addressAlt')} className="w-5 h-5" />
                  <span>{t('footer.address')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Копирайт */}
          <div className="border-t border-gray-600 mt-6 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm text-center md:text-left">
            <span>2025 © ARG</span>
            <span>{t('footer.reliablePartner')}</span>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
