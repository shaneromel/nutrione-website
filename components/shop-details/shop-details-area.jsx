import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cart_product, decrease_quantity } from '../../redux/features/cart-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import Breadcrumb from '../common/breadcrumb';

const ShopDetailsArea = ({ item }) => {
    const dispatch= useDispatch()
    const {cartProducts} = useSelector(state => state.cart);
    const findProduct = cartProducts.find(i => Number(i?.id) === Number(item?.id))
    const handleChange = (e) => {}
    return (
        <>
            <Breadcrumb breadTitle={'product details'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'shop'} />

            <section className="shop-details-area pt-120 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="product-d-img-tab-wrapper mb-60">
                                <div className="product-d-img-nav">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                                                data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                                aria-selected="false">
                                                <img src={item.productImg} alt="..." />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2"
                                                type="button" role="tab" aria-controls="pro-2" aria-selected="true">
                                                <img src="/assets/img/product/product-8.png" alt="..." />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                                                type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                                <img src="/assets/img/product/product-12.png" alt="..." />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-d-img-tab">
                                    <div className="tab-content" id="productDetailsTab">
                                        <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                                            aria-labelledby="pro-1-tab">
                                            <img className="active" src={item.productImg} alt="..." />
                                        </div>
                                        <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                                            <img className="active" src="/assets/img/product/product-8.png" alt="..." />
                                        </div>
                                        <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                                            <img className="active" src="/assets/img/product/product-12.png" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-side-info mb-60">
                                <div className="product-category-review">
                                    <div className="product-d-category">
                                        Organic, Food
                                    </div>
                                    <div className="product-d-review">
                                        <div className="rating">
                                            <a href="#"><i className={item.ratingA}></i></a>
                                            <a href="#"><i className={item.ratingB}></i></a>
                                            <a href="#"><i className={item.ratingC}></i></a>
                                            <a href="#"><i className={item.ratingD}></i></a>
                                            <a href="#"><i className={item.ratingE}></i></a>
                                        </div>
                                        <span>10 Reviews</span>
                                    </div>
                                </div>
                                <h4 className="product-name">{item.productTitle}</h4>
                                <div className="product-price">
                                    <span className="price-old">${item.priceOld}</span>
                                    <span className="price-now">${item.price}</span>
                                </div>

                                <p className="mb-30">Gardomia has brought to you 3 Pieces Combo Pack PS23 garden solution. It is a
                                    completely modern product and you feel comfortable to put on your garden.
                                    Buy it at the best price.</p>
                                <div className="product-quantity-cart mb-30">
                                    <div className="product-quantity-form">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <button onClick={()=> dispatch(decrease_quantity(item))} className="cart-minus"><i className="far fa-minus"></i></button>
                                            <input className="cart-input" type="text" onChange={handleChange}
                                            value={findProduct?.quantity ? findProduct?.quantity : 0} />
                                            <button className="cart-plus" onClick={()=> dispatch(cart_product(item))}><i className="far fa-plus"></i></button>
                                        </form>
                                    </div>
                                    <Link href="/cart"><a className="fill-btn"><i className="fas fa-shopping-basket"></i>Add to Cart</a></Link>
                                    <button className="border-btn" type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fas fa-heart"></i></button>
                                </div>
                                <div className="product-d-meta sku mb-10">
                                    <span>SKU:</span>
                                    <span>BO1D0MX8SJ</span>
                                </div>
                                <div className="product-d-meta ockcategories mb-10">
                                    <span>Categories:</span>
                                    <span>Garden, Flower, Leaf</span>
                                </div>
                                <div className="product-d-meta tags mb-10">
                                    <span>Tags:</span>
                                    <span>Vegetable, Flower, Leaf</span>
                                </div>
                                <div className="product-d-meta share mb-10">
                                    <span>Share:</span>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_info-faq-area pb-0 pt-20 wow fadeInUp" data-wow-delay=".3s">
                        <div className="product-details-tab-wrapper">
                            <nav className="product-details-nav mb-30">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="pro-info-1-tab" data-bs-toggle="tab" href="#pro-info-1"
                                        role="tab" aria-selected="true">Description</a>
                                    <a className="nav-item nav-link" id="pro-info-2-tab" data-bs-toggle="tab" href="#pro-info-2"
                                        role="tab" aria-selected="false">Additional Information</a>
                                    <a className="nav-item nav-link" id="pro-info-3-tab" data-bs-toggle="tab" href="#pro-info-3"
                                        role="tab" aria-selected="false">Reviews (3)</a>
                                </div>
                            </nav>
                            <div className="product-details-content mb-30">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="pro-info-1" role="tabpanel">
                                        <div className="tabs-wrapper mt-0">
                                            <div className="product__details-des">
                                                <p>In marketing a product is an object or system made available for consumer use it is
                                                    anything that can be offered to a
                                                    market to
                                                    the desire or need of a retailing, products are often referred to as merchandise,
                                                    and in manufacturing, products are
                                                    bought as
                                                    materials and then sold as finished goods. A service regarded to as a type of
                                                    product. Commodities are usually raw
                                                    materials
                                                    metals and agricultural products, but a commodity can also be anything wide the open
                                                    market. In project management,
                                                    the formal definition of the project deliverables</p>
                                                <p className="mb-0">A product can be classified as tangible or intangible. A tangible
                                                    product is a
                                                    physical object that can be perceived by
                                                    touch
                                                    building, vehicle, gadget, An intangible product is a product that can only be
                                                    perceived indirectly such as an insurance
                                                    policy.
                                                    can be broadly classified under intangible be durable or non durable. A product line
                                                    is a group of products that are
                                                    closely
                                                    either because they function in a similar manner, are sold to the same
                                                    customergroups.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pro-info-2" role="tabpanel">
                                        <div className="tabs-wrapper mt-0">
                                            <div className="product__details-info">
                                                <ul>
                                                    <li>
                                                        <h6>Weight</h6>
                                                        <span>2 lbs</span>
                                                    </li>
                                                    <li>
                                                        <h6>Dimensions</h6>
                                                        <span>12 × 16 × 19 in</span>
                                                    </li>
                                                    <li>
                                                        <h6>Product</h6>
                                                        <span>Purchase this product on rag-bone.com</span>
                                                    </li>
                                                    <li>
                                                        <h6>Color</h6>
                                                        <span>Gray, Black</span>
                                                    </li>
                                                    <li>
                                                        <h6>Size</h6>
                                                        <span>S, M, L, XL</span>
                                                    </li>
                                                    <li>
                                                        <h6>Model</h6>
                                                        <span>Model </span>
                                                    </li>
                                                    <li>
                                                        <h6>Shipping</h6>
                                                        <span>Standard shipping: $5,95</span>
                                                    </li>
                                                    <li>
                                                        <h6>Care Info</h6>
                                                        <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                                                    </li>
                                                    <li>
                                                        <h6>Brand</h6>
                                                        <span>Kazen</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pro-info-3" role="tabpanel">
                                        <div className="tabs-wrapper mt-0">
                                            <div className="course-review-item mb-30">
                                                <div className="course-reviews-img">
                                                    <a href="#"><img src="/assets/img/testimonial/course-reviews-1.png"
                                                        alt="image not found" /></a>
                                                </div>
                                                <div className="course-review-list">
                                                    <h5><a href="#">Sotapdi Kunda</a></h5>
                                                    <div className="course-start-icon">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span>55 min ago</span>
                                                    </div>
                                                    <p>Very clean and organized with easy to follow tutorials, Exercises, and
                                                        solutions.
                                                        This course does start from the beginning with very little knowledge and
                                                        gives a
                                                        great overview of common tools used for data science and progresses into
                                                        more
                                                        complex concepts and ideas.</p>
                                                </div>
                                            </div>
                                            <div className="course-review-item mb-30">
                                                <div className="course-reviews-img">
                                                    <a href="#"><img src="/assets/img/testimonial/course-reviews-2.png"
                                                        alt="image not found" /></a>
                                                </div>
                                                <div className="course-review-list">
                                                    <h5><a href="#">Samantha</a></h5>
                                                    <div className="course-start-icon">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span>45 min ago</span>
                                                    </div>
                                                    <p>The course is good at explaining very basic intuition of the concepts. It
                                                        will get
                                                        you scratching the surface so to say. where this course is unique is the
                                                        implementation methods are so well defined Thank you to the team !.</p>
                                                </div>
                                            </div>
                                            <div className="course-review-item mb-30">
                                                <div className="course-reviews-img">
                                                    <a href="#"><img src="/assets/img/testimonial/course-reviews-3.png"
                                                        alt="image not found" /></a>
                                                </div>
                                                <div className="course-review-list">
                                                    <h5><a href="#">Michell Mariya</a></h5>
                                                    <div className="course-start-icon">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span>30 min ago</span>
                                                    </div>
                                                    <p>This course is amazing..!
                                                        I started this course as a beginner and learnt a lot. Instructors are great.
                                                        Query
                                                        handling can be improved.Overall very happy with the course.</p>
                                                </div>
                                            </div>
                                            <div className="product__details-comment ">
                                                <div className="comment-title mb-20">
                                                    <h3>Add a review</h3>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                </div>
                                                <div className="comment-rating mb-20">
                                                    <span>Overall ratings</span>
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="comment-input-box mb-0">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-xxl-12">
                                                                <textarea placeholder="Your review"
                                                                    className="comment-input comment-textarea mb-20"></textarea>
                                                            </div>
                                                            <div className="col-xxl-6">
                                                                <div className="comment-input mb-20">
                                                                    <input type="text" placeholder="Your Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-6">
                                                                <div className="comment-input mb-20">
                                                                    <input type="email" placeholder="Your Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="comment-submit">
                                                                    <button type="submit" className="fill-btn">Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopDetailsArea;