import React from 'react';
import timelineList from '../../data/timeline-data';

const AboutTimeline = () => {
   return (
      <section className="history-area pt-120 pb-120 mt-80">
         <div className="container">
            {timelineList &&
               <div className="history-chart wow fadeInUp" data-wow-delay=".3s">
                  <div className=""></div>
                  {timelineList.slice(0, 8).map((item, num) => (
                     <div className={item.timelineItemClass} key={num}>
                        <div className="single-year">
                           <div className="history-year">{item.timelineYear}</div>
                           <div className="history-thumb">
                              <img src={item.timelineImg} alt="" />
                           </div>
                           <div className="history-content-wrapper">
                              <div className="history-content">
                                 <h4 className="history-title">{item.timelineTitle}</h4>
                                 <p>{item.timelineDesc}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            }
         </div>
      </section>
   );
};

export default AboutTimeline;