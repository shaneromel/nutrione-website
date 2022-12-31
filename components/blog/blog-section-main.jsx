import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import blogItemsList from '../../data/blogs';
import BlogAbout from './blog-about';
import BlogSearch from './blog-search';
import SidebarBlogs from './sidebar-blogs';
import BlogTag from './blog-tag';
import BlogCategories from './blog-categories';
import SponsorAdd from './sponsor-add';

const BlogSectionMain = () => {

   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => setIsOpen(!isOpen);

   return (
      <section className="blog-area pt-120 pb-60">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">

               <div className="col-xl-9 col-lg-8 col-md-12">
                  <div className="blog-main-wrapper mb-60">

                     {blogItemsList.slice(11, 15).map((blog, i) => (
                        <div key={i} className="blog-single">

                           {!blog.video && !blog.slider && !blog.withoutImg && <div className="blog-thumb">
                              <Link href={`/blog-details/${blog.id}`}><a><img src={blog.img} alt="" /></a></Link>
                           </div>}

                           {blog.video && <div className="blog-thumb">
                              <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                              <Link href={`/blog-details/${blog.id}`}><a><img src={blog.img} alt="" /></a></Link>
                              <span className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                           </div>}

                           {blog.withoutImg && <div className="blog-thumb d-none">
                              <Link href={`/blog-details/${blog.id}`}><a><img src="/assets/img/blog/blog-3.jpg" alt=""/></a></Link>
                           </div>}

                           {blog.slider && <div className="blog-thumb">
                              <div className="swiper-container blog-thumb-slider">
                                 <div className="swiper-wrapper">
                                    <Swiper
                                       modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                       spaceBetween={30}
                                       slidesPerView={1}
                                       autoplaydisableoninteraction={"false"}
                                       loop={true}
                                       autoplay={{
                                          delay: 3000,
                                          disableOnInteraction: true
                                       }}
                                       navigation={{
                                          clickable: true,
                                          nextEl: '.blog-thumb-button-next',
                                          prevEl: '.blog-thumb-button-prev',
                                       }}
                                    >
                                       <SwiperSlide>
                                          <div className="swiper-slidess">
                                             <Link href={`/blog-details/${blog.id}`}><a><img src={blog.img} alt="" /></a></Link>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="swiper-slidess">
                                             <Link href={`/blog-details/${blog.id}`}><a><img src={blog.imgA} alt="" /></a></Link>
                                          </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                          <div className="swiper-slidess">
                                             <Link href={`/blog-details/${blog.id}`}><a><img src={blog.imgB} alt="" /></a></Link>
                                          </div>
                                       </SwiperSlide>
                                    </Swiper>
                                 </div>
                                 <div className="blog-thumb-nav blog-thumb-nav">
                                    <div className="blog-thumb-button-prev blog-thumb-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                    </div>
                                    <div className="blog-thumb-button-next blog-thumb-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>}

                           <div className="blog-content">
                              <div className={blog.catClass}>
                                 <Link href="/blog"><a>{blog.blogCat} </a></Link>
                                 <Link href="/blog"><a>{blog.blogCatA}</a></Link>
                              </div>
                              <div className={blog.authorClass}>
                                 <div className="author-img">
                                    <img src={blog.metaAuthorImg} alt="" />
                                 </div>
                                 <h4 className="author-name">{blog.metaBy} <a href="#">{blog.metaAuthor}</a></h4>
                              </div>
                              <h2 className="blog-title"><Link href={`/blog-details/${blog.id}`}><a>{blog.title}</a></Link></h2>
                              <p>{blog.desc}</p>
                              <div className="hr-1"></div>
                              <div className="blog-meta-list">
                                 <div className="blog-meta-single">
                                    <div className="blog-meta-icon">
                                       <i className="fas fa-eye"></i>
                                    </div>
                                    <div className="blog-meta-text">
                                       {blog.blogView}
                                    </div>
                                 </div>
                                 <div className="blog-meta-single">
                                    <div className="blog-meta-icon">
                                       <i className="fas fa-comments"></i>
                                    </div>
                                    <div className="blog-meta-text">
                                       <Link href={`/blog-details/${blog.id}`}><a>{blog.blogComment}</a></Link>
                                    </div>
                                 </div>
                                 <div className="blog-meta-single">
                                    <div className="blog-meta-icon">
                                       <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="blog-meta-text">
                                       {blog.date}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="blockquote-wrapper">
                        <div className="blockquote-content">
                           <div className="blockquote-icon">
                              <img src="/assets/img/icon/quote-icon.png" alt="" />
                           </div>
                           <p>Office/partnership by submitting all
                              the relevant documents</p>
                        </div>
                     </div>
                     <div className="basic-pagination mt-50">
                        <ul>
                           <li><a className="prev page-numbers" href="#"><i className="fal fa-angle-double-left"></i></a></li>
                           <li><span aria-current="page" className="page-numbers current">1</span></li>
                           <li><a className="page-numbers" href="#">2</a></li>
                           <li><a className="next page-numbers" href="#"><i className="fal fa-angle-double-right"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="col-xl-3 col-lg-4 col-md-8">
                  <div className="blog-sidebar_wrapper mb-60">
                     <BlogAbout />
                     <BlogSearch />
                     <SidebarBlogs />
                     <BlogCategories />
                     <BlogTag />
                     <SponsorAdd />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default BlogSectionMain;