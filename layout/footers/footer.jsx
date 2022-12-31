import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
    return (
        <footer className="footer1-bg">
            <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
                <div className="footer-bg-shape">
                    <img src="/assets/img/shape/pattern.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p className="mb-35">Is that lawn is an open space between woods
                                    or lawn can be uncountable a type of thin linen
                                    or cotton while garden is an outdoor area
                                    containing one or more types of plants</p>
                                <div className="footer-support">
                                    <div className="irc-item support-meta">
                                        <div className="irc-item-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="irc-item-content">
                                            <p>Emergency Call</p>
                                            <div className="support-number"><a href="tel:98965963168">989 659 631 68</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                <div className="footer-widget-title">
                                    <h4>main pages</h4>
                                </div>
                                <ul>
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href="/about"><a>about</a></Link></li>
                                    <li><Link href="/services"><a>services</a></Link></li>
                                    <li><Link href="/blog"><a>news</a></Link></li>
                                    <li><Link href="/team"><a>Team</a></Link></li>
                                </ul>
                                <ul>
                                    <li><Link href="/contact"><a>refund policy</a></Link></li>
                                    <li><Link href="/contact"><a>Get in touch</a></Link></li>
                                    <li><Link href="/contact"><a>Emergency</a></Link></li>
                                    <li><Link href="/contact"><a>get a quote</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>our services</h4>
                                </div>
                                <ul>
                                    <li><Link href="/services"><a>Lawn Moving</a></Link></li>
                                    <li><Link href="/services"><a>Hedge Cutting</a></Link></li>
                                    <li><Link href="/services"><a>Flower Planting</a></Link></li>
                                    <li><Link href="/services"><a>Garden Remodeling</a></Link></li>
                                    <li><Link href="/services"><a>Garden Restoration</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>get in touch</h4>
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <p><a href="tel:1-800-700-600">1-800-700-600</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope-open"></i>
                                                </div>
                                                <p><a href="mailto:info@bdevs-email.com">info@bdevs-email.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-map-marked-alt"></i>
                                                </div>
                                                <p><a href="#">60 East 65th Street, New York
                                                    City, NY 10065</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-social">
                                    <span>Connect:</span>
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
            </section>

            <div className="copyright-area copyright1-area">
                <div className="container">
                    <div className="copyright1-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-logo">
                                    <Link href="/"><a><img src="/assets/img/logo/logo-w.png" alt="" /></a></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright-text copyright1-text">
                                    Copyright & Design By <a href="https://themeforest.net/user/bdevs/portfolio">@BDevs</a> - 2022
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <div className="go-top-btn">
                                    <a className="go-top" href="#"><i className="fal fa-long-arrow-up"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;