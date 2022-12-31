import Link from 'next/link';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import ProductModal from '../../common/product-modal';

const SingleProduct = ({ item }) => {
    return (
        <>
            <SwiperSlide>
                <div className="product-single">
                    <div className="product-thumb">
                        <Link href={`/shop-details/${item.id}`}><a><img src={item.productImg} alt="" /></a></Link>
                        <div className="product-item-action">
                            <span onClick={() => dispatch(cart_product(item))}><i className={item.cartIcon}></i></span>
                            <span data-bs-toggle="modal" data-bs-target="#productModalId"><i className={item.cartEye}></i></span>
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
            <ProductModal item={item} />
        </>
    );
};

export default SingleProduct;