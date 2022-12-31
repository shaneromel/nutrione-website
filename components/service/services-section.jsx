import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServicesSection = () => {
    return (
        <section className="services-area pt-120 pb-90">
         <div className="container">
            <div className="services-wrapper">
                {ServicesList &&
                    <div className="row">
                        {ServicesList.slice(17, 23).map((item, num) => (
                            <div className="col-lg-4 col-md-6" key={num}>
                                <div className="single-service single-service-default mb-30">
                                    <div className="service-icon">
                                        <img src={item.serviceIcon} alt="service icon" />
                                    </div>
                                    <div className="single-service-content">
                                        <span className="service-number"></span>
                                        <h4 className="service-title"><Link href={`/service-details/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                                        <p>{item.serviceDesc}</p>
                                        <Link href={`/service-details/${item.id}`}><a className='text-btn'><i className="fal fa-long-arrow-right"></i>{item.serviceBtn}<i className="fal fa-long-arrow-right"></i></a></Link>
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

export default ServicesSection;