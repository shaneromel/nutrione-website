import Link from 'next/link';
import React from 'react';

const BlogActions = () => {
    return (
        <div className="blog-actions mb-60">
            <div>
                <h4>Releted Tags</h4>
                <div className="blog-tag-list">
                    <Link href="/blog"><a className="tag">Popular</a></Link>
                    <Link href="/blog"><a className="tag">Design</a></Link>
                    <Link href="/blog"><a className="tag">UX</a></Link>
                </div>
            </div>
            <div>
                <h4>Social Share</h4>
                <div className="social-links blog-share">
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

export default BlogActions;