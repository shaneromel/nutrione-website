import Link from 'next/link';
import React from 'react';
import ProductSlider from '../elements/product/product-slider';

const ProductSectionFive = () => {
    return (
        <section className="product-area pt-120 pb-70">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8 col-md-8">
                        <div className="section-title style-5">
                            <span className="section-subtitle">featured products</span>
                            <h2 className="section-main-title mb-45">our product</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="product-area-btn product-slider-area-btn style-5">
                            <Link href="/shop"><a className="border-btn"><span>view all</span><i className="fal fa-long-arrow-right"></i></a></Link>
                        </div>
                    </div>
                </div>
                <div className="procuct-wrapper product-slide-wrapper mb-0 wow fadeInUp" data-wow-delay=".3s">
                    <ProductSlider />
                </div>
            </div>
        </section>
    );
};

export default ProductSectionFive;