import React from 'react';
import portfolioList from '../../data/portfolio-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import PortfolioDetailsArea from './portfolio-details-area';


const item = portfolioList[0]

const index = () => {
    return (
        <main>
            <HeaderOne />
            <PortfolioDetailsArea item={item} />
            <FooterOne />
        </main>
    );
};

export default index;