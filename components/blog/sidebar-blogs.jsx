import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const SidebarBlogs = () => {
    return (
        <div className="sidebar-widget sidebar-blog mb-50">
            <h4 className="sidebar-widget-title">Popular Feeds</h4>
            <div className="sidebar-blog-list">
                {blogItemsList &&
                    <ul>
                        {blogItemsList.slice(8, 11).map((item, num) => (
                            <li key={num}>
                                <div className="blog-single">
                                    <div className="blog-thumb">
                                        <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt="" /></a></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="blog-title"><Link href={`/blog-details/${item.id}`}><a>{item.title}</a></Link></h2>
                                        <div className="blog-meta-list">
                                            <div className="blog-meta-single">
                                                <div className="blog-meta-icon">
                                                    <i className="fas fa-calendar-alt"></i>
                                                </div>
                                                <div className="blog-meta-text">
                                                    {item.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default SidebarBlogs;