import React, {useState} from 'react';
import {useStateContext} from "../../../contexts/ContextProvider";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import axiosClient from "../../../axios-client";
import {v4} from "uuid"
import {useNavigate} from "react-router-dom";
import * as promise from "axios";


const CheckoutReview = () => {

    const {totalPrice,cardElement, cart,setTotalPrice, setCart} = useStateContext()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const [successful, setSuccessful] = useState(true)
    const stripe = useStripe()
    const element = useElements();
    const navigate = useNavigate();



    const removeItem = (id)=>{
        const deleteitem = axiosClient.delete(`v1/carts/${id}`)
            .then(({data})=>{
                 Alert.alert(data);
                console.log(data)
        }).catch(e=>Alert.alert(e))
    }
    const handleSubmit = async ()=>{
        setLoading(true)
        console.log('hello')
        const card = element.getElement(CardElement)
        if (!stripe || !card){
            console.log('no cardelement')
            return;
        }

       /* this function gets the client and immediately makes payment */

        await axios.post('http://127.0.0.1:8000/api/v1/stripe', {amount: totalPrice})
            .then(async ({data}) => {
                const paymentResult = await stripe.confirmCardPayment(data.clientSecret, {
                    payment_method: {
                        card: card
                    }
                })
                if (paymentResult.error) {
                    console.log(paymentResult.error.message)
                    setSuccessful(false)
                    setError(paymentResult.error.message)
                } else if (paymentResult.paymentIntent.status === 'succeeded') {
                    let UUID = v4()

                   const request =  Object.values(cart).map((item)=>{
                        const payload = {
                            "product_id" : item.product_id,
                            "store_id" : item.store_id,
                            "quantity" : item.quant,
                            "paymentMethod" : 'CardPayment',
                            "deliveryMethod" : 'home',
                            "UUID" : UUID,
                            'total' : totalPrice,
                            'payment_id' : paymentResult.paymentIntent.id,
                            "pickupStation" : 'home Delivery',
                        }

                       return  axiosClient.post('v1/orders',payload)
                            .then(({data})=>{
                                console.log(data)
                        }).catch(e=>console.log(e))
                    })
                    promise.all(request).then(()=>{
                        setSuccessful(true)
                        setMessage('Payment Successful')
                        console.log('payment Made ' + paymentResult.paymentIntent.id)
                        setLoading(false)
                        window.location.href = `/dashboard/checkoutComplete/${UUID}`
                    }).catch(e=>console.log(e))


                }
                setLoading(false)
            }).catch(e => console.log(e))

    }


    return (
        <div>
            {/*Page Title*/}
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
                        {/*-- Steps-->*/}
                        <div className="steps steps-light pt-2 pb-3 mb-5"><a className="step-item active" href="/dashboard/cart">
                            <div className="step-progress"><span className="step-count">1</span></div>
                            <div className="step-label"><i className="ci-cart"></i>Cart</div></a><a className="step-item active" href="/dashboard/checkoutDetails">
                            <div className="step-progress"><span className="step-count">2</span></div>
                            <div className="step-label"><i className="ci-user-circle"></i>Details</div></a><a className="step-item active" href="/dashboard/checkoutShipping">
                            <div className="step-progress"><span className="step-count">3</span></div>
                            <div className="step-label"><i className="ci-package"></i>Shipping</div></a><a className="step-item  current" href="/dashboard/checkoutReview">
                           <div className="step-progress"><span className="step-count">4</span></div>
                            <div className="step-label"><i className="ci-check-circle"></i>Review</div></a></div>
                        {/*-- Order details-->*/}
                        <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Review your order</h2>
                        {/*-- Item-->*/}
                        {Object.values(cart).map((item)=>{
                            return   <div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
                                <div className="d-sm-flex text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="shop-single-v1.html"><img src={`/${item.image}`} width="160" alt="Product"/></a>
                                    <div className="pt-2">
                                        <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">{item.productTitle}</a></h3>
                                       {/* <div className="fs-sm"><span className="text-muted me-2">Size:</span>8.5</div>
                                        <div className="fs-sm"><span className="text-muted me-2">Color:</span>White &amp; Blue</div>*/}
                                        <div className="fs-sm"><span className="text-muted me-2">${item.price}</span> X{item.quant}</div>
                                        <div className="fs-lg text-accent pt-2"></div>
                                        <div className="fs-lg text-accent pt-2">Total Price: ${item.price * item.quant} </div>
                                    </div>
                                </div>
                                <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end" style={{maxWidth: "9rem"}}>
                                    <p className="mb-0"><span className="text-muted fs-sm">Quantity:</span><span>&nbsp;{item.quant}</span></p>
                                    <button className="btn btn-link px-0" onClick={()=>{setCart((cart)=>Object.values(cart).filter((it)=> it.product_id !== item.product_id)); setTotalPrice((totalPrice)=>totalPrice - item.price*item.quant);removeItem(item.product_id)}} type="button"><i className="ci-edit me-2"></i><span className="fs-sm">Remove</span></button>
                                </div>
                            </div>
                        })}


                        {/*-- Client details-->*/}
                        <div className="bg-secondary rounded-3 px-4 pt-4 pb-2">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 className="h6">Shipping to:</h4>
                                    <ul className="list-unstyled fs-sm">
                                        <li><span className="text-muted">Client:&nbsp;</span>Susan Gardner</li>
                                        <li><span className="text-muted">Address:&nbsp;</span>44 Shirley Ave. West Chicago, IL 60185, USA</li>
                                        <li><span className="text-muted">Phone:&nbsp;</span>+1 (808) 764 554 330</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="h6">Payment method:</h4>
                                    <p>Please Enter your Card Details below</p><br/>
                                   <CardElement/>
                                    {error &&  <div style={{color: 'red', fontSize: '10px'}}>{error}</div>}
                                    {message &&  <div style={{color: 'green', fontSize: '10px'}}>{message}</div>}
                                </div>
                            </div>
                        </div>
                        {/*-- Navigation (desktop)-->*/}
                        <div className="d-none d-lg-flex pt-4">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100" href="checkout-payment.html"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Payment</span><span className="d-inline d-sm-none">Back</span></a></div>
                            <div className="w-50 ps-2">

                                <button
                                    className="btn btn-primary d-block w-100"
                                    disabled={loading}
                                    onClick={() => {
                                        handleSubmit();
                                    }}
                                >
                                    {loading ? (
                                        <span className="d-none d-sm-inline">Processing Payment...</span>
                                    ):!successful ?(
                                            <span className=" d-none d-sm-inline">Invalid Card </span>
                                        )
                                        : (
                                        <span className="d-none d-sm-inline">Complete Order</span>
                                    )}
                                </button>


                            </div>
                        </div>
                    </section>
                    {/*-- Sidebar-->*/}
                    <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
                        <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
                            <div className="py-2 px-xl-2">
                                <h2 className="h6 text-center mb-4">Order summary</h2>
                                <ul className="list-unstyled fs-sm pb-2 border-bottom">
                                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Subtotal:</span><span className="text-end">${totalPrice}</span></li>
                                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Shipping:</span><span className="text-end">—</span></li>
                                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Taxes:</span><span className="text-end">—</span></li>
                                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
                                </ul>
                                <h3 className="fw-normal text-center my-4">${totalPrice}</h3>
                                <form className="needs-validation" method="post" novalidate>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" placeholder="Promo code" required/>
                                            <div className="invalid-feedback">Please provide promo code.</div>
                                    </div>
                                    <button className="btn btn-outline-primary d-block w-100" type="submit">Apply promo code</button>
                                </form>
                            </div>
                        </div>
                    </aside>
                </div>
                {/*-- Navigation (mobile)-->*/}
                <div className="row d-lg-none">
                    <div className="col-lg-8">
                        <div className="d-flex pt-4 mt-3">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100" href="checkout-payment.html"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Payment</span><span className="d-inline d-sm-none">Back</span></a></div>
                            <div className="w-50 ps-2"><a className="btn btn-primary d-block w-100" href="checkout-complete.html"><span className="d-none d-sm-inline">Complete order</span><span className="d-inline d-sm-none">Complete</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutReview;
