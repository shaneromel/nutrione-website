import React from 'react';
import Counter from '../common/counter';

const FactSectionThree = () => {

    const factList = [
        {
            id: 1,
            factSerial: '01',
            factNumber: '120',
            factText: 'Active Users',
            factTextK: 'K',
        },
        {
            id: 2,
            factSerial: '02',
            factNumber: '82',
            factText: 'User passive',
            factTextK: 'K',
        },
        {
            id: 3,
            factSerial: '03',
            factNumber: '35',
            factText: 'increase in user',
            factTextK: '%',
        },
        {
            id: 4,
            factSerial: '04',
            factNumber: '50',
            factText: 'good user feedback',
            factTextK: 'K',
        }
    ]

    return (
        <div className="counter-area style-1">
            <div className="counter-bg-img-left">
                <img src="/assets/img/shape/counter-bg-img.png" alt=""/>
            </div>
            <div className="counter-bg-img-right">
                <img src="/assets/img/shape/counter-bg-img.png" alt=""/>
            </div>
            <div className="container">
                <div className="counter-wrapper">
                {factList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {factList.map((item, num) => (
                        <div className="col-lg-3 col-md-6" key={num}>
                            <div className="single-counter style-1">
                                <div className="counter-serial">{item.factSerial}</div>
                                <h2 className="counter-number"><span className="counter"><Counter number={item.factNumber} text={item.factTextK} /></span></h2>
                                <p className="counter-text">{item.factText}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                }
                </div>
            </div>
        </div>
    );
};

export default FactSectionThree;