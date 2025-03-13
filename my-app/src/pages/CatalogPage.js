import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../style/catalog.css";
import PartnersList from "../components/PartnersList";

const catalogSections = [
    {
        key: "tools",
        items: [
            { id: 1, name: "McMASTER-CARR", image: "/images/catalog/tools/mcmaster.png", link: "mcmaster" },
            { id: 2, name: "Roebuck", image: "/images/catalog/tools/roebuck.png", link: "roebuck" },
            { id: 3, name: "WURTH", image: "/images/catalog/tools/wurth.png", link: "wurth" },
            { id: 4, name: "ECLIPSE", image: "/images/catalog/tools/eclipse.png", link: "eclipse" },
            { id: 5, name: "CUTLINE", image: "/images/catalog/tools/cutline.png", link: "cutline" }
        ]
    },
    {
        key: "belts",
        items: [
            { id: 6, name: "Gates", image: "/images/catalog/belts/gates.png", link: "gates" },
            { id: 7, name: "Continental", image: "/images/catalog/belts/continental.png", link: "continental" },
            { id: 8, name: "Optibelt", image: "/images/catalog/belts/optibelt.png", link: "optibelt" },
            { id: 9, name: "Dunham-Bush", image: "/images/catalog/belts/dunham-bush.png", link: "dunham-bush" }
        ]
    },
    {
        key: "hoses",
        items: [
            { id: 10, name: "Gates", image: "/images/catalog/hoses/gates.png", link: "gates-hose" },
            { id: 11, name: "AMETEK", image: "/images/catalog/hoses/ametek.png", link: "ametek" },
            { id: 12, name: "AFLEX HOSE", image: "/images/catalog/hoses/aflex.png", link: "aflex" },
            { id: 13, name: "Parker", image: "/images/catalog/hoses/parker.png", link: "parker-hose" },
            { id: 14, name: "STATS GROUP", image: "/images/catalog/hoses/stats-group.png", link: "stats-group" },
            { id: 15, name: "Knowsley SK", image: "/images/catalog/hoses/knowsley-sk.png", link: "knowsley-sk" },
            { id: 16, name: "Kuriyama", image: "/images/catalog/hoses/kuriyama.png", link: "kuriyama" }
        ]
    },
    {
        key: "bearings",
        items: [
            { id: 17, name: "FAG", image: "/images/catalog/bearings/fag.png", link: "fag" },
            { id: 18, name: "SKF", image: "/images/catalog/bearings/skf.png", link: "skf" },
            { id: 19, name: "NSK", image: "/images/catalog/bearings/nsk.png", link: "nsk" },
            { id: 20, name: "NACHI", image: "/images/catalog/bearings/nachi.png", link: "nachi" },
            { id: 21, name: "NTN", image: "/images/catalog/bearings/ntn.png", link: "ntn" },
            { id: 22, name: "INA", image: "/images/catalog/bearings/ina.png", link: "ina" }
        ]
    }
];


const Catalog = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "ru";
        if (i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
        setCurrentLanguage(savedLanguage);
    }, [i18n]);

    return (
        <div className="catalogPage">
            <section className="catalog">
                {catalogSections.map((section, index) => (
                    <div key={index} className="catalog-section">
                        <h2 className="catalog-title">{t(`catalog.${section.key}`)}</h2>
                        <div className="catalog-grid">
                            {section.items.map((item) => (
                                <Link key={item.id} to={`/catalog/${item.link}`} className="catalog-item">
                                    <img src={item.image} alt={item.name} className="catalog-image"/>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <PartnersList/>
        </div>
    );

};

export default Catalog;
