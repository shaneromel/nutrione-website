import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product } from '../../redux/features/cart-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';

const ProductModal = ({item}) => {
    const { product } = useSelector(state => state.products);

    const dispatch = useDispatch();
    return (
        <div className="modal fade" id="productModalId" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                <div className="modal-content">
                    <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
                        </div>
                        <div className="product__modal-inner">
                  
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product__modal-box">
                                        <div className="tab-content" id="modalTabContent">
                                            <div className="tab-pane fade show active" id="nav1" role="tabpanel"
                                                aria-labelledby="nav1-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src={product?.productImg} alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="/assets/img/product/product-3.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="/assets/img/product/product-4.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="/assets/img/product/product-5.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="nav nav-tabs" id="modalTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                                    aria-selected="true">
                                                    <img src={product?.productImg} alt="" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2"
                                                    type="button" role="tab" aria-controls="nav2" aria-selected="false">
                                                    <img src="/assets/img/product/product-3.png" alt="" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3"
                                                    type="button" role="tab" aria-controls="nav3" aria-selected="false">
                                                    <img src="/assets/img/product/product-4.png" alt="" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4"
                                                    type="button" role="tab" aria-controls="nav4" aria-selected="false">
                                                    <img src="/assets/img/product/product-5.png" alt="" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product__modal-content">
                                        <h4><Link href={`/shop-details/${product?.id}`}><a>{product?.productTitle}</a></Link></h4>
                                        <div className="product__modal-des mb-40">
                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum
                                                claritatem.
                                                Investigationes demonstraverunt </p>
                                        </div>
                                        <div className="product__stock">
                                            <span>Availability :</span>
                                            <span>In Stock</span>
                                        </div>
                                        <div className="product__stock sku mb-30">
                                            <span>SKU:</span>
                                            <span>Juicera C49J89: £875, Debenhams Plus</span>
                                        </div>
                                        <div className="product__review d-sm-flex">
                                            <div className="rating rating__shop mb-15 mr-35">
                                                <ul>
                                                    <li><a href="#"><i className={product?.ratingA}></i></a></li>
                                                    <li><a href="#"><i className={product?.ratingB}></i></a></li>
                                                    <li><a href="#"><i className={product?.ratingC}></i></a></li>
                                                    <li><a href="#"><i className={product?.ratingD}></i></a></li>
                                                    <li><a href="#"><i className={product?.ratingE}></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__add-review mb-15">
                                                <span><span>1 Review</span></span>
                                                <span><span>Add Review</span></span>
                                            </div>
                                        </div>
                                        <div className="product__price">
                                            <span>${product?.price}</span>
                                        </div>
                                        <div className="product__modal-form">
                                            <div className="product-quantity-cart mb-30">
                                                <button type='button' className="fill-btn" onClick={()=> dispatch(cart_product(product))}>Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="product__modal-links">
                                            <ul>
                                                <li><button type='button' title="Add to Wishlist" onClick={() => dispatch(add_to_wishlist(product))}><i className="fal fa-heart"></i></button></li>
                                                <li><a href="#" title="Compare"><i className="far fa-sliders-h"></i></a></li>
                                                <li><a href="#" title="Print"><i className="fal fa-print"></i></a></li>
                                                <li><a href="#" title="Share"><i className="fal fa-share-alt"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;