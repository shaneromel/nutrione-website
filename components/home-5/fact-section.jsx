import React from 'react';
import Counter from '../common/counter';

const FactSection = () => {

    const factList = [
        {
            id: 1,
            factTitle: 'year experience since',
            factNumber: '2000',
            factIcon: '/assets/img/icon/fact-icon.png',
            factDesk: 'Delivering solutions for your garden in very easily.',
            factPlant: 'fact-single'
        },
        {
            id: 2,
            factTitle: 'house captured',
            factNumber: '9250',
            factIcon: '/assets/img/icon/fact-icon.png',
            factDesk: 'Delivering solutions for your garden in very easily.',
            factPlant: 'fact-single fact-plant-shape'
        },
        {
            id: 3,
            factTitle: 'worldwide base',
            factNumber: '3200',
            factIcon: '/assets/img/icon/fact-icon.png',
            factDesk: 'Delivering solutions for your garden in very easily.',
            factPlant: 'fact-single'
        }
    ]

    return (
        <section className="fact-area fact-area-bg">
            <div className="fact-batch">
                <img src="/assets/img/icon/fact-batch.png" alt=""/>
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12 col-md-10">
                        <div className="section-title fact-title text-center">
                            <span className="section-subtitle">fun fact</span>
                            <h2 className="section-main-title mb-45">We handle everything for you!</h2>
                        </div>
                    </div>
                </div>
                <div className="fact-wrapper wow fadeInUp" data-wow-delay=".3s">
                    {factList &&
                        <div className="row">
                            {factList.map((item, num) => (
                                <div className="col-lg-4" key={num}>
                                    <div className={item.factPlant}>
                                        <div className="fact-content">
                                            <span className="fact-title">{item.factTitle}</span>
                                            <span className="fact-number counter"><Counter number={item.factNumber} /></span>
                                            <div className="fact-icon">
                                                <img src={item.factIcon} alt=""/>
                                            </div>
                                            <p>{item.factDesk}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default FactSection;