import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import productList from '../../../data/products';
import { cart_product } from '../../../redux/features/cart-slice';
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct, selectProducts } from '../../../redux/features/product-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import ProductModal from '../../common/product-modal';

const ProductSlider = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
            <div className="swiper-container product-active">
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
                        {productList.slice(0, 10).map((item, index) => {

                            return (
                                <SwiperSlide key={index}>
                                    <div className="product-single">
                                        <div className="product-thumb">
                                            <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="" /></a></Link>
                                            <div className="product-item-action">
                                                <span onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                                                <span onClick={() => dispatch(getSingleProduct(item))} data-bs-toggle="modal" data-bs-target="#productModalId"><i className={item.cartEye}></i></span>
                                                <span onClick={() => dispatch(add_to_wishlist(item))}><i className={item.cartHeart}></i></span>
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <div className="rating">
                                                <a href="#"><i className={item.ratingA}></i></a>
                                                <a href="#"><i className={item.ratingB}></i></a>
                                                <a href="#"><i className={item.ratingC}></i></a>
                                                <a href="#"><i className={item.ratingD}></i></a>
                                                <a href="#"><i className={item.ratingE}></i></a>
                                            </div>
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
            <ProductModal />

        </>
    );
};

export default ProductSlider;