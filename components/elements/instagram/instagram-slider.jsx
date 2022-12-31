import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const InstagramSlider = () => {
    return (
        <div className="instagram-slider-wrappper wow fadeInUp" data-wow-delay=".3s">
         <div className="swiper-container instagram-slider-active">
            <div className="swiper-wrapper">
                <Swiper
                    modules={[ Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                        1400: {
                            slidesPerView: 7,
                        },
                        1600: {
                            slidesPerView: 8,
                        }
                    }}
                    
                >
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-1.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-2.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-3.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-4.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-5.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-6.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-7.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-8.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-1.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slidess">
                  <div className="instagram-shot">
                     <a href="#"><img src="/assets/img/istagram/insta-shot-2.jpg" alt=""/></a>
                     <div className="instagram-hover-link">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
               </div>
                </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
    );
};

export default InstagramSlider;