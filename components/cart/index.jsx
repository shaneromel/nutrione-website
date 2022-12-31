import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import CartSection from './cart-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'my cart'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'my cart'} />
            <CartSection />
            <FooterOne />
        </main>
    );
};

export default index;