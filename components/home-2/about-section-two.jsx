import Link from 'next/link';
import React from 'react';

const AboutSectionTwo = () => {
   return (
      <section className="about-area style-2 pt-120 pb-140">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="about-thumb-group mb-60">
                     <img className="about-group-thumb about-group-thumb1" src="/assets/img/about/about-group-thumb1.jpg"
                        alt="" />
                     <img className="about-group-thumb about-group-thumb2" src="/assets/img/about/about-group-thumb2.jpg"
                        alt="" />
                     <img className="about-group-thumb about-group-thumb3" src="/assets/img/about/about-group-thumb3.jpg"
                        alt="" />
                     <img className="about-group-thumb about-group-thumb4" src="/assets/img/about/about-group-thumb4.jpg"
                        alt="" />
                     <img className="about-group-thumb about-group-thumb5" src="/assets/img/about/about-group-thumb5.jpg"
                        alt="" />
                     <img className="about-group-thumb about-group-thumb6" src="/assets/img/about/about-group-thumb6.jpg"
                        alt="" />
                     <img className="about-group-thumb about-group-thumb7" src="/assets/img/about/about-group-thumb7.jpg"
                        alt="" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about-content mb-60 style-2">
                     <div className="section-title style-2">
                        <span className="section-subtitle">[ since from 2000 ]</span>
                        <h2 className="section-main-title mb-20">Gardeny offers a
                           full-service</h2>
                     </div>
                     <p className="mb-30">Most gardens consist of a mix of natural and constructed elements, although
                        even very natural gardens are always an inherently artificial creation. Natural
                        elements present in a garden principally.</p>
                     <div className="about-work-progress">
                        <div className="bd-skill--content">
                           <div className="bd-skill__wrapper mb-35">
                              <div className="bd-skill--title__wrapper">
                                 <h5 className="bd-skill--title">landscaping ground</h5>
                                 <span style={{right:0}}>75%</span>
                              </div>
                              <div className="progress">
                                 <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s"
                                    role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0"
                                    aria-valuemax="100"><span></span></div>
                              </div>
                           </div>
                           <div className="bd-skill__wrapper mb-35">
                              <div className="bd-skill--title__wrapper">
                                 <h5 className="bd-skill--title">soil re-building</h5>
                                 <span style={{right:0}}>82%</span>
                              </div>
                              <div className="progress">
                                 <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.6s"
                                    role="progressbar" style={{width: '82%'}} aria-valuenow="25" aria-valuemin="0"
                                    aria-valuemax="100"><span></span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="about-btn">
                        <Link href="/contact"><a className="border-btn-rounded">learn more<i className="fal fa-long-arrow-right"></i></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSectionTwo;