import Link from 'next/link';
import React from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import portfolioList from '../../data/portfolio-data';

const PortfolioSection = () => {
    return (
        <section className="portfolio-area portfolio-area2 pt-120 pb-90">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="section-title">
                     <span className="section-subtitle">case study</span>
                     <h2 className="section-main-title mb-45">latest projects</h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="portfolio-tab-nav style-2 mb-50">
                     <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                           <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1"
                              type="button" role="tab" aria-controls="nav-1" aria-selected="true">all</button>
                           <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2"
                              type="button" role="tab" aria-controls="nav-2" aria-selected="false">Events</button>
                           <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3"
                              type="button" role="tab" aria-controls="nav-3" aria-selected="false">Gardens</button>
                           <button className="nav-link" id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4"
                              type="button" role="tab" aria-controls="nav-4" aria-selected="false">Interiors</button>
                           <button className="nav-link" id="nav-5-tab" data-bs-toggle="tab" data-bs-target="#nav-5"
                              type="button" role="tab" aria-controls="nav-5" aria-selected="false">Maintance</button>
                           <button className="nav-link" id="nav-6-tab" data-bs-toggle="tab" data-bs-target="#nav-6"
                              type="button" role="tab" aria-controls="nav-6" aria-selected="false">Urban</button>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-12">
                  <div className="portfolio-tab-content">
                     <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                           <div className="portfolio-wrapper portfolio-slide-wrapper mb-30">
                              <div className="swiper-container portfolio-active">
                              {portfolioList &&
                                 <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[ Navigation, Scrollbar, A11y]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.portfolio-button-next',
                                            prevEl: '.portfolio-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1
                                            },
                                            500: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }}
                                        
                                    >
                                        {portfolioList.slice(0,3).map((item, num) => (
                                            <SwiperSlide key={num}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-bottom-content">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a>
                                                                <div className="beforeAfter">
                                                                    <img src={item.portfolioImg} />
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="portfolio-meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <span className="portfolio-tag"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTag}</a></Link></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <div className="project-budget">{item.portfolioBudget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                 </div>
                                }
                              </div>
                              <div className="portfolio-nav portfolio-1-nav">
                                 <div className="portfolio-button-prev portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                 </div>
                                 <div className="portfolio-button-next portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                            <div className="portfolio-wrapper portfolio-slide-wrapper mb-30">
                              <div className="swiper-container portfolio-active">
                              {portfolioList &&
                                 <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[ Navigation, Scrollbar, A11y]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.portfolio-button-next',
                                            prevEl: '.portfolio-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1
                                            },
                                            500: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }}
                                        
                                    >
                                        {portfolioList.slice(1,4).map((item, num) => (
                                            <SwiperSlide key={num}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-bottom-content">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a>
                                                                <div className="beforeAfter">
                                                                    <img src={item.portfolioImg} />
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="portfolio-meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <span className="portfolio-tag"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTag}</a></Link></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <div className="project-budget">{item.portfolioBudget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                 </div>
                                }
                              </div>
                              <div className="portfolio-nav portfolio-1-nav">
                                 <div className="portfolio-button-prev portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                 </div>
                                 <div className="portfolio-button-next portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                            <div className="portfolio-wrapper portfolio-slide-wrapper mb-30">
                              <div className="swiper-container portfolio-active">
                              {portfolioList &&
                                 <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[ Navigation, Scrollbar, A11y]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.portfolio-button-next',
                                            prevEl: '.portfolio-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1
                                            },
                                            500: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }}
                                        
                                    >
                                        {portfolioList.slice(0,3).map((item, num) => (
                                            <SwiperSlide key={num}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-bottom-content">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a>
                                                                <div className="beforeAfter">
                                                                    <img src={item.portfolioImg} />
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="portfolio-meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <span className="portfolio-tag"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTag}</a></Link></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <div className="project-budget">{item.portfolioBudget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                 </div>
                                }
                              </div>
                              <div className="portfolio-nav portfolio-1-nav">
                                 <div className="portfolio-button-prev portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                 </div>
                                 <div className="portfolio-button-next portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
                            <div className="portfolio-wrapper portfolio-slide-wrapper mb-30">
                              <div className="swiper-container portfolio-active">
                              {portfolioList &&
                                 <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[ Navigation, Scrollbar, A11y]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.portfolio-button-next',
                                            prevEl: '.portfolio-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1
                                            },
                                            500: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }}
                                        
                                    >
                                        {portfolioList.slice(1,4).map((item, num) => (
                                            <SwiperSlide key={num}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-bottom-content">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a>
                                                                <div className="beforeAfter">
                                                                    <img src={item.portfolioImg} />
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="portfolio-meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <span className="portfolio-tag"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTag}</a></Link></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <div className="project-budget">{item.portfolioBudget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                 </div>
                                }
                              </div>
                              <div className="portfolio-nav portfolio-1-nav">
                                 <div className="portfolio-button-prev portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                 </div>
                                 <div className="portfolio-button-next portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab">
                            <div className="portfolio-wrapper portfolio-slide-wrapper mb-30">
                              <div className="swiper-container portfolio-active">
                              {portfolioList &&
                                 <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[ Navigation, Scrollbar, A11y]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.portfolio-button-next',
                                            prevEl: '.portfolio-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1
                                            },
                                            500: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }}
                                        
                                    >
                                        {portfolioList.slice(0,3).map((item, num) => (
                                            <SwiperSlide key={num}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-bottom-content">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a>
                                                                <div className="beforeAfter">
                                                                    <img src={item.portfolioImg} />
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="portfolio-meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <span className="portfolio-tag"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTag}</a></Link></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <div className="project-budget">{item.portfolioBudget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                 </div>
                                }
                              </div>
                              <div className="portfolio-nav portfolio-1-nav">
                                 <div className="portfolio-button-prev portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                 </div>
                                 <div className="portfolio-button-next portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-6-tab">
                            <div className="portfolio-wrapper portfolio-slide-wrapper mb-30">
                              <div className="swiper-container portfolio-active">
                              {portfolioList &&
                                 <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[ Navigation, Scrollbar, A11y]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.portfolio-button-next',
                                            prevEl: '.portfolio-button-prev',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1
                                            },
                                            500: {
                                                slidesPerView: 1
                                            },
                                            768: {
                                                slidesPerView: 2
                                            },
                                            992: {
                                                slidesPerView: 2
                                            },
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }}
                                        
                                    >
                                        {portfolioList.slice(0,3).map((item, num) => (
                                            <SwiperSlide key={num}>
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-bottom-content">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a>
                                                                <div className="beforeAfter">
                                                                    <img src={item.portfolioImg} />
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="portfolio-content">
                                                            <div className="portfolio-inner">
                                                                <div className="portfolio-meta-list">
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <span className="portfolio-tag"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTag}</a></Link></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="portfolio-meta-single">
                                                                        <div className="portfolio-meta-text">
                                                                            <div className="project-budget">{item.portfolioBudget}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                            </div>
                                                            <div className="portfolio-btn">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className="fal fa-long-arrow-right"></i></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                 </div>
                                }
                              </div>
                              <div className="portfolio-nav portfolio-1-nav">
                                 <div className="portfolio-button-prev portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                 </div>
                                 <div className="portfolio-button-next portfolio-1-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
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

export default PortfolioSection;