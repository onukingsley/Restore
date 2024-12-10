import React from 'react';
import {Link} from 'react-router-dom'
import OrderSummary from "../../../components/OrderSummary";

const CheckoutShipping = () => {
    return (
        <div>
            {/* Page Title-->*/}
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                                <li className="breadcrumb-item text-nowrap"><a href="shop-grid-ls.html">Shop</a>
                                </li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">Checkout</h1>
                    </div>
                </div>
            </div>
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    <section className="col-lg-8">
                        {/* Steps-->*/}
                        <div className="steps steps-light pt-2 pb-3 mb-5"><Link className="step-item active" to="/dashboard/cart">
                            <div className="step-progress"><span className="step-count">1</span></div>
                            <div className="step-label"><i className="ci-cart"></i>Cart</div></Link><Link className="step-item active" to="/dashboard/checkoutDetails">
                            <div className="step-progress"><span className="step-count">2</span></div>
                            <div className="step-label"><i className="ci-user-circle"></i>Details</div></Link><Link className="step-item active current" to="/dashboard/checkoutShipping">
                            <div className="step-progress"><span className="step-count">3</span></div>
                            <div className="step-label"><i className="ci-package"></i>Shipping</div></Link><Link className="step-item" to="/dashboard/checkout-review.html">
                            <div className="step-progress"><span className="step-count">4</span></div>
                            <div className="step-label"><i className="ci-check-circle"></i>Review</div></Link></div>
                        {/* Shipping methods table-->*/}
                        <h2 className="h6 pb-3 mb-2">Choose shipping method</h2>
                        <div className="table-responsive">
                            <table className="table table-hover fs-sm border-top">
                                <thead>
                                <tr>
                                    <th className="align-middle"></th>
                                    <th className="align-middle">Shipping method</th>
                                    <th className="align-middle">Delivery time</th>
                                    <th className="align-middle">Handling fee</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="courier" name="shipping-method" checked/>
                                                <label className="form-check-label" for="courier"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Courier</span><br/><span className="text-muted">All addresses (default zone), United States &amp; Canada</span></td>
                                    <td className="align-middle">2 - 4 days</td>
                                    <td className="align-middle">$26.50</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="local" name="shipping-method"/>
                                                <label className="form-check-label" for="local"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Local Shipping</span><br/><span className="text-muted">All addresses (default zone), United States &amp; Canada</span></td>
                                    <td className="align-middle">up to one week</td>
                                    <td className="align-middle">$10.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="flat" name="shipping-method"/>
                                                <label className="form-check-label" for="flat"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Flat Rate</span><br/><span className="text-muted">All addresses (default zone)</span></td>
                                    <td className="align-middle">5 - 7 days</td>
                                    <td className="align-middle">$33.85</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="ups" name="shipping-method"/>
                                                <label className="form-check-label" for="ups"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">UPS Ground Shipping</span><br/><span className="text-muted">All addresses (default zone)</span></td>
                                    <td className="align-middle">4 - 6 days</td>
                                    <td className="align-middle">$18.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="pickup" name="shipping-method"/>
                                                <label className="form-check-label" for="pickup"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Local Pickup from store</span><br/><span className="text-muted">All addresses (default zone)</span></td>
                                    <td className="align-middle">&mdash;</td>
                                    <td className="align-middle">$0.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="locker" name="shipping-method"/>
                                                <label className="form-check-label" for="locker"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Pick Up at Cartzilla Locker</span><br/><span className="text-muted">All addresses (default zone), United States &amp; Canada</span></td>
                                    <td className="align-middle">&mdash;</td>
                                    <td className="align-middle">$9.99</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="global-export" name="shipping-method"/>
                                                <label className="form-check-label" for="global-export"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Cartzilla Global Export</span><br/><span className="text-muted fs-sm">All addresses (default zone), outside United States</span></td>
                                    <td className="align-middle">3 - 4 days</td>
                                    <td className="align-middle">$25.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="same-day" name="shipping-method"/>
                                                <label className="form-check-label" for="same-day"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">Same-Day Delivery</span><br/><span className="text-muted">Only United States</span></td>
                                    <td className="align-middle">&mdash;</td>
                                    <td className="align-middle">$34.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" id="international" name="shipping-method"/>
                                                <label className="form-check-label" for="international"></label>
                                        </div>
                                    </td>
                                    <td className="align-middle"><span className="text-dark fw-medium">International Shipping</span><br/><span className="text-muted">All addresses (default zone)</span></td>
                                    <td className="align-middle">up to 15 days</td>
                                    <td className="align-middle">$27.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Navigation (desktop)-->*/}
                        <div className="d-none d-lg-flex pt-4">
                            <div className="w-50 pe-3"><Link className="btn btn-secondary d-block w-100" to="/dashboard/checkoutDetails"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Adresses</span><span className="d-inline d-sm-none">Back</span></Link></div>
                            <div className="w-50 ps-2"><Link className="btn btn-primary d-block w-100" to="/dashboard/checkoutReview"><span className="d-none d-sm-inline">Proceed to Review</span><span className="d-inline d-sm-none">Next</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></Link></div>
                        </div>
                    </section>
                    {/* Sidebar-->*/}
                   <OrderSummary/>
                </div>
                {/* Navigation (mobile)-->*/}
                <div className="row d-lg-none">
                    <div className="col-lg-8">
                        <div className="d-flex pt-4 mt-3">
                            <div className="w-50 pe-3"><Link className="btn btn-secondary d-block w-100" to="/dashboard/checkoutDetails"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Adresses</span><span className="d-inline d-sm-none">Back</span></Link></div>
                            <div className="w-50 ps-2"><Link className="btn btn-primary d-block w-100" to="/dashboard/Review"><span className="d-none d-sm-inline">Proceed to Review</span><span className="d-inline d-sm-none">Next</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutShipping;
