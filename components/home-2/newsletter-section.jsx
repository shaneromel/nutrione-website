import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="newsletter-area">
         <div className="container">
            <div className="newsletter-wrapper">
               <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-lg-6">
                     <div className="newsletter-text">
                        <p>get weekly newsletter & offers</p>
                        <h2>classy offers too.</h2>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="newsletter-form">
                        <form action="#">
                           <div className="newsletter-input-wrapper">
                              <input type="email" placeholder="Email address"/>
                              <button type="submit" className="fill-btn-rounded">subscribe<i
                                    className="fal fa-long-arrow-right"></i></button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default NewsletterSection;