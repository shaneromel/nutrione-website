import React from 'react';

const WorkSection = () => {

    const workItems = [
        {
            id: 1,
            workImg : '/assets/img/icon/work-icon1.png',
            workTitle : 'Garden Design',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border',
        },
        {
            id: 2,
            workImg : '/assets/img/icon/work-icon2.png',
            workTitle : 'soil filtering',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border',
        },
        {
            id: 3,
            workImg : '/assets/img/icon/work-icon3.png',
            workTitle : 'ready to plant',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border',
        },
        {
            id: 4,
            workImg : '/assets/img/icon/work-icon4.png',
            workTitle : 'using soil medic',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border d-none',
        }
    ]
    return (
      <section className="work-process-area process-area-bg pt-120 pb-65">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">work process</span>
                     <h2 className="section-main-title mb-45">how we work</h2>
                  </div>
               </div>
            </div>
            <div className="how-works-wrapper wow fadeInUp" data-wow-delay=".3s">
            {workItems &&
               <div className="working-steps working-steps-2">
                {workItems.map((item, num) => (     
                  <div className="work-step work-step-2" key={num}>
                     <div className={item.workClass}></div>
                     <div className="work-step-icon">
                        <img src={item.workImg} alt="img not found"/>
                     </div>
                     <h4>{item.workTitle}</h4>
                     <p>{item.workDesc}</p>
                  </div>
                ))}
               </div>
            }
            </div>
         </div>
      </section>
   );
};

export default WorkSection;