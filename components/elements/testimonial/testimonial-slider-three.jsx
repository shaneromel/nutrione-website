import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, Controller } from "swiper";
import { testimonial_three } from '../../../data/testimonial-data';

const TestimonialSliderThree = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="testimonial-area pt-170 pb-60">
            <div className="testimonial-bg style-3">
                <img src="/assets/img/bg/testimonial-bg-3.jpg" alt="" />
            </div>
            <div className="container">
                <div className="testimonial-slide-wrapper mb-60 style-3 wow fadeInUp" data-wow-delay=".3s">
                    <div className="testimonial-nav testimonial-3-nav">
                        <div className="testimonial-button-prev testimonial-3-nav-btn"><i className="fal fa-long-arrow-left"></i>
                        </div>
                        <div className="testimonial-button-next testimonial-3-nav-btn"><i className="fal fa-long-arrow-right"></i>
                        </div>
                    </div>
                    <div className="testimonial-icon">
                        <i className='fas fa-quote-right'></i>
                    </div>
                    <div className="testimonial-slide-content-wrapper style-3">
                        <div className="wrapper-line-design"></div>
                        <div className="testimonial-content-wrapper style-3">
                            <div className="swiper-container testimonial-content-slide3">
                                <Swiper
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    loop={true}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    freeMode={false}
                                    watchSlidesProgress={true}
                                    modules={[ Navigation, Controller, FreeMode, Thumbs]}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.testimonial-button-next',
                                        prevEl: '.testimonial-button-prev',
                                    }}
                                >
                                    {testimonial_three.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="testimonial-single style-3">
                                                    <div className="testimonial-content">
                                                        <p className="author-quote">{item.desc}</p>
                                                        <div className="author-info">
                                                            <span className="author-designation">{item.designation}</span>
                                                            <h4 className="author-name">{item.author}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="testimonial-thumb-wrapper style-3">
                            <div className="swiper-container testimonial-thumb3">
                                <Swiper
                                    loop={true}
                                    spaceBetween={0}
                                    slidesPerView={3}
                                    centeredSlides={true}
                                    onSwiper={setThumbsSwiper}
                                    modules={[Controller, FreeMode, Thumbs]}
                                    watchSlidesProgress={false}
                                >
                                    {testimonial_three.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="testimonial-author-meta style-3">
                                                <div className="author-img">
                                                    <img src={item.authorImg} alt=""/>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSliderThree;