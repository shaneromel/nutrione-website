import Link from 'next/link';
import React from 'react';

const PortfolioDetailsArea = ({ item }) => {
    return (
        <>
            <section className="page-title-area" style={{ background: "url(/assets/img/bg/page-title-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                <p>Provides hassle-free backyard transformation</p>
                                <h1 className="page-title mb-10">{item.portfolioTitle}</h1>
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
                                    <li className="trail-item trail-end"><span>Portfolio Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio-details-area pt-120 pb-90">
                <div className="container">
                    <div className="portfolio-details-wrapper wow fadeInUp" data-wow-delay=".3s">
                        <div className="portfolio-thumb">
                            <img src="/assets/img/portfolio/portfolio-d-thumb.jpg" alt="" />
                        </div>
                        <div className="portfolio-meta-wrapper">
                            <div className="portfolio-meta">
                                <div className="meta-list">
                                    <div className="meta-item">
                                        <span>Client:</span>
                                        <p>Alonso D. Dowson</p>
                                    </div>
                                    <div className="meta-item">
                                        <span>Date:</span>
                                        <p>June 21, 2022</p>
                                    </div>
                                    <div className="meta-item">
                                        <span>Services:</span>
                                        <p>UI & UX, Website Design</p>
                                    </div>
                                    <div className="meta-item">
                                        <span>Category:</span>
                                        <p>Digital Marketing</p>
                                    </div>
                                </div>
                                <div className="portfolio-meta-btn">
                                    <a href="#" className="fill-btn">Live Preview<i className="fal fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <p className="mb-20">Our customized content solutions utilize key word density that we craft specifically for
                            your needs.We take pride in writing original, effective and engaging content that sets you
                            apart in an Internet awash with thin, dull filler copy. We develop your feature articles, newsletters,
                            white papers, social media messages harmoniously to generate top internet
                            rankings in any market. We take pride in giving your blog, newsletter or website the professional
                            polish it deserves and helping you build your brand. <Link href="/team"><a>Our marketing team</a></Link> has
                            more than three decades of industry experience developing and promoting content across a broad
                            spectrum of channels. Our integrated marketing strategies have a proven
                            success record backed with industry-leading database management tools. When you choose Business
                            Content, you gain access to some of the most informative analytics in the industry, making every campaign an investment in your future success.</p>
                            <p><span>We know you have a choice.</span> We believe you’ll choose Business Content for our knowledge
                            and comprehensive marketing
                            programs. We know you’ll stay with us because of the
                            outstanding results and customer satisfaction we deliver. We’re dedicated to staying ahead of the
                            curve and being your
                            value-added marketing partner. We know you have a
                            choice. We believe you’ll choose Business Content for our knowledge and comprehensive marketing
                            programs. We know you’ll
                            stay with us because of the outstanding results &
                            customer satisfaction we deliver. We’re dedicated to staying ahead of the curve and being your
                            value-added marketing
                            partner.</p>
                        <div className="portfolio-sub-image">
                            <img src="/assets/img/portfolio/portfolio-sub1.jpg" alt="" />
                            <img src="/assets/img/portfolio/portfolio-sub2.jpg" alt="" />
                            <img src="/assets/img/portfolio/portfolio-sub3.jpg" alt="" />
                        </div>
                        <div className="portfolio-quote">
                            <div className="quote-icon">
                                <img src="/assets/img/icon/qoute.png" alt="" />
                            </div>
                            <div className="quote-content">
                                <p>Business Content provides fully integrated marketing services designed to reach your target
                                    audience through specialized content and effective creative.</p>
                                <div className="author-name">James Anderson <span>-Head Of Idea</span></div>
                            </div>
                        </div>
                        <div className="portfolio-faq-wrapper">
                            <h4>some question & answers</h4>
                            <p className="mb-35">Still not convinced that gaming is good for you? That’s understandable, considering
                                concerns
                                long raised by parents that
                                include the treatment of women social gaming, violence in
                                games and gaming addiction. For more information, explore the Safer Gaming Guide from the Family
                                Online Safety
                                Institute.</p>
                            <div className="faq-wrapper">
                                <div className="gm-faq gm-faq-2column">
                                    <div className="accordion" id="accordionExample">
                                        <div className="gm-faq-group">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        What does an inch of water mean?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        How does gardening make you feel?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse show"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                        How often should I fertilize my plants?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gm-faq-group">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingSeven">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseSeven" aria-expanded="false"
                                                        aria-controls="collapseSeven">
                                                        when it is the first frost or last frost?
                                                    </button>
                                                </h2>
                                                <div id="collapseSeven" className="accordion-collapse collapse"
                                                    aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingEight">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseEight" aria-expanded="false"
                                                        aria-controls="collapseEight">
                                                        Review Community Garden Proposal?
                                                    </button>
                                                </h2>
                                                <div id="collapseEight" className="accordion-collapse collapse"
                                                    aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNine">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseNine" aria-expanded="false"
                                                        aria-controls="collapseNine">
                                                        What are the questions for gardening?
                                                    </button>
                                                </h2>
                                                <div id="collapseNine" className="accordion-collapse collapse"
                                                    aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-nav-wrapper">
                            <div className="portfolio-nav-items">
                                <div className="portfolio-single">
                                    <div className="portfolio-img">
                                        <a href="#"><img src="/assets/img/portfolio/portfolio-3.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-content">
                                        <span>Prev Case</span>
                                        <h4 className="portfolio-title"><a href="#">Tips On Minimalist</a></h4>
                                    </div>
                                </div>
                                <div className="dot-icon">
                                    <img src="/assets/img/icon/port-dot.png" alt="" />
                                </div>
                                <div className="portfolio-single">
                                    <div className="portfolio-img">
                                        <a href="#"><img src="/assets/img/portfolio/portfolio-4.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-content">
                                        <span>Next Case</span>
                                        <h4 className="portfolio-title"><a href="#">Less Is More</a></h4>
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

export default PortfolioDetailsArea;