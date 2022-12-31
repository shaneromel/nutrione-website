import Link from 'next/link';
import React from 'react';

const FoundationSection = () => {
    return (
        <section className="foundation-area foundation-area-bg pt-120 pb-60">
            <div className="foundation-bg-shape">
                <img src="/assets/img/shape/pattern.png" alt=""/>
            </div>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="foundation-img mb-60">
                            <img src="/assets/img/about/foundation.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="foundation-content mb-60">
                            <div className="section-title">
                                <span className="section-subtitle">since from 2000</span>
                                <h2 className="section-main-title mb-20">Gardeny offers a
                                    full-service</h2>
                            </div>
                            <p>Most gardens consist of a mix of natural and constructed elements, although
                                even very natural gardens are always an inherently artificial creation. Natural
                                elements present in a garden principally. </p>
                            <div className="founder-meta mt-45">
                                <div className="founder-info-meta">
                                    <div className="founder-img">
                                        <img src="/assets/img/team/founder.jpg" alt=""/>
                                    </div>
                                    <div className="founder-desciption">
                                        <span className="designation">founder</span>
                                        <h4 className="founder-name">humble d. dowson</h4>
                                    </div>
                                </div>
                                <Link href="/contact"><a className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;