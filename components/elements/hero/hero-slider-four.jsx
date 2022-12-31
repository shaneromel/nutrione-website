import Link from 'next/link';
import React from 'react';
import { EffectFade, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSliderFour = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner-4-1.jpg',
            sliderSubtitle: 'Best service in new york',
            sliderTitle: 'Welcome To',
            sliderTitleBig: 'Gardomia',
            sliderbtn: 'Get estimate',
            sliderbtn1: 'learn more',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner-2-1.jpg',
            sliderSubtitle: 'Best service in new york',
            sliderTitle: 'Best Garden',
            sliderTitleBig: 'Services',
            sliderbtn: 'Get estimate',
            sliderbtn1: 'learn more',
        }
    ];

    return (
        <div className="banner-area banner-area4 pos-rel">
            <div className="swiper-container slider__active">

                {SliderItem &&
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[EffectFade, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                        >
                            {SliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                    <div className="swiper-slidess">
                                        <div className="single-banner single-banner-3 banner-970 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg4 banner-bg4-1" style={{ backgroundImage: `url(${item.sliderBg})` }}></div>
                                            <div className="container pos-rel">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="banner-content banner-content4 banner-content4-1">
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".3s">{item.sliderTitle}
                                                                <span>{item.sliderTitleBig}</span>
                                                            </h1>
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".5s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                <Link href="/contact"><a className="fill-btn">{item.sliderbtn} <i className="fal fa-long-arrow-right"></i></a></Link>
                                                                <Link href="/contact"><a className="border-btn">{item.sliderbtn1} <i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
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
                }
            </div>
        </div>
    );
};

export default HeroSliderFour;