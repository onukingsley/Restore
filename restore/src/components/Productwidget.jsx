import React from 'react';
import ItemCardSm from "./ItemCardSm";

const Productwidget = () => {
    return (

        <section className="container pb-4 pb-md-5">
            <div className="row">


                <div className="col-md-4 col-sm-6 mb-2 py-3">
                    <div className="widget">
                        <h3 className="widget-title">Bestsellers</h3>


                        <ItemCardSm style={'pb-2'} num={'05'}/>
                        <ItemCardSm style={'py-2'} num={'03'}/>
                        <ItemCardSm style={'py-2'} num={'04'}/>
                        <ItemCardSm style={'py-2'} num={'01'}/>

                        <div className="d-flex align-items-center py-2"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="img/shop/cart/widget/08.jpg" width="64" alt="Product"/></a>
                            <div className="ps-2">
                                <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smart TV Box</a></h6>
                                <div className="widget-product-meta"><span className="text-accent">$67.<small>00</small></span>
                                    <del className="text-muted fs-xs">$90.<small>43</small></del>
                                </div>
                            </div>
                        </div>
                        <p className="mb-0">...</p><a className="fs-sm" href="shop-grid-ls.html">View more<i className="ci-arrow-right fs-xs ms-1"></i></a>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-2 py-3">
                    <div className="widget">
                        <h3 className="widget-title">New arrivals</h3>
                        <ItemCardSm num={'02'} style={'ps-2'}/>
                        <ItemCardSm num={'08'} style={'ps-2'}/>
                        <ItemCardSm num={'07'} style={'ps-2'}/>
                        <ItemCardSm num={'01'} style={'ps-2'}/>
                        <ItemCardSm num={'03'} style={'ps-2'}/>

                        <p className="mb-0">...</p><a className="fs-sm" href="shop-grid-ls.html">View more<i className="ci-arrow-right fs-xs ms-1"></i></a>
                    </div>
                </div>



                <div className="col-md-4 col-sm-6 mb-2 py-3">
                    <div className="widget">
                        <h3 className="widget-title">Top rated</h3>
                        <ItemCardSm style={'pb-2'} num={'05'}/>
                        <ItemCardSm style={'py-2'} num={'04'}/>
                        <ItemCardSm style={'py-2'} num={'02'}/>
                        <ItemCardSm style={'py-2'} num={'03'}/>
                        <div className="d-flex align-items-center py-2"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="img/shop/widget/13.jpg" width="64" alt="Product"/></a>
                            <div className="ps-2">
                                <h6 className="widget-product-title"><a href="shop-single-v2.html">Digital Camera 40MP</a></h6>
                                <div className="widget-product-meta"><span className="text-accent">$210.<small>00</small></span>
                                    <del className="text-muted fs-xs">$249.<small>00</small></del>
                                </div>
                            </div>
                        </div>
                        <p className="mb-0">...</p><a className="fs-sm" href="shop-grid-ls.html">View more<i className="ci-arrow-right fs-xs ms-1"></i></a>
                    </div>
                </div>
            </div>
        </section>

);
};

export default Productwidget;
