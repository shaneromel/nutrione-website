import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import useGlobalContext from '../../hooks/use-context';

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useGlobalContext();
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [productPages, setProductPages] = useState(false);
    const [otherPages, setOtherPages] = useState(false);
    const [blog, setBlog] = useState(false);

    const handleMenuDropDown = (page) => {
        if (page === 'home') {
            setHome(!home)
            setShop(false)
            setProductPages(false)
            setOtherPages(false);
            setBlog(false)
        }

        if (page === 'shop') {
            setHome(false)
            setShop(!shop)
            setProductPages(false)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'product-pages') {
            setHome(false)
            setShop(false)
            setProductPages(!productPages)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'other-pages') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(!otherPages)
            setBlog(false)
        }

        if (page === 'blog') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(false)
            setBlog(!blog)
        }
    }

    return (
        <>
            <div className="fix">
                <div className={`side-info ${showSidebar ? 'info-open' : ''}`}>
                    <div className="side-info-content">
                        <div className="offset-widget offset-logo mb-40">
                            <div className="row align-items-center">
                                <div className="col-9">
                                    <Link href="/"><a><img src="/assets/img/logo/logo-bl.png" alt="Logo" /></a></Link>
                                </div>
                                <div className="col-3 text-end"><button className="side-info-close" onClick={() => setShowSidebar(false)}><i className="fal fa-times"></i></button></div>
                            </div>
                        </div>
                        {/* <!-- side-mobile-menu start --> */}
                        <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                            <ul>
                                <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                                    <a onClick={() => handleMenuDropDown('home')}>Home</a >
                                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${home ? 'active' : ''}`}>
                                        <li><Link href="/">Home Style 1</Link></li>
                                        <li><Link href="/home-2">Home Style 2</Link></li>
                                        <li><Link href="/home-3">Home Style 3</Link></li>
                                        <li><Link href="/home-4">Home Style 4</Link></li>
                                        <li><Link href="/home-5">Home Style 5</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/about">About</Link></li>
                                <li className={`menu-item-has-children has-droupdown ${productPages ? 'active' : ''}`}>
                                    <a onClick={() => handleMenuDropDown('product-pages')}>Services</a>
                                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${productPages ? 'active' : ''}`}>
                                        <li><Link href="/service">Services</Link></li>
                                        <li><Link href="/service-details">Service Details</Link></li>
                                    </ul>
                                </li>
                                <li className={`menu-item-has-children has-droupdown ${blog ? 'active' : ''}`}>
                                    <a onClick={() => handleMenuDropDown('blog')}>Blog</a>
                                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${blog ? 'active' : ''}`}>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li className={`menu-item-has-children has-droupdown ${otherPages ? 'active' : ''}`}>
                                    <a onClick={() => handleMenuDropDown('other-pages')}>Pages</a>
                                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${otherPages ? 'active' : ''}`}>
                                        <li><Link href="/portfolio">Portfolio</Link></li>
                                        <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link href="/team">Team</Link></li>
                                        <li><Link href="/team-details">Team Details</Link></li>
                                        <li><Link href="/shop">Shop</Link></li>
                                        <li><Link href="/shop-details">Shop Details</Link></li>
                                        <li><Link href="/wishlist">Wishlist</Link></li>
                                        <li><Link href="/cart">Shopping Cart</Link></li>
                                        <li><Link href="/checkout">Checkout</Link></li>
                                        <li><Link href="/faq">FAQ</Link></li>
                                    </ul>
                                </li>
                                <li> <Link href="/contact">Contact</Link> </li>
                            </ul>
                        </nav>
                        {/* <!-- side-mobile-menu end --> */}
                        <div className="offset-widget offset_searchbar mb-30">
                            <form action="#" className="filter-search-input">
                                <input type="text" placeholder="Search keyword" />
                                <button type="submit"><i className="fal fa-search"></i></button>
                            </form>
                        </div>
                        <div className="offset-widget offset-support mb-30">
                            <div className="footer-support">
                                <div className="irc-item support-meta">
                                    <div className="irc-item-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="irc-item-content">
                                        <p>Emergency Call</p>
                                        <div className="support-number"><a href="tel:98965963168">989 659 631 68</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-widget offset-social mb-30">
                            <div className="footer-social">
                                <span>Connect:</span>
                                <div className="social-links">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowSidebar(false)} className={`offcanvas-overlay ${showSidebar ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default Sidebar;