import React from 'react';

const HeaderTopFour = () => {
    return (
        <div className="header-top-area style-4 d-none d-lg-block">
            <div className="container">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="tel:78989700098">789 897 000 98</a></p>
                                </div>
                            </div>
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="mailto:info@gardomia.com">info@gardomia.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p>Mon - Fri: 9:00 - 19:00<span className="d-none d-xl-inline-block">/ Closed on 
                                        <strong> Weekends</strong></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopFour;