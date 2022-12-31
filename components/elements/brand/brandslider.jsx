import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const BrandSlider = ({brand_classA}) => {
    return (
        <div className={`${brand_classA ? brand_classA : 'clients-area clients-area2'}`}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="clients-wrapper">
                            <div className="swiper-container client-active">
                                <div className="swiper-wrapper">
                                <Swiper
                                    modules={[ Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
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
                                                <a href="#"><img src="/assets/img/client/client-6.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-7.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-8.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-9.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-10.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-6.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-8.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slidess">
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-7.png" alt=""/></a>
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

export default BrandSlider;