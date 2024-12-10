import React from 'react';

function Quickview({props}) {
    const id =  `quick-view-electro${props['id']}`

    return (

        <div className="modal-quick-view modal fade" id={id} tabindex="-1">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title product-title"><a href="shop-single-v2.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Go to product page">{props['productName']}<i className="ci-arrow-right fs-lg ms-2"></i></a></h4>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {/*Product gallery*/}
                            <div className="col-lg-7 pe-lg-0">
                                <div className="product-gallery">
                                    <div className="product-gallery-preview order-sm-2">
                                        <div className="product-gallery-preview-item active" id="first"><img className="image-zoom" src={props['image']} data-zoom="img/shop/single/gallery/05.jpg" alt="Product image"/>
                                            <div className="image-zoom-pane"></div>
                                        </div>
                                        <div className="product-gallery-preview-item" id="second"><img className="image-zoom" src="img/shop/single/gallery/06.jpg" data-zoom="img/shop/single/gallery/06.jpg" alt="Product image"/>
                                            <div className="image-zoom-pane"></div>
                                        </div>
                                        <div className="product-gallery-preview-item" id="third"><img className="image-zoom" src="img/shop/single/gallery/07.jpg" data-zoom="img/shop/single/gallery/07.jpg" alt="Product image"/>
                                            <div className="image-zoom-pane"></div>
                                        </div>
                                        <div className="product-gallery-preview-item" id="fourth"><img className="image-zoom" src="img/shop/single/gallery/08.jpg" data-zoom="img/shop/single/gallery/08.jpg" alt="Product image"/>
                                            <div className="image-zoom-pane"></div>
                                        </div>
                                    </div>
                                    <div className="product-gallery-thumblist order-sm-1"><a className="product-gallery-thumblist-item active" href="#first"><img src={props['image']} alt="Product thumb"/></a><a className="product-gallery-thumblist-item" href="#second"><img src={props['productImg'][0]['productImg1']} alt="Product thumb"/></a><a className="product-gallery-thumblist-item" href="#third"><img src={props['productImg'][0]['productImg2']} alt="Product thumb"/></a><a className="product-gallery-thumblist-item" href="#fourth"><img src={props['productImg'][0]['productImg3']} alt="Product thumb"/></a></div>
                                </div>
                            </div>
                             {/*Product details*/}
                            <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
                                <div className="product-details ms-auto pb-3">
                                    <div className="mb-2">
                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                                        </div><span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">{props['review']?.length||0} Reviews</span>
                                    </div>
                                    {props['discountPrice']?(
                                        <span>
                                         <div className="h3 fw-normal text-accent mb-3 me-1">${props['discountPrice']}
                                         <sup> <s className="h6 mb-5">${props['price']}</s></sup></div>
                                        </span>

                                    ):(
                                        <div className="h3 fw-normal text-accent mb-3 me-1">${props['price']}</div>
                                        )}

                                    <div className="fs-sm mb-4"><span className="text-heading fw-medium me-1">Color:</span><span className="text-muted" id="colorOptionText">Dark blue/Orange</span></div>
                                    <div className="position-relative me-n4 mb-3">
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input className="form-check-input" type="radio" name="color" id="color1" data-bs-label="colorOptionText" value="Dark blue/Orange" checked/>
                                                <label className="form-option-label rounded-circle" htmlFor="color1"><span className="form-option-color rounded-circle" style={{backgroundColor: '#f25540'}}></span></label>
                                        </div>
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input className="form-check-input" type="radio" name="color" id="color2" data-bs-label="colorOptionText" value="Dark gray/Green"/>
                                                <label className="form-option-label rounded-circle" htmlFor="color2"><span className="form-option-color rounded-circle" style={{backgroundColor: '#65805b'}}></span></label>
                                        </div>
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input className="form-check-input" type="radio" name="color" id="color3" data-bs-label="colorOptionText" value="White"/>
                                                <label className="form-option-label rounded-circle" htmlFor="color3"><span className="form-option-color rounded-circle" style={{backgroundColor: '#f5f5f5'}}></span></label>
                                        </div>
                                        <div className="form-check form-option form-check-inline mb-2">
                                            <input className="form-check-input" type="radio" name="color" id="color4" data-bs-label="colorOptionText" value="Black"/>
                                                <label className="form-option-label rounded-circle" htmlFor="color4"><span className="form-option-color rounded-circle" style={{backgroundColor: '#333'}}></span></label>
                                        </div>
                                        <div className="product-badge product-available mt-n1"><i className="ci-security-check"></i>Product available</div>
                                    </div>
                                    <div className="d-flex align-items-center pt-2 pb-4">
                                        <select className="form-select me-3" style={{width: '5rem'}}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button className="btn btn-primary btn-shadow d-block w-100" type="button"><i className="ci-cart fs-lg me-2"></i>Add to Cart</button>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="w-100 me-3">
                                            <button className="btn btn-secondary d-block w-100" type="button"><i className="ci-heart fs-lg me-2"></i><span className='d-none d-sm-inline'>Add to </span>Wishlist</button>
                                        </div>
                                        <div className="w-100">
                                            <button className="btn btn-secondary d-block w-100" type="button"><i className="ci-compare fs-lg me-2"></i>Compare</button>
                                        </div>
                                    </div>
                                    <h5 className="h6 mb-3 py-2 border-bottom"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</h5>
                                    <h6 className="fs-sm mb-2">General</h6>
                                    <ul className="fs-sm pb-2">
                                        <li><span className="text-muted">Model: </span>Amazfit Smartwatch</li>
                                        <li><span className="text-muted">Gender: </span>Unisex</li>
                                        <li><span className="text-muted">OS campitibility: </span>Android / iOS</li>
                                    </ul>
                                    <h6 className="fs-sm mb-2">Physical specs</h6>
                                    <ul className="fs-sm pb-2">
                                        <li><span className="text-muted">Shape: </span>Rectangular</li>
                                        <li><span className="text-muted">Body material: </span>Plastics / Ceramics</li>
                                        <li><span className="text-muted">Band material: </span>Silicone</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

);
}

export default Quickview;
