import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import NavMenu from './navmenu';


const HeaderThree = () => {
    const [openCart,setOpenCart] = useState(false)
    const dispatch = useDispatch();
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.header-main');
        const scrollTop = window.scrollY;
        scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End

    return (
        <>
            <header className="header3">
                <div id="header-sticky" className="header-main header-main3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header3">
                                        <div className="header-logo header3-logo">
                                            <Link href="/"><a className="logo-w"><img src="/assets/img/logo/logo-w.png" alt="logo-img" /></a></Link>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header3">
                                        <div className="main-menu main-menu3 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <span className="action-btn cart-btn d-inline-flex action-item-cart" onClick={()=> setOpenCart(true)}><i className="fas fa-shopping-basket"></i> <span className='product-quantity-circle-cart'>({quantity})</span></span>
                                        <Link href="/contact"><a className="border-btn-rounded d-none d-xl-inline-flex"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                                        <div className="menu-bar d-lg-none">
                                            <button className="side-toggle" type='button' onClick={() => setShowSidebar(true)}>
                                                <div className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}

            {/* side cart */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/>
            {/* side cart */}
        </>
    );
};

export default HeaderThree;