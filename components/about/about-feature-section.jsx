import Link from 'next/link';
import React from 'react';

const AboutFeatureSection = () => {
    return (
        <div className="section strategy-area pb-90">
            <div className="container">
                <div className="strategy-wrapper">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>Gardening is the practice of growing and cultivating plants as part of
                                            horticulture. In gardens, ornamental plants are often grown.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/mission-icon.png" alt="" />
                                </div>
                                <h4>our mission</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>Gardening is the practice of growing and cultivating plants as part of
                                            horticulture. In gardens, ornamental plants are often grown.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/vision-icon.png" alt="" />
                                </div>
                                <h4>our vision</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>Gardening is the practice of growing and cultivating plants as part of
                                            horticulture. In gardens, ornamental plants are often grown.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact"><a className="fill-btn">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/approach-icon.png" alt="" />
                                </div>
                                <h4>our approach</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeatureSection;