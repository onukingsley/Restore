import React from 'react';
import {useParams} from "react-router-dom";


const CheckoutComplete = () => {
    const UUID = useParams()
    console.log(UUID)
    return (
        <div>
            <div className="container pb-5 mb-sm-4">
                <div className="pt-5">
                    <div className="card py-3 mt-sm-3">
                        <div className="card-body text-center">
                            <h2 className="h4 pb-3">Thank you for your order!</h2>
                            <p className="fs-sm mb-2">Your order has been placed and will be processed as soon as
                                possible.</p>
                            <p className="fs-sm mb-2">Make sure you make note of your order number, which is <span
                                className='fw-medium'>{UUID.UUID}.</span></p>
                            <p className="fs-sm">You will be receiving an email shortly with confirmation of your
                                order. <u>You can now:</u></p><a className="btn btn-secondary mt-3 me-3"
                                                                 href="shop-grid-ls.html">Go back shopping</a><a
                            className="btn btn-primary mt-3" href="order-tracking.html"><i
                            className="ci-location"></i>&nbsp;Track order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutComplete;
