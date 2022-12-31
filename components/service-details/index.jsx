import React from 'react';
import ServicesList from '../../data/services-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import ServiceDetailsArea from './service-details-area';


const item = ServicesList[0]

const index = () => {
    return (
        <main>
            <HeaderOne />
            <ServiceDetailsArea item={item} />
            <FooterOne />
        </main>
    );
};

export default index;