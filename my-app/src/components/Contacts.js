import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/contacts.css"; // Подключаем стили
import phoneIcon from "../images/Phone_contacts.png";
import emailIcon from "../images/Email_contacts.png";
import addressIcon from "../images/Address_contacts.png";
import clockIcon from "../images/Clock.png";
import PartnersList from "../components/PartnersList";

const Contacts = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "ru";
        if (i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
        setCurrentLanguage(savedLanguage);
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        if (i18n.language !== lng) {
            i18n.changeLanguage(lng);
            localStorage.setItem("language", lng);
            setCurrentLanguage(lng);
        }
    };

    return (
        <div>
            <section className="contacts-section">
                <div className="contacts-container">
                    {/* Левая часть - контактная информация */}
                    <div className="contact-info">
                        <h2>{t("contacts.title")}</h2>
                        <div className="contact-item">
                            <img src={addressIcon} alt="Адрес" className="icon" />
                            <div>
                                <h4>{t("contacts.address_title")}</h4>
                                <p>{t("contacts.address")}</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <img src={phoneIcon} alt="Телефон" className="icon" />
                            <div>
                                <h4>{t("contacts.phone_title")}</h4>
                                <a href="tel:+77777777777">{t("contacts.phone")}</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <img src={emailIcon} alt="Email" className="icon" />
                            <div>
                                <h4>{t("contacts.email_title")}</h4>
                                <a href="mailto:info@arg.kz">info@arg.kz</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <img src={clockIcon} alt="Время" className="icon" />
                            <div>
                                <h4>{t("contacts.working_hours_title")}</h4>
                                <p>{t("contacts.working_hours")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Правая часть - карта */}
                    <div className="contact-map">
                        <iframe
                            src="https://maps.google.com/maps?q=Astana,%20Konaeva%2033&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            allowFullScreen
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form-container">
                    {/* Левая часть формы */}
                    <div className="contact-form-left">
                        <h2 className="contact-form-title">{t("contacts.form_title")}</h2>
                        <form className="contact-form">
                            <label htmlFor="name">{t("contacts.form_name")}</label>
                            <input
                                type="text"
                                id="name"
                                placeholder={t("contacts.form_name_placeholder")}
                                required
                            />

                            <label htmlFor="phone">{t("contacts.form_phone")}</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder={t("contacts.form_phone_placeholder")}
                                required
                            />

                            <label htmlFor="email">{t("contacts.form_email")}</label>
                            <input
                                type="email"
                                id="email"
                                placeholder={t("contacts.form_email_placeholder")}
                                required
                            />
                        </form>
                    </div>

                    {/* Правая часть формы (Сообщение) */}
                    <div className="contact-form-right">
                        <form className="contact-form">
                            <label htmlFor="message">{t("contacts.form_message")}</label>
                            <textarea id="message" placeholder={t("contacts.form_message_placeholder")}></textarea>

                            <button type="submit">{t("contacts.form_button")}</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* Партнеры */}
            <PartnersList />
        </div>
    );
};

export default Contacts;
