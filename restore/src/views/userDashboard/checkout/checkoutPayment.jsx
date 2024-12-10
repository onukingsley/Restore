import React from 'react';
import OrderSummary from "../../../components/OrderSummary";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useStateContext} from "../../../contexts/ContextProvider";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const CheckoutPayment = () => {
    const {totalPrice,cardElement,setCardElement} = useStateContext()

    const stripe = useStripe()
    const elements = useElements();
    const navigate = useNavigate();
    console.log(stripe)

    const handleSubmit=async (e)=> {
        e.preventDefault()
        if (!stripe || !elements){
            return;
        }
       /* const card = elements.getElement(CardElement)*/
        const cardDetails = CardElement
        console.log(cardDetails)
        if (card){
           //setCardElement(cardDetails)
            console.log(cardElement)
          //  navigate("/dashboard/checkoutReview")
        }





       /* await axios.post('http://127.0.0.1:8000/api/v1/stripe',{amount:totalPrice})
            .then(async ({data})=>{
                const cardElement = elements.getElement(CardElement)
                const paymentResult = await stripe.confirmCardPayment(data.clientSecret,{
                    payment_method:{
                        card:cardElement
                    }
                })
                if (paymentResult.error){
                    console.log(paymentResult.error.message)
                }else if (paymentResult.paymentIntent.status === 'succeeded'){
                    console.log('payment Made')
                }

            }).catch(e=>console.log(e));*/
       /* const {data} =await axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/v1/stripe?amount=${totalPrice}`,

        })*/
       /* const cardElement = elements.getElement(CardElement)
        const paymentResult = await stripe.confirmCardPayment(data.clientSecret,{
            payment_method:{
                card:cardElement
            }
        })*/



    }

    return (
        <div>
            {/* Page Title*/}
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
                        <div className="steps steps-light pt-2 pb-3 mb-5"><a className="step-item active" href="shop-cart.html">
                            <div className="step-progress"><span className="step-count">1</span></div>
                            <div className="step-label"><i className="ci-cart"></i>Cart</div></a><a className="step-item active" href="checkout-details.html">
                            <div className="step-progress"><span className="step-count">2</span></div>
                            <div className="step-label"><i className="ci-user-circle"></i>Details</div></a><a className="step-item active" href="checkout-shipping.html">
                            <div className="step-progress"><span className="step-count">3</span></div>
                            <div className="step-label"><i className="ci-package"></i>Shipping</div></a><a className="step-item active current" href="checkout-payment.html">
                            <div className="step-progress"><span className="step-count">4</span></div>
                            <div className="step-label"><i className="ci-card"></i>Payment</div></a><a className="step-item" href="checkout-review.html">
                            <div className="step-progress"><span className="step-count">5</span></div>
                            <div className="step-label"><i className="ci-check-circle"></i>Review</div></a></div>
                        {/* Payment methods accordion-->*/}
                        <h2 className="h6 pb-3 mb-2">Choose payment method</h2>
                        <div className="accordion mb-2" id="payment-method">
                            <div className="accordion-item">
                                <h3 className="accordion-header"><a className="accordion-button" href="#card" data-bs-toggle="collapse"><i className="ci-card fs-lg me-2 mt-n1 align-middle"></i>Pay with Credit Card</a></h3>
                                <div className="accordion-collapse collapse show" id="card" data-bs-parent="#payment-method">
                                    <div className="accordion-body">
                                        <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img className="d-inline-block align-middle" src="/img/cards.png" width="187" alt="Cerdit Cards"/></p>
                                        <div className="credit-card-wrapper"></div>

                                        <form onSubmit={handleSubmit} className="credit-card-form row">
                                            <CardElement/>
                                            <button className="btn btn-outline-primary d-block w-100 mt-0" type="submit">Submit</button>
                                         {/*   <div className="mb-3 col-sm-6">
                                                <input className="form-control" type="text" name="number" placeholder="Card Number" required/>
                                            </div>
                                            <div className="mb-3 col-sm-6">
                                                <input className="form-control" type="text" name="name" placeholder="Full Name" required/>
                                            </div>
                                            <div className="mb-3 col-sm-3">
                                                <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required/>
                                            </div>
                                            <div className="mb-3 col-sm-3">
                                                <input className="form-control" type="text" name="cvc" placeholder="CVC" required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="btn btn-outline-primary d-block w-100 mt-0" type="submit">Submit</button>
                                            </div>*/}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header"><a className="accordion-button collapsed" href="#paypal" data-bs-toggle="collapse"><i className="ci-paypal me-2 align-middle"></i>Pay with PayPal</a></h3>
                                <div className="accordion-collapse collapse" id="paypal" data-bs-parent="#payment-method">
                                    <div className="accordion-body fs-sm">
                                        <p><span className='fw-medium'>PayPal</span> - the safer, easier way to pay</p>
                                        <form className="row needs-validation" method="post" novalidate>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input className="form-control" type="email" placeholder="E-mail" required/>
                                                        <div className="invalid-feedback">Please enter valid email address</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <input className="form-control" type="password" placeholder="Password" required/>
                                                        <div className="invalid-feedback">Please enter your password</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap justify-content-between align-items-center"><a className="nav-link-style" href="#">Forgot password?</a>
                                                    <button className="btn btn-primary" type="submit">Log In</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h3 className="accordion-header"><a className="accordion-button collapsed" href="#points" data-bs-toggle="collapse"><i className="ci-gift me-2"></i>Redeem Reward Points</a></h3>
                                <div className="accordion-collapse collapse" id="points" data-bs-parent="#payment-method">
                                    <div className="accordion-body">
                                        <p>You currently have<span className="fw-medium">&nbsp;384</span>&nbsp;Reward Points to spend.</p>
                                        <div className="form-check d-block">
                                            <input className="form-check-input" type="checkbox" id="use_points"/>
                                                <label className="form-check-label" for="use_points">Use my Reward Points to pay for this order.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Navigation (desktop)-->*/}
                       {/* <div className="d-none d-lg-flex pt-4">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100" href="checkout-shipping.html"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Shipping</span><span className="d-inline d-sm-none">Back</span></a></div>
                            <div className="w-50 ps-2"><a className="btn btn-primary d-block w-100" href="checkout-review.html"><span className="d-none d-sm-inline">Review your order</span><span className="d-inline d-sm-none">Review order</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></a></div>
                        </div>*/}
                    </section>
                    {/* Sidebar-->*/}
                   <OrderSummary/>
                </div>
                {/* Navigation (mobile)-->*/}
                {/*<div className="row d-lg-none">
                    <div className="col-lg-8">
                        <div className="d-flex pt-4 mt-3">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100" href="checkout-shipping.html"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Shipping</span><span className="d-inline d-sm-none">Back</span></a></div>
                            <div className="w-50 ps-2"><a className="btn btn-primary d-block w-100" href="checkout-review.html"><span className="d-none d-sm-inline">Review your order</span><span className="d-inline d-sm-none">Review order</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></a></div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    );
};

export default CheckoutPayment;
