import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const BlogSectionTwo = ({blog_area_class , blog_single_class}) => {
    return (
        <section className={`blog-area ${blog_area_class ? blog_area_class : 'blog-area-2 pb-75'}`}>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title text-center style-2">
                            <span className="section-subtitle">[ blog ]</span>
                            <h2 className="section-main-title mb-45">blog & insights</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-wrapper wow fadeInUp" data-wow-delay=".3s">
                    {blogItemsList &&
                        <div className="row">
                            {blogItemsList.slice(3, 6).map((item, num) => (
                                <div className="col-lg-4 col-md-6" key={num}>
                                    <div className={`blog-single ${blog_single_class ? blog_single_class : 'style-2 mb-45'}`}>
                                        <div className="blog-thumb">
                                            <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt="" /></a></Link>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta-list">
                                                <div className="blog-meta-single">
                                                    <div className="blog-meta-text">
                                                        <div className="blog-date">{item.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blog-meta-single">
                                                    <div className="blog-meta-text">
                                                        {item.metaBy} <span>{item.metaAuthor}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="blog-title"><Link href={`/blog-details/${item.id}`}><a>{item.title}</a></Link></h2>
                                            <div className="blog-btn">
                                                <Link href={`/blog-details/${item.id}`}><a className="text-btn"><i className="fal fa-long-arrow-right"></i>{item.blogBtn}<i className="fal fa-long-arrow-right"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSectionTwo;