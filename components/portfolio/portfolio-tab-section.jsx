import Link from 'next/link';
import React from 'react';
import portfolioList from '../../data/portfolio-data';

const PortfolioTabSection = () => {
    return (
        <div className="portfolio-area pt-120 pb-120">
         <div className="container">
            <div className="portfolio-tab-wrapper wow fadeInUp" data-wow-delay=".3s">
               <div className="portfolio-tab-nav mb-50">
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
               <div className="portfolio-tab-content">
               {portfolioList &&
                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                        {portfolioList.slice(15, 27).map((item, num) => (
                           <div className="portfolio-single portfolio-hover-style" key={num}>
                              <div className="portfolio-thumb">
                                 <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt=""/></a></Link>
                                 <div className="portfolio-content">
                                    <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                    <div className="portfolio-inner">
                                       <span className="portfolio-tag">{item.portfolioTag}</span>
                                       <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                       <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className={item.portfolioIcon}></i></a></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                        {portfolioList.slice(18, 27).map((item, num) => (
                           <div className="portfolio-single portfolio-hover-style" key={num}>
                              <div className="portfolio-thumb">
                                 <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt=""/></a></Link>
                                 <div className="portfolio-content">
                                    <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                    <div className="portfolio-inner">
                                       <span className="portfolio-tag">{item.portfolioTag}</span>
                                       <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                       <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className={item.portfolioIcon}></i></a></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                            {portfolioList.slice(15, 21).map((item, num) => (
                            <div className="portfolio-single portfolio-hover-style" key={num}>
                                <div className="portfolio-thumb">
                                    <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt=""/></a></Link>
                                    <div className="portfolio-content">
                                        <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                        <div className="portfolio-inner">
                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                        <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                        <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className={item.portfolioIcon}></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                            {portfolioList.slice(23, 27).map((item, num) => (
                            <div className="portfolio-single portfolio-hover-style" key={num}>
                                <div className="portfolio-thumb">
                                    <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt=""/></a></Link>
                                    <div className="portfolio-content">
                                        <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                        <div className="portfolio-inner">
                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                        <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                        <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className={item.portfolioIcon}></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                            {portfolioList.slice(15, 19).map((item, num) => (
                            <div className="portfolio-single portfolio-hover-style" key={num}>
                                <div className="portfolio-thumb">
                                    <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt=""/></a></Link>
                                    <div className="portfolio-content">
                                        <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                        <div className="portfolio-inner">
                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                        <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                        <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className={item.portfolioIcon}></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-6-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                            {portfolioList.slice(23, 27).map((item, num) => (
                            <div className="portfolio-single portfolio-hover-style" key={num}>
                                <div className="portfolio-thumb">
                                    <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt=""/></a></Link>
                                    <div className="portfolio-content">
                                        <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                        <div className="portfolio-inner">
                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                        <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                        <Link href={`/portfolio-details/${item.id}`}><a className="icon-btn"><i className={item.portfolioIcon}></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                     </div>
                  </div>
                }
               </div>
            </div>
            <div className="portfolio-btn mt-40 mb-30 text-center wow fadeInUp d-none" data-wow-delay=".3s">
               <a href="#" className="fill-btn">Load More<i className="fal fa-plus"></i></a>
            </div>
         </div>
      </div>
    );
};

export default PortfolioTabSection;