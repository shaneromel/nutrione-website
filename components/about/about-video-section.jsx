import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const AboutVideoSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <section className="video-area pt-120 pb-145" style={{ background: "url(/assets/img/bg/video-bg.jpg)" }}>
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-12">
               <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                  <div className="video-content">
                     <div className="video-btn mb-45">
                        <span className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                     </div>
                     <div className="section-title">
                        <h2 className="section-main-title mb-0 text-white">With Design & Conceptual Decisions
                           We Create Value for the Object</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default AboutVideoSection;