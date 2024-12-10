import React from 'react';

const PromoBanner = () => {
    return (
        <div>
             {/*Promo banner*/}
            <section className="container mt-4 mb-grid-gutter">
                <div className="bg-faded-info rounded-3 py-4">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="px-4 pe-sm-0 ps-sm-5"><span className="badge bg-danger">Limited Offer</span>
                                <h3 className="mt-4 mb-1 text-body fw-light">All new</h3>
                                <h2 className="mb-1">Last Gen iPad Pro</h2>
                                <p className="h5 text-body fw-light">at discounted price. Hurry up!</p>
                                <div className="countdown py-2 h4" data-countdown="07/01/2023 07:00:00 PM">
                                    <div className="countdown-days"><span className="countdown-value"></span><span className="countdown-label text-muted">d</span></div>
                                    <div className="countdown-hours"><span className="countdown-value"></span><span className="countdown-label text-muted">h</span></div>
                                    <div className="countdown-minutes"><span className="countdown-value"></span><span className="countdown-label text-muted">m</span></div>
                                    <div className="countdown-seconds"><span className="countdown-value"></span><span className="countdown-label text-muted">s</span></div>
                                </div><a className="btn btn-accent" href="#">View offers<i className="ci-arrow-right fs-ms ms-1"></i></a>
                            </div>
                        </div>
                        <div className="col-md-7"><img src="img/home/banners/offer.jpg" alt="iPad Pro Offer"/></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PromoBanner;
