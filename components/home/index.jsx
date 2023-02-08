import React from 'react';
import FooterOne from '../../layout/footers/footer';
import FooterFive from '../../layout/footers/footerfive';
import HeaderFive from '../../layout/headers/headerfive';
import HeaderTwo from '../../layout/headers/headertwo';
import HeroSliderFive from '../elements/hero/hero-slider-five';
import HeroSliderTwo from '../elements/hero/hero-slider-two';
import InstagramSlider from '../elements/instagram/instagram-slider';
import ProductBanner from '../elements/product/product-banner';
import ProductSliderFive from '../elements/product/product-slider-five';
import TestimonialSliderFour from '../elements/testimonial/testimonial-slider-four';
import BlogSectionFive from './blog-section-five';
import ClientsSectionFive from './clients-section-five';
import ProductSectionFive from './product-section-five';
import ServiceSectionFive from './service-section-five';
import TeamIntroSection from './teamIntro-section';
import VideoSectionFive from './video-section-five';



const index = () => {
    return (
        <main>
            <HeaderTwo />
            <HeroSliderFive />
            <ProductBanner />
            <ProductSectionFive />
            <TeamIntroSection />
            <ServiceSectionFive />
            <VideoSectionFive />
            <ProductSliderFive />
            {/* <ClientsSectionFive />
            <InstagramSlider /> */}
            <TestimonialSliderFour />
            <BlogSectionFive />
            <FooterOne />
        </main>
    );
};

export default index;