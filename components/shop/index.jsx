import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ShopsSection from './shops-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'our products'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'shop'} />
            <ShopsSection />
            <FooterOne />
        </main>
    );
};

export default index;