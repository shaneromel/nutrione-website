import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSectionMain from './blog-section-main';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'blog & insights'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Blog'} />
            <BlogSectionMain />
            <FooterOne />
        </main>
    );
};

export default index;