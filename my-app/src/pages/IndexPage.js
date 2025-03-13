import React, { useEffect, useState }  from "react";
import { useParams} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ruData from "../locales/ru.json";
import enData from "../locales/en.json";
import "../style/indexPage.css";

const IndexPage = () => {
    const { i18n, t } = useTranslation();
    const { company } = useParams();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const [companyInfo, setCompanyInfo] = useState(null);

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        if (!company) return;

        const companyData = {
            ru: ruData,
            en: enData
        };

        const formattedCompany = company.charAt(0).toUpperCase() + company.slice(1);
        setCompanyInfo(companyData[i18n.language]?.[formattedCompany]?.company || null);
    }, [company, i18n.language]);

    if (!company) return <p>Loading...</p>;

    if (!companyInfo) {
        return <p>Компания не найдена</p>;
    }

    const companyData = { ru: ruData, en: enData };
    const formattedCompany = company.charAt(0).toUpperCase() + company.slice(1);
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
                    <div className="gallery-title">{t("gallery_title")}</div>
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
