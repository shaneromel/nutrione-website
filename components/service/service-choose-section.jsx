import React from 'react';

const ServiceChooseSection = () => {
    return (
        <section className="choose-area pt-120 pb-120">
            <div className="choose-bg">
                <img src="/assets/img/bg/choose-bg.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-end wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="choose-wrapper">
                            <div className="choose-inner">
                                <div className="choose-content">
                                    <div className="section-title">
                                        <span className="section-subtitle">why choose us</span>
                                        <h2 className="section-main-title mb-35">Any Gardening
                                            Services?</h2>
                                    </div>
                                    <div className="choose-list">
                                        <div className="irc-item choose-item">
                                            <div className="irc-item-icon">
                                                <img src="/assets/img/icon/choose-icon1.png" alt="" />
                                            </div>
                                            <div className="irc-item-content">
                                                <h4>Quality & Reliability</h4>
                                                <p>Most gardens consist of a mix of natural & constructed
                                                    elements, although even very natural garden</p>
                                            </div>
                                        </div>
                                        <div className="irc-item choose-item">
                                            <div className="irc-item-icon">
                                                <img src="/assets/img/icon/choose-icon2.png" alt="" />
                                            </div>
                                            <div className="irc-item-content">
                                                <h4>Award Winning Company</h4>
                                                <p>Most gardens consist of a mix of natural & constructed
                                                    elements, although even very natural garden</p>
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
    );
};

export default ServiceChooseSection;