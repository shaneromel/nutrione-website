import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const ClientsSection = () => {
    return (
        <section className="clients-area style-3 pt-120 pb-00">
            <div className="clients-bg-img">
                <img src="/assets/img/bg/weeder-rope.png" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-10">
                        <div className="circle-border-logo">
                            <img src="/assets/img/logo/circle-border-logo.png" alt="" />
                        </div>
                        <div className="section-title style-3 text-center">
                            <span className="section-subtitle">since from 2000</span>
                            <h2 className="section-main-title mb-45">Gardenias’ mission is to provide
                                our customers service</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="clients-wrapper style-3">
                            <div className="swiper-container client-active">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Scrollbar, A11y, Autoplay]}
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
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-1.png" alt="" /></a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-2.png" alt="" /></a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-3.png" alt="" /></a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-4.png" alt="" /></a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-5.png" alt="" /></a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="client-single">
                                                <a href="#"><img src="/assets/img/client/client-1.png" alt="" /></a>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-action-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-action-bg-shape">
                        <img src="/assets/img/shape/pattern-1270.png" alt="" />
                    </div>
                    <h3><i className="flaticon-house"></i>Provides Hassle-Free Backyard Transformations with Artistic Solutions.</h3>
                    <Link href="/contact"><a className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;