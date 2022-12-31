import React from 'react';

const Pagination = () => {
    return (
        <div className="basic-pagination mt-0 wow fadeInUp" data-wow-delay=".3s">
            <ul>
                <li><a className="prev page-numbers" href="#"><i className="fal fa-angle-double-left"></i></a></li>
                <li><span aria-current="page" className="page-numbers current">1</span></li>
                <li><a className="page-numbers" href="#">2</a></li>
                <li><a className="page-numbers" href="#">3</a></li>
                <li><a className="next page-numbers" href="#"><i className="fal fa-angle-double-right"></i></a></li>
            </ul>
        </div>
    );
};

export default Pagination;