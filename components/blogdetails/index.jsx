import React from 'react';
import blogItemsList from '../../data/blogs';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import BlogDetailsArea from './blog-details-area';


const item = blogItemsList[0]

const index = () => {
    return (
        <main>
            <HeaderOne />
            <BlogDetailsArea item={item} />
            <FooterOne />
        </main>
    );
};

export default index;