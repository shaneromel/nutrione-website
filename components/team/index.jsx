import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSectionFive from '../home-5/blog-section-five';
import TeamIntroSection from '../home-5/teamIntro-section';
import TeamsSection from './teams-section';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'expert management'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Team'} />
            <TeamsSection />
            <TeamIntroSection />
            <BlogSectionFive />
            <FooterOne />
        </main>
    );
};

export default index;