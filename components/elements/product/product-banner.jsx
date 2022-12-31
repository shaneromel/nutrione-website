import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import productList from '../../../data/products';

const ProductBanner = () => {
    return (
        <div className="category-area category-area-basic pt-40">
            <div className="container">
                <div className="category-wrapper wow fadeInUp" data-wow-delay=".3s">
                    <div className="swiper-container category-basic-slider">
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
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }}
                            >
                                {productList.slice(12, 15).map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="swiper-slidess">
                                                <div className="category-single category-basic">
                                                    <div className="category-thumb">
                                                        <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="" /></a></Link>
                                                    </div>
                                                    <div className="category-content">
                                                        <span className="in-stock"><span className="stock-amount">{item.stock}</span> {item.productSubTitle}</span>
                                                        <h4 className="category-name"><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h4>
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
    );
};

export default ProductBanner;