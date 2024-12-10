import React from 'react';

const OrderModal = ( {props}) => {
    const id = `order-details${props.key}`
    console.log(props.key)
    console.log(props.property)
    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Order No - {props.key}</h5>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                        {/* Item-->*/}
                        {props.property.map((item)=>{
                            return <div className="d-sm-flex justify-content-between mb-4 pb-3 pb-sm-2 border-bottom">
                                <div className="d-sm-flex text-center text-sm-start"><a
                                    className="d-inline-block flex-shrink-0 mx-auto" href="shop-single-v1.html"
                                    style={{width: "10rem"}}><img src={`/${item.product.image}`} alt="Product"/></a>
                                    <div className="ps-sm-4 pt-2">
                                        <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">{item.product.productName}</a></h3>
                                        <div className="fs-sm"><span className="text-muted me-2">Size:</span>8.5</div>
                                        <div className="fs-sm"><span
                                            className="text-muted me-2">Color:</span>White &amp; Blue
                                        </div>
                                        <div className="fs-lg text-accent pt-2">${item.product.discountPrice??item.product.price}</div>
                                    </div>
                                </div>
                                <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                                    <div className="text-muted mb-2">Quantity:</div>
                                    {item.quantity}
                                </div>
                                <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                                    <div className="text-muted mb-2">Subtotal</div>
                                    {Number(item.product.discountPrice ?? item.product.price)* Number(item.quantity)}
                                </div>
                            </div>
                        })}



                       {/* Item-->*/}
                        {/*<div className="d-sm-flex justify-content-between my-4">
                            <div className="d-sm-flex text-center text-sm-start"><a
                                className="d-inline-block flex-shrink-0 mx-auto" href="shop-single-v1.html"
                                style={{width: "10rem"}}><img src="img/shop/cart/04.jpg" alt="Product"/></a>
                                <div className="ps-sm-4 pt-2">
                                    <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">Cotton Polo
                                        Regular Fit</a></h3>
                                    <div className="fs-sm"><span className="text-muted me-2">Size:</span>42</div>
                                    <div className="fs-sm"><span className="text-muted me-2">Color:</span>Light blue
                                    </div>
                                    <div className="fs-lg text-accent pt-2">$9.<small>00</small></div>
                                </div>
                            </div>
                            <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                                <div className="text-muted mb-2">Quantity:</div>
                                1
                            </div>
                            <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                                <div className="text-muted mb-2">Subtotal</div>
                                $9.<small>00</small>
                            </div>
                        </div>*/}
                    </div>
                   {/*Footer*/}
                    <div className="modal-footer flex-wrap justify-content-between bg-secondary fs-md">
                        <div className="px-2 py-1"><span
                            className="text-muted">Subtotal:&nbsp;</span><span></span></div>
                        <div className="px-2 py-1"><span
                            className="text-muted">Shipping:&nbsp;</span><span></span></div>
                        <div className="px-2 py-1"><span
                            className="text-muted">Tax:&nbsp;</span><span></span></div>
                        <div className="px-2 py-1"><span className="text-muted">Total:&nbsp;</span><span
                            className="fs-lg">${props.property[0].total}</span></div>
                    </div>
                </div>
            </div>
            </div>

    );
};

export default OrderModal;
