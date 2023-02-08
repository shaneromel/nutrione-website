import { useState } from "react";
import ModalVideo from 'react-modal-video';
import TestimonialSlider from "../elements/testimonial/testimonial-slider";

const TestimonialSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <section className="testimonial-area pt-120 pb-155">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="testimonial-video-thumb mb-60">
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                     <div className="video-btn mb-45">
                        <code className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><span>play</span></code>
                     </div>
                     <img src="/assets/img/bg/testimonila-video-bg.jpg" alt=""/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <TestimonialSlider />
               </div> 
            </div>
         </div>
      </section>
    );
};

export default TestimonialSection;