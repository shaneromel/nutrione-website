import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionThree = () => {
    return (
        <section className="services-area pt-120 pb-70">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-3 text-center">
                     <span className="section-subtitle">services</span>
                     <h2 className="section-main-title mb-45">what we provide</h2>
                  </div>
               </div>
            </div>
            <div className="services-wrapper wow fadeInUp" data-wow-delay=".3s">
            {ServicesList &&
               <div className="row">
                {ServicesList.slice(7, 10).map((item, num) => (
                  <div className="col-lg-4 col-md-6" key={num}>
                     <div className="single-service style-3 mb-40">
                        <div className="service-img">
                           <img src={item.serviceImg} alt="service icon"/>
                        </div>
                        <div className="single-service-content">
                           <div className="service-icon">
                              <i className={item.serviceIcon}></i>
                           </div>
                           <h4 className="service-title"><Link href={`/service-details/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                           <p>{item.serviceDesc}</p>
                            <Link href={`/service-details/${item.id}`}><a className="text-btn"><i className="fal fa-long-arrow-right"></i>{item.serviceBtn}<i className="fal fa-long-arrow-right"></i></a></Link>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
            }
            </div>
         </div>
      </section>
    );
};

export default ServiceSectionThree;