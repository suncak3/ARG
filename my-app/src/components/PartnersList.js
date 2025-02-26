import React from "react";
import "../style/partnersList.css"; // Подключаем стили

const partners = [
    { id: 1, name: "Dixon", logo: "/images/partners/dixon.png" },
    { id: 2, name: "Parker", logo: "/images/partners/parker.png" },
    { id: 3, name: "Flow Technology", logo: "/images/partners/flow_technology.png" },
    { id: 4, name: "Gates", logo: "/images/partners/gates.png" },
    { id: 5, name: "IBC", logo: "/images/partners/ibc.png" }
];

const PartnersList = () => {
    return (
        <section className="partners-section">
            <h2 className="partners-title">Партнеры</h2>
            <div className="partners-container">
                {partners.map((partner) => (
                    <div key={partner.id} className="partner-card">
                        <img src={partner.logo} alt={partner.name} className="partner-logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnersList;
