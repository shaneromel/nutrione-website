import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSection from '../home/blog-section';
import ServiceChooseSection from './service-choose-section';
import ServicesSection from './services-section';



const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'what we do'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'services'} />
            <ServicesSection />
            <ServiceChooseSection />
            <BlogSection />
            <FooterOne />
        </main>
    );
};

export default index;