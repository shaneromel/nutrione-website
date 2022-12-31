import Link from 'next/link';
import React, { useState } from 'react';
import { EffectFade, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalVideo from 'react-modal-video';

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSliderThree = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner-3-1.jpg',
            sliderSubtitle: 'since from 2000',
            sliderTitle: 'Jik Flower Scaping',
            sliderbtn: 'Get estimate',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner-4-1-dark.jpg',
            sliderSubtitle: 'since from 2000',
            sliderTitle: 'k.i Flower plants',
            sliderbtn: 'Get estimate',
        },
        {
            id: 3,
            sliderBg: '/assets/img/banner/banner-1-1-dark.jpg',
            sliderSubtitle: 'since from 2000',
            sliderTitle: 'make dream gardening',
            sliderbtn: 'Get estimate',
        }
    ];

    return (
        <div className="banner-area banner-area3 pos-rel">
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
                                            <div className="banner-bg banner-bg3 banner-bg3-1" style={{ backgroundImage: `url(${item.sliderBg})` }}></div>
                                            <div className="container pos-rel">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="banner-content banner-content3 banner-content3-1 banner-plant-shape">
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                <Link href="/contact"><a className="fill-btn-rounded">{item.sliderbtn}<i className="fal fa-long-arrow-right"></i></a></Link>
                                                                <span className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
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

export default HeroSliderThree;