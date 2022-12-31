import Link from 'next/link';
import React from 'react';

const FooterFour = () => {
    return (
        <footer className="footer4-bg">
            <div className="footer-area footer-area4 footer-area4-bg pt-120 pb-120">
                <div className="footer-4-bg-img">
                    <img src="/assets/img/bg/footer-4-bg.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="footer4-inner footer-4-plant-shape">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="footer-widget footer4-widget footer4-widget1 mb-0">
                                    <div className="footer-logo">
                                        <Link href="/"><a><img src="/assets/img/logo/logo-w.png" alt="" /></a></Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Call Us: 800-454-9272, 890-090-0000 <br />
                                            New York, USA – 1060 Firs Avenue, Muswell Hill</p>
                                    </div>
                                    <div className="footer-btn">
                                        <Link href="/contact"><a className="border-btn"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                                    </div>
                                    <div className="footer-social">
                                        <span>get connect:</span>
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFour;