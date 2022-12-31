import React from 'react';

const TeamIntroSection = () => {
    return (
        <section className="team-intro-area pt-120 pb-60 wow fadeInUp" data-wow-delay=".3s">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="team-intro-content mb-60">
                            <div className="section-title">
                                <span className="section-subtitle">winning awards</span>
                                <h2 className="section-main-title mb-45">Every single olive<br/>
                                    oil has been carefully chosen by our expert</h2>
                            </div>
                            <div className="team-award-logo">
                                <a href="#"><img src="/assets/img/team/team-award1.png" alt=""/></a>
                                <a href="#"><img src="/assets/img/team/team-award2.png" alt=""/></a>
                                <a href="#"><img src="/assets/img/team/team-award3.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="team-intro-thumb">
                            <img src="/assets/img/team/team-intro-img.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamIntroSection;