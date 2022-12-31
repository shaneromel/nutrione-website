import React from 'react';
import FooterFive from '../../layout/footers/footerfive';
import HeaderFive from '../../layout/headers/headerfive';
import HeroSliderFive from '../elements/hero/hero-slider-five';
import InstagramSlider from '../elements/instagram/instagram-slider';
import ProductBanner from '../elements/product/product-banner';
import ProductSliderFive from '../elements/product/product-slider-five';
import BlogSectionFive from './blog-section-five';
import ClientsSectionFive from './clients-section-five';
import ProductSectionFive from './product-section-five';
import ServiceSectionFive from './service-section-five';
import TeamIntroSection from './teamIntro-section';
import VideoSectionFive from './video-section-five';



const index = () => {
    return (
        <main>
            <HeaderFive />
            <HeroSliderFive />
            <ProductBanner />
            <ProductSectionFive />
            <TeamIntroSection />
            <ServiceSectionFive />
            <VideoSectionFive />
            <ProductSliderFive />
            <ClientsSectionFive />
            <InstagramSlider />
            <BlogSectionFive />
            <FooterFive />
        </main>
    );
};

export default index;