import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import "../style/delivery.css"; // Подключаем стили

const partners = [
    { id: 1, name: "DIXON", image: "/images/partners/dixon.png" },
    { id: 2, name: "Parker", image: "/images/partners/parker.png" },
    { id: 3, name: "Flow Technology", image: "/images/partners/flow_technology.png" },
    { id: 4, name: "Gates", image: "/images/partners/gates.png" },
];

const DeliveryPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "ru";
        if (i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage); // Изменяем язык, если он отличается от сохраненного
        }
        setCurrentLanguage(savedLanguage); // Устанавливаем текущий язык
    }, [i18n]);

    const changeLanguage = (lng) => {
        if (i18n.language !== lng) {
            i18n.changeLanguage(lng); // Изменяем язык в i18next
            localStorage.setItem("language", lng); // Сохраняем язык в localStorage
            setCurrentLanguage(lng); // Обновляем текущий язык
        }
    };

    return (
        <section className="delivery">
            <h1 className="delivery-title">{t('delivery.title')}</h1>
            <div className="delivery-block">
                <img src="images/icons/payment.png" alt="Оплата" className="delivery-icon"/>
                <div className="delivery-text">
                    <h2>{t('delivery.payment.title')}</h2>
                    <p>{t('delivery.payment.description')}</p>
                </div>
            </div>

            <h2 className="delivery-subtitle">{t('delivery.pickup.title')}</h2>

            <div className="delivery-block">
                <img src="images/icons/pickup.png" alt="Самовывоз" className="delivery-icon"/>
                <div className="delivery-text">
                    <h2>{t('delivery.pickup.title')}</h2>
                    <p>{t('delivery.pickup.description')}</p>
                </div>
            </div>

            <div className="delivery-block">
                <img src="images/icons/delivery.png" alt="Доставка" className="delivery-icon"/>
                <div className="delivery-text">
                    <h2>{t('delivery.delivery.title')}</h2>
                    <p>{t('delivery.delivery.description')}</p>
                </div>
            </div>

            <h2 className="delivery-subtitle">{t('delivery.partners')}</h2>
            <div className="partners-container">
                {partners.map((partner) => (
                    <img key={partner.id} src={partner.image} alt={partner.name} className="partner-logo"/>
                ))}
            </div>

            <h2 className="delivery-subtitle">{t('delivery.contact')}</h2>
            <div className="contact-button-container">
                <a href="/contact" className="contact-button">{t('delivery.contact')}</a>
            </div>
        </section>
    );
};

export default DeliveryPage;
