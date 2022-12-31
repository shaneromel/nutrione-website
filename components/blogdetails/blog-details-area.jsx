import Link from 'next/link';
import React from 'react';
import BlogAbout from '../blog/blog-about';
import BlogCategories from '../blog/blog-categories';
import BlogSearch from '../blog/blog-search';
import BlogTag from '../blog/blog-tag';
import SidebarBlogs from '../blog/sidebar-blogs';
import SponsorAdd from '../blog/sponsor-add';
import Breadcrumb from '../common/breadcrumb';
import BlogActions from './blog-actions';
import BlogComment from './blog-comment';
import BlogForm from './blog-form';
import BlogNav from './blog-nav';
import BlogWritter from './blog-writter';


const BlogDetailsArea = ({ item }) => {
   return (
      <>
         <Breadcrumb breadTitle={'blog details'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'blog details'} />

         <section className="blog-area pt-120 pb-60">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-xl-9 col-lg-8 col-md-12">
                     <div className="blog-details-wrapper mb-60">
                        <div className="blog-single-details">
                           <div className="blog-meta-list">
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-eye"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item.blogView}
                                 </div>
                              </div>
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-comments"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    <Link href="/blog-details"><a>{item.blogComment}</a></Link>
                                 </div>
                              </div>
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item.date}
                                 </div>
                              </div>
                           </div>
                           <p className="mb-55">A great commerce experience cannot be distilled to a single number. It’s not a
                              Lighthouse
                              score, or a set of Core Web
                              Vitals figures, although both are important inputs. A great commerce experience is a trilemma
                              that carefully balances
                              competing needs of delivering great customer experience, dynamic storefront capabilities, and
                              long-term business —
                              conversion, retention, re-engagement — objectives. As developers, we rightfully obsess about
                              the customer experience,
                              relentlessly working to squeeze every millisecond out of the critical rendering path,
                              optimize input latency, and
                              eliminate jank. At the limit, statically generated, edge delivered, and HTML-first pages look
                              like the optimal strategy.
                              That is until you are confronted with the realization that the next step function in
                              improving conversion rates and
                              business.</p>
                           <div className="blog-thumb">
                              <img src={item.img} alt="" />
                           </div>
                           <h3>{item.title}</h3>
                           <p className="pb-50">The journey, often, starts “simple” with localization. But then, quickly
                              advances to
                              contextual pricing, juggling
                              complexity of large and frequently updated product catalog, managing continuously running
                              multivariate tests and
                              promotion campaigns, and serving customer-tailored dynamic recommendations. Eventually, you
                              reach a realization that
                              every page is similar to an open Tetris board where each “slot” can and should be dynamically
                              tailored by dynamic
                              visitor preferences, all powered by an ever-growing set of dynamic business rules.</p>
                           <div className="hr-1"></div>
                           <h3>Setting the mood with incense</h3>
                           <div className="img-details mb-50">
                              <img src="/assets/img/blog/img-details1.jpg" alt="" />
                              <p>From connecting back-office operations to front-of-the-house A/B testing and dynamic
                                 personalization for each customer,
                                 the shared foundation is fast
                                 server-side rendering powered by fast storefront data access. On top of this foundation,
                                 we add layers of caching,
                                 prerendering and edge delivery
                                 optimizations — not the other way around.</p>
                           </div>
                           <div className="blockquote-d-wrapper mb-50">
                              <div className="blockquote-d-content">
                                 <div className="blockquote-d-icon">
                                    <img src="/assets/img/icon/quote-icon-white-small.png" alt="" />
                                 </div>
                                 <p>Choices to take a holiday and travelling
                                    out inthis pandemic situation are limited. Why not take a stay action on quality.</p>
                                 <h4 className="author-name">Rosalina D. William</h4>
                                 <span className="author-designation">Founder</span>
                              </div>
                           </div>
                           <p className="mb-45">Surveying the existing landscape of available developer tools and runtimes, we
                              felt that
                              there is a gap. Enabling
                              dynamic commerce requires close integration between server and client, an optimized streaming
                              and data fetch strategy,
                              and a production platform that operates at scale. These are hard technical problems that
                              Shopify can help solve and this
                              is why we’ve been hard at work on the Hydrogen framework. It’s a React-based framework
                              optimized for commerce and
                              specialized to be powered by Shopify APIs and infrastructure: The future of commerce is
                              dynamic and personalized.</p>
                           <BlogActions />
                           <BlogNav />
                           <BlogWritter />
                           <BlogComment />
                           <div className="hr-1"></div>
                           <BlogForm />
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
      </>
   );
};

export default BlogDetailsArea;