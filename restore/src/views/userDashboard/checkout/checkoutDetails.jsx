import React, {useRef} from 'react';
import OrderSummary from "../../../components/OrderSummary";
import {useStateContext} from "../../../contexts/ContextProvider";
import axiosClient from "../../../axios-client";
import {Link, useNavigate} from 'react-router-dom'

const CheckoutDetails = () => {

    const {user} = useStateContext()
    const addressref = useRef()
    const navigate = useNavigate();

    const  checkoutShipping = ()=> {
        const payload = {
            'address' : addressref.current.value
        }
        console.log(payload)
        axiosClient.patch(`v1/users/${user.id}`,payload)
            .then(({data})=>{
                console.log(data)
                navigate('/dashboard/checkoutShipping')
            })
    }

    return (
        <div>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i
                                    className="ci-home"></i>Home</a></li>
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
                        {/*-- Steps-->*/}
                        <div className="steps steps-light pt-2 pb-3 mb-5"><Link className="step-item active" to="/dashboard/cart">
                            <div className="step-progress"><span className="step-count">1</span></div>
                            <div className="step-label"><i className="ci-cart"></i>Cart</div></Link><Link className="step-item active current" to="/dashboard/checkoutDetails">
                            <div className="step-progress"><span className="step-count">2</span></div>
                            <div className="step-label"><i className="ci-user-circle"></i>Details</div></Link><Link className="step-item " to="/dashboard/checkoutShipping">
                            <div className="step-progress"><span className="step-count">3</span></div>
                            <div className="step-label"><i className="ci-package"></i>Shipping</div></Link><Link className="step-item" to="/dashboard/checkoutReview">
                            <div className="step-progress"><span className="step-count">4</span></div>
                            <div className="step-label"><i className="ci-check-circle"></i>Review</div></Link></div>
                        {/*-- Autor info-->*/}
                        <div
                            className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <div className="img-thumbnail rounded-circle position-relative flex-shrink-0"><span
                                    className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip"
                                    title="Reward points">384</span><img className="rounded-circle"
                                                                         src="/img/shop/account/avatar.jpg" width="90"
                                                                         alt="Susan Gardner"/></div>
                                <div className="ps-3">
                                    <h3 className="fs-base mb-0">{user.name}</h3><span
                                    className="text-accent fs-sm">{user.email}</span>
                                </div>
                            </div>
                            <a className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0" href="account-profile.html"><i
                                className="ci-edit me-2"></i>Edit profile</a>
                        </div>
                        {/*-- Shipping address-->*/}

                            <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping address</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="checkout-fn">First Name</label>
                                        <input className="form-control" disabled={true} defaultValue={user.name} type="text" id="checkout-fn"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label"  htmlFor="checkout-ln">phone Number</label>
                                        <input className="form-control" disabled={true} defaultValue={user.phoneNo} type="text" id="checkout-ln"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="checkout-email">E-mail Address</label>
                                        <input className="form-control"  disabled={true} defaultValue={user.email} type="email" id="checkout-email"/>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="w-100 col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="checkout-address-1">Address 1</label>
                                        <textarea className="form-control" ref={addressref} type="text" id="checkout-address-1">{user.address}</textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="d-none d-lg-flex pt-4 mt-3">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100"
                                                          href="/dashboard/cart"><i
                                className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Cart</span><span
                                className="d-inline d-sm-none">Back</span></a></div>
                            <button onClick={checkoutShipping} className="btn btn-danger d-block  w-50 ps-2">Proceed to Shipping</button>
                        </div>

                        {/*-- Navigation (desktop)-->*/}

                    </section>
                    {/*Sidebar*/}
                    <OrderSummary/>
                </div>
                {/* Navigation (mobile)*/}
                <div className="row d-lg-none">
                    <div className="col-lg-8">
                        <div className="d-flex pt-4 mt-3">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100"
                                                          href="/dashboard/cart"><i
                                className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Cart</span><span
                                className="d-inline d-sm-none">Back</span></a></div>
                            <button onClick={checkoutShipping} className="btn btn-danger d-block  w-50 ps-2">Proceed to Shipping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDetails;
