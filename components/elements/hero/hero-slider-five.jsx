import Link from 'next/link';
import React from 'react';
import { Navigation, EffectFade, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSliderFive = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner-5-1.png',
            sliderSubtitle: 'start from $29',
            sliderTitle: 'Jik Flower Scaping',
            sliderbtn: 'request an estimate',
            sliderbtn1: 'our shop',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner-5-2.png',
            sliderSubtitle: 'start from $28',
            sliderTitle: 'k.i Flower plants',
            sliderbtn: 'request an estimate',
            sliderbtn1: 'our shop',
        }
    ];

    return (
        <div className="banner-area banner-area5 pos-rel">
            <div className="banner-5-support">
                <div className="irc-item support-meta">
                    <div className="irc-item-icon">
                        <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div className="irc-item-content">
                        <p>feel free quote</p>
                        <div className="support-mail"><a href="mailto:info@webmail.com">info@webmail.com</a></div>
                    </div>
                </div>
            </div>
            {SliderItem &&
                <div className="swiper-container slider__active">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[ Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                            navigation={{
                                clickable: true,
                                nextEl: '.slider-button-next',
                                prevEl: '.slider-button-prev',
                            }}
                        >
                            {SliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                    <div className="swiper-slidess">
                                        <div className="single-banner single-banner-5 banner-970 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg5 banner-bg5-1"></div>
                                                <div className="container pos-rel">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-8 col-md-8">
                                                            <div className="banner-content banner-content5 banner-content5-1 pt-10">
                                                                <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                    <span>{item.sliderSubtitle}</span>
                                                                </div>
                                                                <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                                <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                    <Link href="/contact"><a className="fill-btn">{item.sliderbtn}</a></Link>
                                                                    <Link href="/shop"><a className="fill-btn banner-shop-btn">{item.sliderbtn1}</a></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4">
                                                            <div className="banner-5-img">
                                                                <img className="pro-img" src={item.sliderBg} alt=""/>
                                                                <span className="round-circle-1"></span>
                                                                <span className="round-circle-2"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="slider-nav slider-5-nav">
                        <div className="slider-button-prev slider-5-nav-btn"><i className="fal fa-long-arrow-left"></i></div>
                        <div className="slider-button-next slider-5-nav-btn"><i className="fal fa-long-arrow-right"></i></div>
                    </div>
                </div>
            }
        </div>
    );
};

export default HeroSliderFive;