import React from "react";
import "../style/aboutCompany.css"; // Подключаем стили

const AboutCompany = () => {
    return (
        <section className="about-company">
            <div className="about-container">
                {/* Левая часть - текст */}
                <div className="about-text">
                    <h2>О компании</h2>
                    <p>
                        Компания ARG – ваш надежный партнер в сфере поставок промышленных инструментов и оборудования.
                        Мы предлагаем широкий ассортимент продукции от ведущих мировых производителей, гарантируя
                        качество, надежность и конкурентные цены.
                    </p>

                    <h3>Наша миссия:</h3>
                    <p>
                        Обеспечить предприятия качественными инструментами и комплектующими,
                        повышая эффективность их работы.
                    </p>

                    <h3>Наши преимущества:</h3>
                    <ul>
                        <li>Более 10 лет на рынке промышленных поставок.</li>
                        <li>Прямое сотрудничество с мировыми брендами.</li>
                        <li>Индивидуальный подход к каждому клиенту.</li>
                        <li>Гибкие условия сотрудничества и оперативная доставка.</li>
                    </ul>

                    <button className="about-button">Подробнее</button>
                </div>

                {/* Правая часть - изображения */}
                <div className="about-images">
                    <img src="/images/about/main.png" alt="Автоинструменты" className="main-image"/>
                    <div className="small-images">
                        <img src="/images/about/workshop.png" alt="Мастерская"/>
                        <img src="/images/about/parts.png" alt="Автозапчасти"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
