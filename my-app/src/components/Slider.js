import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/slider.css";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Данные слайдов на разных языках
const slidesData = {
    ru: [
        {
            id: 1,
            backgroundDesktop: "/images/Slider_bkg.png",
            backgroundMobile: "/images/mobile_slider_bkg.png",
            foreground: "/images/wurtz_photo.png",
            title: "Инструменты зарубежных компаний",
            buttonText: "Сделать заказ",
            link: "#",
        },
        {
            id: 2,
            backgroundDesktop: "/images/Slider_bkg.png",
            backgroundMobile: "/images/mobile_slider_bkg.png",
            foreground: "/images/wurtz_photo.png",
            title: "Лучшие решения для вашего бизнеса",
            buttonText: "Подробнее",
            link: "#",
        },
        {
            id: 3,
            backgroundDesktop: "/images/Slider_bkg.png",
            backgroundMobile: "/images/mobile_slider_bkg.png",
            foreground: "/images/wurtz_photo.png",
            title: "Лучшие решения для вашего бизнеса",
            buttonText: "Подробнее",
            link: "#",
        },
    ],
    en: [
        {
            id: 1,
            backgroundDesktop: "/images/Slider_bkg.png",
            backgroundMobile: "/images/mobile_slider_bkg.png",
            foreground: "/images/wurtz_photo.png",
            title: "Tools from foreign companies",
            buttonText: "Place an order",
            link: "#",
        },
        {
            id: 2,
            backgroundDesktop: "/images/Slider_bkg.png",
            backgroundMobile: "/images/mobile_slider_bkg.png",
            foreground: "/images/wurtz_photo.png",
            title: "Best solutions for your business",
            buttonText: "Learn more",
            link: "#",
        },
        {
            id: 3,
            backgroundDesktop: "/images/Slider_bkg.png",
            backgroundMobile: "/images/mobile_slider_bkg.png",
            foreground: "/images/wurtz_photo.png",
            title: "Best solutions for your business",
            buttonText: "Learn more",
            link: "#",
        },
    ],
};

const Slider = () => {
    const { t, i18n } = useTranslation(); // Получаем функцию t и объект i18n для работы с языками
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 481);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const updateBackground = () => {
        setIsMobile(window.innerWidth <= 481);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "ru";
        if (i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
        setCurrentLanguage(savedLanguage);

        // Слушаем изменения размера окна
        updateBackground();
        window.addEventListener("resize", updateBackground);
        return () => window.removeEventListener("resize", updateBackground);
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        if (i18n.language !== lng) {
            i18n.changeLanguage(lng);
            localStorage.setItem("language", lng);
            setCurrentLanguage(lng);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current) {
                const swiper = swiperRef.current.swiper;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }, 100);
    }, []);

    return (
        <div className="slider-container">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                style={{ height: "100%" }}
            >
                {slidesData[currentLanguage].map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="slide"
                            style={{
                                backgroundImage: `url(${isMobile ? slide.backgroundMobile : slide.backgroundDesktop})`,
                            }}
                        >
                            {/* Левая часть с текстом */}
                            <div className="slide-text">
                                <h2>{slide.title}</h2>
                                <a href={slide.link} className="btn">
                                    {slide.buttonText}
                                </a>
                            </div>

                            {/* Правая часть с изображением товара */}
                            <div className="slide-foreground">
                                <img src={slide.foreground} alt={slide.title} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кастомные кнопки */}
            <div className="swiper-navigation-buttons">
                <div ref={prevRef} className="swiper-button-prev"></div>
                <div ref={nextRef} className="swiper-button-next"></div>
            </div>
        </div>
    );
};

export default Slider;
