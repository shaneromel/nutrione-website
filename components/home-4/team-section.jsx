import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';

const TeamSection = () => {
    return (
        <div className="team-area style-4 pt-120 pb-155">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-4 text-center">
                     <span className="section-subtitle">our farmers</span>
                     <h2 className="section-main-title mb-45">expert farmers</h2>
                  </div>
               </div>
            </div>
            <div className="team-wrapper hover-img-border wow fadeInUp" data-wow-delay=".3s">
            {TeamList &&
               <div className="row">
                {TeamList.slice(0, 4).map((item, num) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={num}>
                     <div className="team-single style-4 mb-30">
                        <div className="team-member-wrapper">
                           <div className="member-img">
                              <Link href={`/team-details/${item.id}`}><a><img src={item.teamImg} alt=""/></a></Link>
                           </div>
                           <div className="member-content">
                              <span className="member-designation">{item.teamSubtitle}</span>
                              <h4 className="member-name"><Link href={`/team-details/${item.id}`}><a>{item.teamTitle}</a></Link></h4>
                              <div className="social-links team-social">
                                 <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
            }
            </div>
         </div>
      </div>
    );
};

export default TeamSection;