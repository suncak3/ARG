import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import "../style/aboutCompany.css"; // Подключаем стили

const AboutCompany = () => {
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
        <section className="about-company">
            <div className="about-container">
                {/* Левая часть - текст */}
                <div className="about-text">
                    <h2>{t('about.title')}</h2> {/* Заголовок */}
                    <p>{t('about.description')}</p> {/* Описание компании */}

                    <h3>{t('about.missionTitle')}</h3> {/* Заголовок для миссии */}
                    <p>{t('about.mission')}</p> {/* Миссия компании */}

                    <h3>{t('about.advantagesTitle')}</h3> {/* Заголовок для преимуществ */}
                    <ul>
                        <li>{t('about.advantage1')}</li>
                        <li>{t('about.advantage2')}</li>
                        <li>{t('about.advantage3')}</li>
                        <li>{t('about.advantage4')}</li>
                    </ul>

                    <button className="about-button">{t('about.buttonText')}</button> {/* Кнопка */}
                </div>

                {/* Правая часть - изображения */}
                <div className="about-images">
                    <img
                        src="/images/about/main.png"
                        alt={t('about.mainImageAlt')}  // Альт текст изображения
                        className="main-image"
                    />
                    <div className="small-images">
                        <img
                            src="/images/about/workshop.png"
                            alt={t('about.workshopAlt')}  // Альт текст для второй картинки
                        />
                        <img
                            src="/images/about/parts.png"
                            alt={t('about.partsAlt')}  // Альт текст для третьей картинки
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
