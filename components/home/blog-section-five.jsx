import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';

const BlogSectionFive = () => {
    return (
        <section className="blog-area blog-area-4 pt-120 pb-75">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8 col-md-8">
                  <div className="section-title style-5 text-center">
                     <span className="section-subtitle">insights</span>
                     <h2 className="section-main-title mb-45">blog & insights</h2>
                  </div>
               </div>
            </div>
            <div className="blog-wrapper wow fadeInUp" data-wow-delay=".3s">
            {blogItemsList &&
               <div className="row">
                {blogItemsList.slice(6, 8).map((item, num) => (
                  <div className={item.columClass} key={num}>
                     <div className="blog-single style-5 mb-45">
                        <div className={item.imgClass}>
                           <Link href={`/blog-details/${item.id}`}><a><img src={item.img} alt=""/></a></Link>
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
                           <p className="blog-text">{item.desc}</p>
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

export default BlogSectionFive;