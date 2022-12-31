import React from 'react';
import productList from '../../data/products';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import ShopDetailsArea from './shop-details-area';


const item = productList[0]

const index = () => {
    return (
        <main>
            <HeaderOne />
            <ShopDetailsArea item={item} />
            <FooterOne />
        </main>
    );
};

export default index;