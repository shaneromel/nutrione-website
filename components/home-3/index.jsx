import React from 'react';
import FooterThree from '../../layout/footers/footerthree';
import HeaderThree from '../../layout/headers/headerthree';
import HeroSliderThree from '../elements/hero/hero-slider-three';
import PortfolioSliderThree from '../elements/portfolio/portfolio-slider-three';
import TestimonialSliderThree from '../elements/testimonial/testimonial-slider-three';
import AboutSectionThree from './about-section-three';
import ClientsSection from './clients-section';
import ContactSectionThree from './contact-section-three';
import FactSectionThree from './fact-section-three';
import ProductSection from './product-section';
import ServiceSectionThree from './service-section-three';


const index = () => {
    return (
        <main>
            <HeaderThree />
            <HeroSliderThree />
            <AboutSectionThree />
            <ServiceSectionThree />
            <FactSectionThree />
            <ClientsSection />
            <PortfolioSliderThree />
            <TestimonialSliderThree />
            <ProductSection />
            <ContactSectionThree />
            <FooterThree />
        </main>
    );
};

export default index;