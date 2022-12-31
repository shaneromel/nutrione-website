import Link from 'next/link';
import React from 'react';

const ServiceDetailsArea = ({ item }) => {
    return (
        <>
            <section className="page-title-area" style={{ background: "url(/assets/img/bg/page-title-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                <p>Provides hassle-free backyard transformation</p>
                                <h1 className="page-title mb-10">{item.serviceTitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="breadcrumb-menu">
                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/"><a><span>Home</span></a></Link></li>
                                    <li className="trail-item trail-end"><span>Service Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-9 col-md-12">
                            <div className="service-details-main mb-60">
                                <div className="service-image">
                                    <img src="/assets/img/service/service-img1.jpg" alt="" />
                                </div>
                                <h3 className="mb-15">{item.serviceTitle}</h3>
                                <p className="mb-15">Still not convinced that gaming is good for you? That’s understandable,
                                    considering concerns
                                    long raised by parents that
                                    include
                                    the treatment of women social gaming, violence in games and gaming addiction. For more
                                    information, explore the Safer
                                    Gaming
                                    Guide from the Family Online Safety Institute. The absolute best recommendation for parents
                                    worried about game safety or
                                    that
                                    your kid is gaming too much: Join your kids on their favorite platform.</p>
                                <p className="mb-45">With us you can purchase clinical, dental, and vision protection plans for
                                    everybody in your
                                    family. As a confided in
                                    supplier, HR
                                    empowers you to get the wellbeing inclusion you need at a sensible cost, with in excess of
                                    13,000 choices from 180+
                                    transporters.
                                    With us free and simple to-utilize plan locaters and correlation apparatuses, you can discover
                                    the medical coverage plan
                                    that best
                                    suits your spending plan and needs. When you apply, deals with your application beginning to
                                    end, upholding for your old
                                    benefit to
                                    guarantee your wellbeing inclusions are allowed immediately. Get a health care coverage quote
                                    today and give your family
                                    the
                                    consideration they merit.</p>
                                <h3 className="mb-25">how we works</h3>
                                <div className="how-works-wrapper">
                                    <div className="working-steps">
                                        <div className="work-step">
                                            <div className="work-step-icon">
                                                <img src="/assets/img/icon/work-icon1.png" alt="" />
                                            </div>
                                            <h4>Garden Design</h4>
                                            <p>Whether you are looking for plants,
                                                trees, shrubs or garden</p>
                                        </div>
                                        <div className="work-step">
                                            <div className="work-step-icon">
                                                <img src="/assets/img/icon/work-icon2.png" alt="" />
                                            </div>
                                            <h4>soil filtering</h4>
                                            <p>Whether you are looking for plants,
                                                trees, shrubs or garden</p>
                                        </div>
                                        <div className="work-step">
                                            <div className="work-step-icon">
                                                <img src="/assets/img/icon/work-icon3.png" alt="" />
                                            </div>
                                            <h4>ready to plant</h4>
                                            <p>Whether you are looking for plants,
                                                trees, shrubs or garden</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-55">Still not convinced that gaming is good for you? That’s understandable,
                                    considering concerns
                                    long raised by parents that
                                    include
                                    the treatment of women social gaming, violence in games and gaming addiction. For more
                                    information, explore the Safer
                                    Gaming
                                    Guide from the Family Online Safety Institute. The absolute best recommendation for parents
                                    worried about game safety or
                                    that
                                    your kid is gaming too much: Join your kids on their favorite platform.</p>
                                <div className="service-sub-image">
                                    <img src="/assets/img/service/service-sub1.jpg" alt="" />
                                    <img src="/assets/img/service/service-sub2.jpg" alt="" />
                                </div>
                                <div className="service-features mb-60">
                                    <h4>Core Features</h4>
                                    <div className="service-feature-list">
                                        <span>Easy sign-up</span>
                                        <span>Business Content Makes</span>
                                        <span>Overall Marketing</span>
                                        <span>Biggest Social Channels</span>
                                        <span>Business associates</span>
                                        <span>Interaction between</span>
                                        <span>Customers and search</span>
                                        <span>Traffic exponentially</span>
                                        <span>SEO strategy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-8">
                            <div className="service-sidebar-wrapper mb-60">
                                <div className="sidebar-widget sidebar-service mb-50">
                                    <h4 className="sidebar-widget-title">Our Services</h4>
                                    <div className="sidebar-service-list">
                                        <ul>
                                            <li><Link href="/service"><a>Green Technology</a></Link></li>
                                            <li><Link href="/service"><a>Urban Gardening</a></Link></li>
                                            <li><Link href="/service"><a>Nursery/Tree Farm</a></Link></li>
                                            <li><Link href="/service"><a>Trimming & Pruning</a></Link></li>
                                            <li><Link href="/service"><a>Soil Preparing</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget sidebar-materials mb-50">
                                    <h4 className="sidebar-widget-title">Our Materials</h4>
                                    <div className="sidebar-materials-list">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-file-pdf"></i>Company Profile</a></li>
                                            <li><a href="#"><i className="fas fa-file-image"></i>Service Details</a></li>
                                            <li><a href="#"><i className="fas fa-file-prescription"></i>Service Technician</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget sidebar-adv mb-50">
                                    <img src="/assets/img/service/service-sidebar-adv.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;