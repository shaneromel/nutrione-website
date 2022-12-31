import Link from 'next/link';
import React from 'react';

const PricingSection = () => {

   const pricingList = [
      {
         id: 1,
         packageIcon: '/assets/img/icon/pricing-icon-1.png',
         packageName: 'small package',
         packagePrice: '$49.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'n-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc'
      },
      {
         id: 2,
         packageIcon: '/assets/img/icon/pricing-icon-2.png',
         packageName: 'best package',
         packagePrice: '$59.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30 best-package',
         packageBadge: 'bp-tag',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc'
      },
      {
         id: 3,
         packageIcon: '/assets/img/icon/pricing-icon-3.png',
         packageName: 'for office',
         packagePrice: '$69.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'n-inc'
      },
      {
         id: 4,
         packageIcon: '/assets/img/icon/pricing-icon-4.png',
         packageName: 'for house',
         packagePrice: '$99.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'no-inc'
      }
   ]
    return (
        <section className="pricing-area pricing-area-bg pt-120 pb-90">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center pricing-section-title">
                     <span className="section-subtitle">pricing</span>
                     <h2 className="section-main-title mb-45">offers & pricing</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
               {pricingList &&
                  <div className="row">
                     {pricingList.map((item, num) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                           <div className={item.packageActive}>
                           <div className={item.packageBadge}>best choice</div>
                              <div className="pricing-content">
                                 <div className="pricing-shape">
                                    <img src={item.packageIcon} alt=""/>
                                 </div>
                                 <span className="package-name">{item.packageName}</span>
                                 <span className="package-price">{item.packagePrice}</span>
                                 <div className="package-list">
                                    <ul>
                                       <li className={item.packageListClassA}>{item.packageService}</li>
                                       <li className={item.packageListClassB}>{item.packagePlaning}</li>
                                       <li className={item.packageListClassC}>{item.packageParty}</li>
                                       <li className={item.packageListClassD}>{item.packageLandscape}</li>
                                       <li className={item.packageListClassE}>{item.packageFence}</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="pricing-btn">
                                 <Link href="/contact"><a className="fill-btn"><i className="fas fa-shopping-basket"></i>{item.packageBtn}</a></Link>
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

export default PricingSection;