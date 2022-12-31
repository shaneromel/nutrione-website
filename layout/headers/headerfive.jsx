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


const HeaderFive = () => {
    const [openCart,setOpenCart] = useState(false);
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
            <header className=" header5">
                <div id="header-sticky" className="header-main header-main5">
                    <div className="container-fluid g-0">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header5">
                                        <div className="header-logo header5-logo">
                                            <Link href="/"><a className="logo-w"><img src="/assets/img/logo/gm-thumb-white.png" alt="logo-img" /></a></Link>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header5">
                                        <div className="main-menu main-menu5 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <span className="action-btn cart-btn d-inline-flex action-item-cart" onClick={()=> setOpenCart(true)}><i className="fas fa-shopping-basket"></i><span className='product-quantity-circle-cart product-quantity-five'>({quantity})</span></span>
                                        <div className="menu-bar d-inline-flex">
                                            <span className="side-toggle" onClick={() => setShowSidebar(true)}>
                                                <i className="flaticon-dots-menu"></i>
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

export default HeaderFive;