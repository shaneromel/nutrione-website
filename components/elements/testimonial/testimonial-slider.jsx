import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Controller } from "swiper";
import { testimonial, testimonial_nav } from '../../../data/testimonial-data';

const TestimonialSlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="testimonial-slide-wrapper mb-60 style-1">
            <div className="testimonial-content-wrapper style-1">
                <div className="swiper-container testimonial-content-slide">
                    <Swiper
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        freeMode={false}
                        watchSlidesProgress={true}
                        modules={[Controller, FreeMode, Thumbs]}
                    >
                        {testimonial.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-single style-1">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <div className="rating">
                                                <a href="#"><i className={item.starA}></i></a>
                                                <a href="#"><i className={item.starB}></i></a>
                                                <a href="#"><i className={item.starC}></i></a>
                                                <a href="#"><i className={item.starD}></i></a>
                                                <a href="#"><i className={item.starE}></i></a>
                                            </div>
                                            <p className="author-quote">{item.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </div>
            </div>
            <div className="testimonial-thumb-wrapper style-1">
                <div className="swiper-container testimonial-thumb">
                    <Swiper
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={2}
                        onSwiper={setThumbsSwiper}
                        modules={[Controller, FreeMode, Thumbs]}
                        watchSlidesProgress={false}
                    >
                        {testimonial_nav.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-author-meta style-1">
                                    <div className="author-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="author-info">
                                        <span className="author-designation">{item.designation}</span>
                                        <h4 className="author-name">{item.author}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;