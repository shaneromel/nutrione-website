import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionFive = () => {
    return (
        <section className="services-area pt-120 style-5 pb-90">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8 col-md-8">
                  <div className="section-title style-5 text-center">
                     <span className="section-subtitle">featured services</span>
                     <h2 className="section-main-title mb-45">Gardeny offers</h2>
                  </div>
               </div>
            </div>
            <div className="services-wrapper wow fadeInUp" data-wow-delay=".3s">
            {ServicesList &&
               <div className="row">
                  {ServicesList.slice(13, 17).map((item, num) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                     <div className="single-service single-service-style-5 mb-30">
                        <div className="single-service-inner">
                           <div className="service-icon">
                             <img src={item.serviceIcon} alt="img not found" />
                           </div>
                           <div className="single-service-content">
                              <span className="service-number"></span>
                              <h4 className="service-title"><Link href={`/service-details/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                              <p>{item.serviceDesc}</p>
                           </div>
                        </div>
                        <div className="service-hover-border"></div>
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

export default ServiceSectionFive;