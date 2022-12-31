import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import { testimonial_two } from '../../../data/testimonial-data';

const TestimonialSliderTwo = () => {
   return (
      <section className="testimonial-area pt-120 pb-110">
         <div className="testimonial-bg-style-2">
            <img src="/assets/img/bg/dot-map.png" alt="" />
         </div>
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-2 text-center">
                     <span className="section-subtitle">[ testimonials ]</span>
                     <h2 className="section-main-title mb-45">people say about us</h2>
                  </div>
               </div>
            </div>
            <div className="testimonial-slide-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
               <div className="testimonial-content-wrapper">
                  <div className="swiper-container testimonial-content-style-2">
                     <div className="swiper-wrapper">
                        <Swiper
                           modules={[Scrollbar, A11y, Autoplay]}
                           spaceBetween={30}
                           slidesPerView={1}
                           centeredSlides={true}
                           autoplaydisableoninteraction={"false"}
                           loop={true}
                           autoplay={{
                              delay: 2500,
                              disableOnInteraction: true
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
                                 centeredSlides: false,
                              },
                              1200: {
                                 slidesPerView: 3,
                              },
                           }}

                        >
                           {testimonial_two.slice(0, 3).map((item, index) => {
                              return (
                                 <SwiperSlide key={index}>
                                    <div className="swiper-slidess">
                                       <div className="testimonial-single style-2">
                                          <div className="testimonial-content">
                                             <div className="item-counter">{item.count}</div>
                                             <div className="testimonial-icon">
                                                <i className="fas fa-quote-right"></i>
                                             </div>
                                             <p className="author-quote">{item.desc}</p>
                                             <div className="author-info">
                                                <span className="author-designation">{item.designation}</span>
                                                <h4 className="author-name">{item.author}</h4>
                                             </div>
                                             <div className="author-img">
                                                <img src={item.authorImg} alt="" />
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

export default TestimonialSliderTwo;