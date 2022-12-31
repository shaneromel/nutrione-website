import React from 'react';
import TeamList from '../../data/team-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import TeamDetailsArea from './team-details-area';


const item = TeamList[0]

const index = () => {
    return (
        <main>
            <HeaderOne />
            <TeamDetailsArea item={item} />
            <FooterOne />
        </main>
    );
};

export default index;