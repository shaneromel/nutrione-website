import React from 'react';

const NewsletterSectionFour = () => {
    return (
        <section className="newsletter-area style-4">
            <div className="container">
                <div className="newsletter-wrapper style-4 wow fadeInUp" data-wow-delay=".3s">
                    <div className="newsletter-bg">
                        <img src="/assets/img/bg/newsletter-bg.jpg" alt="" />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-text">
                                <p>get weekly newsletter & offers</p>
                                <h2>classy offers too.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="newsletter-form">
                                <form action="#">
                                    <div className="newsletter-input-wrapper">
                                        <input type="email" placeholder="Email address" />
                                        <button type="submit" className="fill-btn-rounded">subscribe<i
                                            className="fal fa-long-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSectionFour;