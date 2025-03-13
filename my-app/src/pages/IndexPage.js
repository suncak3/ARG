import React from "react";
import {useBlocker, useParams} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ruData from "../locales/ru.json";
import enData from "../locales/en.json";
import "../style/indexPage.css";

const IndexPage = () => {
    const { i18n } = useTranslation();
    const { company } = useParams();

    if (!company) return <p>Компания не указана</p>;

    const companyData = { ru: ruData, en: enData };
    const currentLang = i18n.language in companyData ? i18n.language : "ru";
    const formattedCompany = company.charAt(0).toUpperCase() + company.slice(1);
    const companyInfo = companyData[currentLang]?.[formattedCompany]?.company;
    const assortment = companyData[currentLang]?.[formattedCompany]?.assortment;
    const gallery = companyData[currentLang]?.[formattedCompany]?.gallery;

    if (!companyInfo) return <p>Компания не найдена</p>;

    const images = gallery ? Object.values(gallery) : [];

    return (
        <div className="index-page">
            <div className="info-block">
                <div className="company-info">
                    <h1>{companyInfo.title}</h1>
                    <p>{companyInfo.description}</p>
                    <p className="additional-text">{companyInfo.assortment_intro}</p>
                </div>
                <div className="img-block">
                    <Zoom>
                        <img src={companyInfo.img} alt={companyInfo.title} className="main-img"/>
                    </Zoom>
                </div>
            </div>

            <div className="second-info-block">
                <div className="title-second-block">{assortment?.title}</div>
                <ul className="list-second-block">
                    {assortment?.items &&
                        Object.values(assortment.items).map((item, index) => (
                            <li key={index} className="list-item">
                                <strong>{item.split(":")[0]}:</strong> {item.split(":").slice(1).join(":")}
                            </li>
                        ))}
                </ul>
            </div>


            {/* Галерея с увеличением изображений */}
            {images.length > 0 && (
                <div className="gallery-block">
                    <div className="gallery-title">Галерея</div>
                    <br/>
                    <div className="gallery">
                        {images.map((imgSrc, index) => (
                            <Zoom key={index}>
                                <img src={imgSrc} alt={`Gallery ${index + 1}`} className="gallery-img"/>
                            </Zoom>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndexPage;
