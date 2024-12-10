import React from 'react';
import ItemCard from "./ItemCard";
import Quickview from "./quickview";

const TrendingProduct = ({product}) => {
    return (
        <section className="container pt-5">

            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-2">Trending products</h2>
                <div className="pt-3"><a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1 me-n1"></i></a></div>
            </div>

            <div className="row pt-2 mx-n2">

                {Object.keys(product).map((key,value)=>{
                    return <> <ItemCard props={product[key]}/></>
                })}

           {/* <ItemCard num={60}/>
            <ItemCard num={51}/>
            <ItemCard num={52}/>
            <ItemCard num={53}/>
            <ItemCard num={54}/>
            <ItemCard num={55}/>*/}

             {/*  Product*/}
                {/*<div className="col-lg-3 col-md-4 col-sm-6 px-2">
                    <div className="card product-card">
                        <div className="product-card-actions d-flex align-items-center"><a className="btn-action nav-link-style me-2" href="#"><i className="ci-compare me-1"></i>Compare</a>
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
                        </div><a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html"><img src="img/shop/catalog/65.jpg" alt="Product"/></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Computers</a>
                            <h3 className="product-title fs-sm"><a href="shop-single-v2.html">Convertible 2-in-1 HD Laptop</a></h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price"><span className="text-accent">$412.<small>00</small></span></div>
                            </div>
                        </div>
                        <div className="card-body card-body-hidden">
                            <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                            <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view-electro" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </section>

);
};

export default TrendingProduct;
