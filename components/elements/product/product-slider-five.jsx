import Link from 'next/link';
import React from 'react';
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import productList from '../../../data/products';
import { cart_product } from '../../../redux/features/cart-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProducts } from '../../../redux/features/product-slice';
import ProductModal from '../../common/product-modal';

const ProductSliderFive = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
            <section className="featured-product-area style-2 pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8 col-md-12">
                            <div className="section-title style-5">
                                <span className="section-subtitle">featured product</span>
                                <h2 className="section-main-title mb-45">handpicked product</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="featured-porduct-nav mb-60">
                                <div className="featured-button-prev featured-nav-button"><i className="fal fa-long-arrow-left"></i></div>
                                <div className="featured-button-next featured-nav-button"><i className="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="procuct-wrapper featured-product-slide-wrapper mb-0 wow fadeInUp" data-wow-delay=".3s">
                        <div className="swiper-container featured-product-active">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
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
                                        nextEl: '.featured-button-next',
                                        prevEl: '.featured-button-prev',
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
                                            slidesPerView: 4,
                                        }
                                    }}
                                >
                                    {productList.slice(15, 20).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="product-single style-2">
                                                    <div className="product-thumb">
                                                        <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="" /></a></Link>
                                                        <div className={item.trendingClass}><i className={item.trendingValue}></i></div>
                                                        <div className="product-batches">
                                                            <div className={item.newClass}>{item.newValue}</div>
                                                            <div className={item.discountClass}>{item.discountValue}</div>
                                                        </div>
                                                        <div className="product-item-action">
                                                            <span onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                                            <span data-bs-toggle="modal" data-bs-target="#productModalId" onClick={() => dispatch(getSingleProduct(item))}><i className={item.cartEye}></i></span>
                                                            <span onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="product-description">
                                                        <h4 className="product-name"><Link href={`/shop-details/${item.id}`}><a>{item.productTitle}</a></Link></h4>
                                                        <div className="product-price">
                                                            <span className="price-old">${item.priceOld}</span>
                                                            <span className="price-now">${item.price}</span>
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
            </section>
            <ProductModal />
        </>
    );
};

export default ProductSliderFive;