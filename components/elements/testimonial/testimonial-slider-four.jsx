import React from 'react';
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import { testimonial_four } from '../../../data/testimonial-data';

const TestimonialSliderFour = () => {
    return (
        <section className="testimonial-area pt-120 pb-120">
            <div className="testimonial-bg-style-4">
                <img src="/assets/img/bg/testimonial-4-bg.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title style-4">
                            <span className="section-subtitle">testimonials</span>
                            <h2 className="section-main-title mb-45">happy user feedback</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-4-nav mb-60">
                            <div className="testimonial-button-prev testimonial-4-nav-button"><i
                                className="fal fa-long-arrow-left"></i></div>
                            <div className="testimonial-button-next testimonial-4-nav-button"><i
                                className="fal fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slide-wrapper style-4 wow fadeInUp" data-wow-delay=".3s">
                    <div className="testimonial-content-wrapper">
                        <div className="swiper-container testimonial-content-style-4">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[ Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.testimonial-button-next',
                                        prevEl: '.testimonial-button-prev',
                                    }}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 2,
                                        }
                                    }}

                                >
                                    {testimonial_four.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slidess">
                                                    <div className="testimonial-single style-4">
                                                        <div className="testimonial-content">
                                                            <img className="testimonial-4-shape" src={item.shapeImg} alt="" />
                                                            <div className="item-counter">01</div>
                                                            <div className="testimonial-icon">
                                                                <i className="fas fa-quote-right"></i>
                                                            </div>
                                                            <p className="author-quote">{item.desc}</p>
                                                            <div className="author-meta-rating">
                                                                <div className="testimonial-author-meta">
                                                                    <div className="author-img">
                                                                        <img src={item.authorImg} alt="" />
                                                                    </div>
                                                                    <div className="author-info">
                                                                        <span className="author-designation">{item.designation}</span>
                                                                        <h4 className="author-name">{item.author}</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="author-rating">
                                                                    <div className="rating">
                                                                        <a href="#"><i className={item.starA}></i></a>
                                                                        <a href="#"><i className={item.starB}></i></a>
                                                                        <a href="#"><i className={item.starC}></i></a>
                                                                        <a href="#"><i className={item.starD}></i></a>
                                                                        <a href="#"><i className={item.starE}></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSliderFour;