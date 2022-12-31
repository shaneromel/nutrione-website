import Link from 'next/link';
import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <img src="/assets/img/about/about-thumb.jpg" alt=""/>
                            <div className="about-thumb-meta">
                                <p>since from 2000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <span className="section-subtitle">about us</span>
                                <h2 className="section-main-title mb-20">an Award Winning gardening studio</h2>
                            </div>
                            <p className="mb-30">Most gardens consist of a mix of natural and constructed elements, although even
                                natural gardens are always an inherently artificial creation. Natural elements present
                                in a garden principally.</p>
                            <p className="mb-45">Design affects human. It changes the view of life and the self-image. According to
                                the opinion specialists, a good design is a space.</p>
                            <div className="about-btn">
                                <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;