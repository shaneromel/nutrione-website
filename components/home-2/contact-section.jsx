import React from 'react';

const ContactSection = () => {
    return (
        <section className="pricing-cta pt-120 pb-120 fix">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-2">
                     <span className="section-subtitle">[ call to action ]</span>
                     <h2 className="section-main-title mb-45">estimate price</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-cta-wrapper wow fadeInUp" data-wow-delay=".3s">
               <div className="pricing-cta-inner">
                  <div className="row">
                     <div className="col-xl-8">
                        <div className="pricing-cta-form">
                           <form action="#">
                              <div className="row">
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-name">
                                       <label htmlFor="name">full name</label>
                                       <input type="text" placeholder="enter here..." name="name" id="name"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-email">
                                       <label htmlFor="email">email address</label>
                                       <input type="email" placeholder="enter here..." name="email" id="email"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-number">
                                       <label htmlFor="number">phone number</label>
                                       <input type="text" placeholder="enter here..." name="number" id="number"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-address">
                                       <label htmlFor="address">address</label>
                                       <input type="text" placeholder="enter here..." name="address" id="address"/>
                                    </div>
                                 </div>
                                 <div className="col-md-12 col-sm-12">
                                    <div className="select-service-button">
                                       <div className="single-input-field field-service">
                                          <label htmlFor="select-service">name of service</label>
                                          <select className="select-service" name="select-service" id="select-service">
                                             <option value="1">gardening</option>
                                             <option value="2">watering</option>
                                             <option value="3">triming</option>
                                             <option value="4">planting</option>
                                             <option value="5">cleaning</option>
                                          </select>
                                       </div>
                                       <a href="#" className="fill-btn">get a quote<i
                                             className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="estimated-price-wrapper">
                                       <p>estimated price</p>
                                       <span className="es-price-value">$45,000</span>
                                       <img className="es-price-tag" src="/assets/img/icon/price-tag.png" alt=""/>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="col-xl-4">
                        <div className="pricing-cta-img">
                           <img src="/assets/img/bg/pricing-cta-img.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ContactSection;