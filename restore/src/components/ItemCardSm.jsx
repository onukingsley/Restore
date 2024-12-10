import React from 'react';

const ItemCardSm = ({num=50,style=''}) => {
    return (
        <div className={ `d-flex align-items-center pb-2 border-bottom ${style}` }><a className="d-block flex-shrink-0"
                                                                         href="shop-single-v2.html"><img
            src={`img/shop/cart/widget/${num}.jpg`} width="64" alt="Product"/></a>
            <div className="ps-2">
                <h6 className="widget-product-title"><a href="shop-single-v2.html">Wireless Bluetooth Headphones</a>
                </h6>
                <div className="widget-product-meta"><span className="text-accent">$259.<small>00</small></span></div>
            </div>
        </div>
    );
};

export default ItemCardSm;
