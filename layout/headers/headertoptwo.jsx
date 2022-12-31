import React from 'react';

const HeaderTopTwo = () => {
    return (
        <div className="header-top-area d-none d-lg-block">
            <div className="container">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="header-top-social">
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="#">12/A, New Booston Tower, NYC</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopTwo;