import React from 'react';

const BlogSearch = () => {
    return (
        <div className="sidebar-widget sidebar-search mb-50">
            <h4 className="sidebar-widget-title">Search Here</h4>
            <div className="sidebar-search-form">
                <input type="text" placeholder="Search your keyword..."/>
                <button><i className="fal fa-search"></i></button>
            </div>
        </div>
    );
};

export default BlogSearch;