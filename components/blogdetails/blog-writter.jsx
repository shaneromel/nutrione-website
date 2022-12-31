import React from 'react';

const BlogWritter = () => {
    return (
        <div className="blog-writer">
            <div className="blog-writer-img">
                <img src="/assets/img/blog/blog-writer-img.jpg" alt="" />
            </div>
            <div className="blgo-writer-content">
                <span>Written by</span>
                <h4 className="writer-name">Rosalina D. William</h4>
                <p>Getting fast initial render with streaming server-side rendering, efficient
                    component-level updates and state transitions, while also setting up a
                    performant loading and bundling strategy.</p>
            </div>
        </div>
    );
};

export default BlogWritter;