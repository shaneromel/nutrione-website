import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import WishlistSection from './wishlist-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'Wishlist'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Wishlist'} />
            <WishlistSection />
            <FooterOne />
        </main>
    );
};

export default index;