import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTop from './headertop';
import NavMenu from './navmenu';

const HeaderOne = () => {
    const [openCart,setOpenCart] = useState(false)
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
            <header className="header1">
                <HeaderTop />
                <div id="header-sticky" className="header-main header-main1">
                    <div className="container container-big">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header1">
                                        <div className="header-logo header1-logo">
                                            <Link href="/"><a className="logo-bl"><img src="/assets/img/logo/logo-w-bg.png"
                                                alt="logo-img" /></a></Link>
                                        </div>
                                        <div className="main-menu main-menu1 d-none d-xl-block">
                                            <nav id="mobile-menu">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header1">
                                        <span onClick={()=> setOpenCart(true)} className="action-btn cart-btn d-inline-flex action-item-cart"><i className="fas fa-shopping-basket"></i><span className='product-quantity-circle-cart'>({quantity})</span></span>
                                        <Link href="/contact"><a className="border-btn-rounded d-none d-lg-inline-flex"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                                        <div className="menu-bar d-xl-none">
                                            <span className="side-toggle" onClick={() => setShowSidebar(true)}>
                                                <div className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </span>
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

export default HeaderOne;