import React from 'react';

const VendorPurchase = () => {
    return (
        <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                {/* Title*/}
                <div className="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
                    <h2 className="h3 py-2 me-2 text-center text-sm-start">Your purchases</h2>
                    <div className="py-2">
                        <div className="d-flex flex-nowrap align-items-center pb-3">
                            <label className="form-label fw-normal text-nowrap mb-0 me-2" htmlFor="sorting">Sort
                                by:</label>
                            <select className="form-select form-select-sm me-2" id="sorting">
                                <option>Date Purchased</option>
                                <option>Product Name</option>
                                <option>Price</option>
                                <option>Your Rating</option>
                                <option>Updates</option>
                            </select>
                            <button className="btn btn-outline-secondary btn-sm px-2" type="button"><i
                                className="ci-arrow-up"></i></button>
                        </div>
                    </div>
                </div>
                {/* Products list*/}
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th01.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Top View Smartwatch 3D
                            Render</a></h3>
                        <div className="text-accent fs-sm mb-1">Standard license</div>
                        <div className="form-check d-table text-start mx-auto mx-sm-0">
                            <input className="form-check-input" type="checkbox" id="update-info-1" checked/>
                                <label className="form-check-label fs-ms" htmlFor="update-info-1">Notify me when this
                                    product is updated</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                            <div className="my-2">
                                <button className="btn btn-primary btn-sm me-3" type="button"><i
                                    className="ci-download me-1"></i>Download
                                </button>
                            </div>
                            <a className="d-block text-muted text-center my-2" href="#">
                                <div className="star-rating"><i className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i>
                                </div>
                                <div className="fs-xs">Reate this product</div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th02.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">UI Isometric Devices
                            Pack (PSD)</a></h3>
                        <div className="text-accent fs-sm mb-1">Extended license</div>
                        <div className="form-check d-table text-start mx-auto mx-sm-0">
                            <input className="form-check-input" type="checkbox" id="update-info-2" checked/>
                                <label className="form-check-label fs-ms" htmlFor="update-info-2">Notify me when this
                                    product is updated</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                            <div className="my-2">
                                <button className="btn btn-primary btn-sm me-3" type="button"><i
                                    className="ci-download me-1"></i>Download
                                </button>
                            </div>
                            <a className="d-block text-muted text-center my-2" href="#">
                                <div className="star-rating"><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star"></i>
                                </div>
                                <div className="fs-xs">You rated this product</div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th03.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Cartzilla - Multipurpose
                            E-Commerce Template</a></h3>
                        <div className="text-accent fs-sm mb-1">Standard license</div>
                        <div className="form-check d-table text-start mx-auto mx-sm-0">
                            <input className="form-check-input" type="checkbox" id="update-info-3" checked/>
                                <label className="form-check-label fs-ms" htmlFor="update-info-3">Notify me when this
                                    product is updated</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                            <div className="my-2">
                                <button className="btn btn-primary btn-sm me-3" type="button"><i
                                    className="ci-download me-1"></i>Download
                                </button>
                            </div>
                            <a className="d-block text-muted text-center my-2" href="#">
                                <div className="star-rating"><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i>
                                </div>
                                <div className="fs-xs">You rated this product</div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th04.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Hardcover Book Catalog
                            Mockup (PSD)</a></h3>
                        <div className="text-accent fs-sm mb-1">Standard license</div>
                        <div className="form-check d-table text-start mx-auto mx-sm-0">
                            <input className="form-check-input" type="checkbox" id="update-info-4"/>
                                <label className="form-check-label fs-ms" htmlFor="update-info-4">Notify me when this
                                    product is updated</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                            <div className="my-2">
                                <button className="btn btn-primary btn-sm me-3" type="button"><i
                                    className="ci-download me-1"></i>Download
                                </button>
                            </div>
                            <a className="d-block text-muted text-center my-2" href="#">
                                <div className="star-rating"><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-filled active"></i><i
                                    className="star-rating-icon ci-star-half active"></i><i
                                    className="star-rating-icon ci-star"></i>
                                </div>
                                <div className="fs-xs">Reate this product</div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th05.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Photo of Business
                            Meeting</a></h3>
                        <div className="text-accent fs-sm mb-1">Standard license</div>
                        <div className="form-check d-table text-start mx-auto mx-sm-0">
                            <input className="form-check-input" type="checkbox" id="update-info-5"/>
                                <label className="form-check-label fs-ms" htmlFor="update-info-5">Notify me when this
                                    product is updated</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-start pt-2">
                            <div className="my-2">
                                <button className="btn btn-primary btn-sm me-3" type="button"><i
                                    className="ci-download me-1"></i>Download
                                </button>
                            </div>
                            <a className="d-block text-muted text-center my-2" href="#">
                                <div className="star-rating"><i className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i><i
                                    className="star-rating-icon ci-star"></i>
                                </div>
                                <div className="fs-xs">Reate this product</div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Pagination*/}
                <nav className="d-md-flex justify-content-between align-items-center text-center text-md-start mt-4"
                     aria-label="Page navigation">
                    <div className="d-md-flex align-items-center w-100"><span className="fs-sm text-muted me-md-3">Showing 5 of 9 products</span>
                        <div className="progress w-100 my-3 mx-auto mx-md-0" style={{maxWidth: "10rem" , height: "4px"}}>
                            <div className="progress-bar" role="progressbar" style={{width: "56%;"}} aria-valuenow="56"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm" type="button">More products</button>
                </nav>
            </div>
        </section>
    );
};

export default VendorPurchase;
