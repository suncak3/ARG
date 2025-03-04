import React from "react";
import "../style/delivery.css"; // Подключаем стили

const partners = [
    { id: 1, name: "DIXON", image: "/images/partners/dixon.png" },
    { id: 2, name: "Parker", image: "/images/partners/parker.png" },
    { id: 3, name: "Flow Technology", image: "/images/partners/flow_technology.png" },
    { id: 4, name: "Gates", image: "/images/partners/gates.png" },
];

const DeliveryPage = () => {
    return (
        <section className="delivery">
            <h1 className="delivery-title">Доставка и оплата</h1>
            <div className="delivery-block">
                <img src="images/icons/payment.png" alt="Оплата" className="delivery-icon"/>
                <div className="delivery-text">
                    <h2>Оплата по платежному документу</h2>
                    <p>
                        При заключении договора, вам будет выставлен счет и на электронную почту отправлен платежный
                        документ.
                        По данному документу вы можете оплатить заказ через банк, и получить товар в ближайшее время.
                    </p>
                </div>
            </div>

            <h2 className="delivery-subtitle">СПОСОБЫ ПОЛУЧЕНИЯ ТОВАРА</h2>

            <div className="delivery-block">
                <img src="images/icons/pickup.png" alt="Самовывоз" className="delivery-icon"/>
                <div className="delivery-text">
                    <h2>Самовывоз</h2>
                    <p>
                        Может быть осуществлен со склада в Москве по адресу: Волоколамское шоссе 1, стр. 1. Склад
                        работает ежедневно с 8:30 до 17:00.
                        Чтобы оформить заказ и самостоятельно забрать его, обратитесь к менеджерам нашей компании по
                        тел.:{" "}
                        <a href="tel:+74996788235">+7 (499) 678-82-35</a>.
                    </p>
                </div>
            </div>

            <div className="delivery-block">
                <img src="images/icons/delivery.png" alt="Доставка" className="delivery-icon"/>
                <div className="delivery-text">
                    <h2>Доставка до терминала транспортной компании</h2>
                    <p>
                        Доставка до терминалов ТК «Деловые Линии» производится за наш счет. При заказе от 500 000 тенге
                        доставка до
                        ближайшего терминала транспортной компании к Заказчику бесплатна. Доставка по Астане бесплатна
                        при заказе от
                        200 000 тенге. По желанию клиента отгрузка может быть осуществлена удобной для вас транспортной
                        компанией.
                    </p>
                </div>
            </div>

            <h2 className="delivery-subtitle">Наши партнеры по доставке</h2>
            <div className="partners-container">
                {partners.map((partner) => (
                    <img key={partner.id} src={partner.image} alt={partner.name} className="partner-logo"/>
                ))}
            </div>

            <h2 className="delivery-subtitle">Свяжитесь с нами для оформления заказа</h2>
            <div className="contact-button-container">
                <a href="/contact" className="contact-button">Связаться</a>
            </div>
        </section>
    );
};

export default DeliveryPage;
