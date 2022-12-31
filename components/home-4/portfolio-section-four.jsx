import Link from 'next/link';
import React from 'react';
import portfolioList from '../../data/portfolio-data';

import { useState } from "react";
import Lightbox from 'react-image-lightbox';

const PortfolioSectionFour = () => {

    const [photoIndex, setPhotoIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const lightboxImages = portfolioList.map(img => img.portfolioImg);
    const images = lightboxImages;

    return (
        <>
            {open && (
                <Lightbox

                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}

            <section className="portfolio-area pt-120 pb-90 portfolio-bg fix">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8">
                            <div className="section-title style-4 text-center">
                                <span className="section-subtitle">photo gallary</span>
                                <h2 className="section-main-title mb-45">Our Latest Projects</h2>
                            </div>
                        </div>
                    </div>
                    {portfolioList &&
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper style-4 wow fadeInUp" data-wow-delay=".3s">
                            <span className="portfolio-shape-1"></span>
                            <i className="flaticon-gardening-1 portfolio-shape-2"></i>
                            {portfolioList.slice(9, 15).map((item, index) => (
                                <div className="portfolio-single portfolio-hover-style style-4" key={index}>
                                    <div className="portfolio-thumb">
                                        <Link href={`/shop-details/${item.id}`}><a><img src={item.portfolioImg} alt="" /></a></Link>
                                        <div className="portfolio-content">
                                            <Link href={`/shop-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                            <div className="portfolio-inner">
                                                <div className="portfolio-inner-text">
                                                    <span className="portfolio-tag">{item.portfolioTag}</span>
                                                    <h4 className="portfolio-title"><Link href={`/shop-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                </div>
                                                <span onClick={setOpen}>
                                                    <button className="icon-btn image-popups" onClick={() => setPhotoIndex(index)}><i className={item.portfolioIcon}></i></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    <div className="portfolio-btn style-4 mt-40 mb-30 text-center wow fadeInUp" data-wow-delay=".3s">
                        <Link href="/portfolio"><a className="fill-btn">Load More<i className="fal fa-plus"></i></a></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSectionFour;