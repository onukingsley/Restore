import React from 'react';
import {useStateContext} from "../contexts/ContextProvider";

const OrderSummary = () => {

    const {user, cart, totalPrice} = useStateContext();

    return (
        <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
            <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
                <div className="py-2 px-xl-2">
                    <div className="widget mb-3">
                        <h2 className="widget-title text-center">Order summary</h2>
                        {Object.keys(cart).length !== 0 ? Object.values(cart).map((item)=>{
                            return  <div className="d-flex align-items-center pb-2 border-bottom"><a
                                className="d-block flex-shrink-0" href="shop-single-v1.html"><img
                                src={`/${item.image}`} width="64" alt="Product"/></a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title"><a href="shop-single-v1.html">Women
                                        Colorblock Sneakers</a></h6>
                                    <div className="widget-product-meta"><span className="text-accent me-2"> ${item.price}</span><span
                                        className="text-muted">x {item.quant}</span></div>
                                </div>
                            </div>

                        }):(<p>no cart</p>)}


                    </div>
                    <ul className="list-unstyled fs-sm pb-2 border-bottom">
                        <li className="d-flex justify-content-between align-items-center"><span
                            className="me-2">Subtotal:</span><span
                            className="text-end">${totalPrice}</span></li>
                        <li className="d-flex justify-content-between align-items-center"><span
                            className="me-2">Shipping:</span><span className="text-end">—</span></li>
                        <li className="d-flex justify-content-between align-items-center"><span
                            className="me-2">Taxes:</span><span
                            className="text-end">—</span></li>
                        <li className="d-flex justify-content-between align-items-center"><span
                            className="me-2">Discount:</span><span className="text-end">—</span></li>
                    </ul>
                    <h3 className="fw-normal text-center my-4">${totalPrice}</h3>
                    <form className="needs-validation" method="post" noValidate>
                       {/* <div className="mb-3">
                            <input className="form-control" type="text" placeholder="Promo code" required/>
                            <div className="invalid-feedback">Please provide promo code.</div>
                        </div>*/}
                     {/*   <button className="btn btn-outline-primary d-block w-100" type="submit">Apply promo
                            code
                        </button>*/}
                    </form>
                </div>
            </div>
        </aside>
    );
};

export default OrderSummary;
