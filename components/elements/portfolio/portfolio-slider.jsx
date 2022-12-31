import Link from 'next/link';
import React from 'react';
import { Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import portfolioList from '../../../data/portfolio-data';

import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';


const PortfolioSlider = () => {
    const [photoIndex, setPhotoIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const lightboxImages = portfolioList.map(img => img.portfolioImg);
    const images = lightboxImages;
    return (
        <>
            {open && (
                <Lightbox

                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}

            <section className="portfolio-area pt-120 pb-90 portfolio-bg portfolio-full-width">
                <div className="containers">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8">
                            <div className="section-title style-2 text-center">
                                <span className="section-subtitle">[ showcase ]</span>
                                <h2 className="section-main-title mb-45">watch our gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-wrapper portfolio-slide-wrapper mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="swiper-container portfolio-active-style-2">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    observer={true}
                                    observeParents={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.portfolio-pagination',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                        }
                                    }}

                                >
                                    {portfolioList.slice(4, 9).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <motion.div animate={{ scale: 1 }}
                                                    initial={{ scale: 0.9 }}
                                                    exit={{ scale: 1 }}
                                                    transition={{ duration: 0.8 }} layout
                                                    key={item.id} className="tp-creative-item">
                                                    <div className="swiper-slidess">
                                                        <div className="portfolio-single portfolio-hover-style style-2">
                                                            <div className="portfolio-thumb">
                                                                <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt="" /></a></Link>
                                                                <div className="portfolio-content">
                                                                    <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                                                    <div className="portfolio-inner">
                                                                        <div className="portfolio-inner-text">
                                                                            <span className="portfolio-tag">{item.portfolioTag}</span>
                                                                            <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                                        </div>
                                                                        <span onClick={setOpen}>
                                                                            <button className="icon-btn image-popups" onClick={() => setPhotoIndex(index)}><i className={item.portfolioIcon}></i></button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div className="portfolio-style-2-pagination-wrapper mt-50">
                                <div className="portfolio-pagination portfolio-style-2-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSlider;