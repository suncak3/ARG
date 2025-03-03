import React from "react";
import "../style/contacts.css"; // Подключаем стили
import phoneIcon from "../images/Phone_contacts.png";
import emailIcon from "../images/Email_contacts.png";
import addressIcon from "../images/Address_contacts.png";
import clockIcon from "../images/Clock.png";
import PartnersList from "../components/PartnersList"

const Contacts = () => {
    return (
        <section className="contacts-section">
            <div className="contacts-container">
                {/* Левая часть - контактная информация */}
                <div className="contact-info">
                    <h2>Контакты</h2>
                    <div className="contact-item">
                        <img src={addressIcon} alt="Адрес" className="icon" />
                        <div>
                            <h4>Адрес</h4>
                            <p>г. Астана, ул. Конаева 33, офис 313</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <img src={phoneIcon} alt="Телефон" className="icon" />
                        <div>
                            <h4>Телефон</h4>
                            <a href="tel:+77777777777">+7 (777) 777 77 77</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <img src={emailIcon} alt="Email" className="icon" />
                        <div>
                            <h4>Почта</h4>
                            <a href="mailto:info@arg.kz">info@arg.kz</a>
                    </div>
                    </div>
                    <div className="contact-item">
                        <img src={clockIcon} alt="Время" className="icon" />
                        <div>
                            <h4>Режим работы</h4>
                            <p>с 8:30 до 17:00</p>
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
                    <h2 className="contact-form-title">Связаться с вами?</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" placeholder="Введите ваше имя" required />

                        <label htmlFor="phone">Телефон</label>
                        <input type="tel" id="phone" placeholder="+7 (7__) ___-__-__" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="example@gmail.com" required />
                </form>
            </div>

            {/* Правая часть формы (Сообщение) */}
            <div className="contact-form-right">
                <form className="contact-form">
                    <label htmlFor="message">Сообщение</label>
                    <textarea id="message" placeholder="Введите ваше сообщение"></textarea>

                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>

            {/* Партнеры */}
            <PartnersList />
        </section>
    );
};

export default Contacts;
