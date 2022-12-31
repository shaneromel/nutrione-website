import React from 'react';

const BlogAbout = () => {
    return (
        <div className="sidebar-widget sidebar-about mb-50">
            <h4 className="sidebar-widget-title">About Me</h4>
            <div className="sidebar-about-content">
                <div className="profile-thumb">
                    <img src="/assets/img/team/team-9.jpg" alt="" />
                </div>
                <h4 className="member-name">Alonso D. Dowson</h4>
                <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.</p>
                <div className="social-links">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogAbout;