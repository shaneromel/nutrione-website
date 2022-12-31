import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import PortfolioTabSection from './portfolio-tab-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'case study'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'portfolio'} />
            <PortfolioTabSection />
            <FooterOne />
        </main>
    );
};

export default index;