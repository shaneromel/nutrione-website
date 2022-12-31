import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/common/sidebar';
import useGlobalContext from '../../hooks/use-context';
import HeaderTopFour from './headertopfour';
import NavMenu from './navmenu';


const HeaderFour = () => {

    const dispatch = useDispatch();
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
            <header className="header4">
                <HeaderTopFour />
                <div id="header-sticky" className="header-main header-main4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header4">
                                        <div className="header-logo header4-logo">
                                            <Link href="/"><a className="logo-w"><img src="/assets/img/logo/logo-w.png" alt="logo-img" /></a></Link>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header4">
                                        <div className="main-menu main-menu4 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <Link href="/contact"><a className="border-btn d-none d-xl-inline-flex"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                                        <div className="menu-bar d-lg-none">
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
        </>
    );
};

export default HeaderFour;