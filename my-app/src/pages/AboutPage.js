import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PartnersList from "../components/PartnersList";
import "../style/aboutPage.css";

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "ru";
        if (i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
        setCurrentLanguage(savedLanguage);
    }, [i18n.language]);

    return (
        <div className="about-page">
            {/* Hero section */}
            <section className="about-hero">
                <div className="about-hero-container">
                    <h1>{t('aboutPage.title')}</h1>
                    <p className="hero-description">{t('aboutPage.subtitle')}</p>
                </div>
            </section>

            {/* Main content section */}
            <section className="about-main-content">
                <div className="about-main-container">
                    {/* Company history */}
                    <div className="content-section">
                        <h2>{t('aboutPage.historyTitle')}</h2>
                        <p>{t('aboutPage.historyContent')}</p>
                        <p>{t('aboutPage.historyContent2')}</p>
                    </div>

                    {/* Company images section */}
                    <div className="about-gallery">
                        <div className="gallery-main">
                            <img
                                src="/images/about/main.png"
                                alt={t('aboutPage.mainImageAlt')}
                                className="main-gallery-image"
                            />
                        </div>
                        <div className="gallery-small">
                            <img 
                                src="/images/about/workshop.png" 
                                alt={t('aboutPage.workshopAlt')}
                                className="small-gallery-image"
                            />
                            <img 
                                src="/images/about/parts.png" 
                                alt={t('aboutPage.partsAlt')}
                                className="small-gallery-image"
                            />
                        </div>
                    </div>

                    {/* Mission and vision */}
                    <div className="content-section">
                        <h2>{t('aboutPage.missionTitle')}</h2>
                        <p>{t('aboutPage.missionContent')}</p>
                        
                        <h2>{t('aboutPage.visionTitle')}</h2>
                        <p>{t('aboutPage.visionContent')}</p>
                    </div>

                    {/* Advantages section */}
                    <div className="advantages-section">
                        <h2>{t('aboutPage.advantagesTitle')}</h2>
                        <div className="advantages-grid">
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <img src="/images/Slider_bkg.png" alt="Quality" />
                                </div>
                                <h3>{t('aboutPage.advantage1Title')}</h3>
                                <p>{t('aboutPage.advantage1')}</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <img src="/images/Slider_bkg.png" alt="Expertise" />
                                </div>
                                <h3>{t('aboutPage.advantage2Title')}</h3>
                                <p>{t('aboutPage.advantage2')}</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <img src="/images/Slider_bkg.png" alt="Support" />
                                </div>
                                <h3>{t('aboutPage.advantage3Title')}</h3>
                                <p>{t('aboutPage.advantage3')}</p>
                            </div>
                            <div className="advantage-card">
                                <div className="advantage-icon">
                                    <img src="/images/Slider_bkg.png" alt="Delivery" />
                                </div>
                                <h3>{t('aboutPage.advantage4Title')}</h3>
                                <p>{t('aboutPage.advantage4')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="cta-section">
                        <h2>{t('aboutPage.ctaTitle')}</h2>
                        <p>{t('aboutPage.ctaText')}</p>
                        <a href="/contact" className="cta-button">{t('aboutPage.ctaButton')}</a>
                    </div>
                </div>
            </section>
            
            {/* Partners List Section */}
            <PartnersList />
        </div>
    );
};

export default AboutPage;