import React from 'react';
import FooterFour from '../../layout/footers/footerfour';
import HeaderFour from '../../layout/headers/headerfour';
import HeroSliderFour from '../elements/hero/hero-slider-four';
import TestimonialSliderFour from '../elements/testimonial/testimonial-slider-four';
import BlogSectionTwo from '../home-2/blog-section-two';
import FeatureSectionFour from './feature-section-four';
import FoundationSectionFour from './foundation-section-four';
import NewsletterSectionFour from './newsletter-section-four';
import PortfolioSectionFour from './portfolio-section-four';
import ServiceSectionFour from './service-section-four';
import TeamSection from './team-section';


const index = () => {
    return (
        <main>
            <HeaderFour />
            <HeroSliderFour />
            <ServiceSectionFour />
            <FoundationSectionFour />
            <FeatureSectionFour />
            <PortfolioSectionFour />
            <TestimonialSliderFour />
            <TeamSection />
            <NewsletterSectionFour />
            <BlogSectionTwo blog_area_class="blog-area-4 pt-120 pb-75" blog_single_class="style-4 mb-45" />
            <FooterFour />
        </main>
    );
};

export default index;