import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const BrandSliderTwo = ({brand_class , brand_classA}) => {
    return (
        <div className={`clients-area ${brand_classA ? 'brand_classA' : ''}`}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className={`clients-wrapper ${brand_class ? 'style-4' : 'clients-container-wrapped style-2'}`}>
                            <div className="swiper-container client-active">
                                <div className="swiper-wrapper">
                                <Swiper
                                    modules={[ Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                        1400: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-1.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-2.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-3.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-4.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-5.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-1.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSliderTwo;