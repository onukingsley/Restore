import React from 'react';

const VendorCart = () => {
    return (
        <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                {/* Title*/}
                <div className="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
                    <h2 className="h3 py-2 me-2 text-center text-sm-start">Your Cart<span
                        className="badge bg-faded-accent fs-sm text-body align-middle ms-2">5</span></h2>
                    <div className="py-2">
                        <div className="d-flex flex-nowrap align-items-center pb-3">
                            <label className="form-label fw-normal text-nowrap mb-0 me-2" htmlFor="sorting">Sort
                                by:</label>
                            <select className="form-select form-select-sm me-2" id="sorting">
                                <option>Date Created</option>
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
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th08.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Flat-line E-Commerce
                            Icons (AI)</a></h3>
                        <div className="d-inline-block text-accent">$18.<small>00</small></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Sales: <span
                            className="fw-medium">26</span></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Earnings: <span
                            className="fw-medium">$327.<small>60</small></span></div>
                        <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                            <button className="btn bg-faded-accent btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Download"><i className="ci-download text-accent"></i></button>
                            <button className="btn bg-faded-info btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Edit"><i className="ci-edit text-info"></i></button>
                            <button className="btn bg-faded-danger btn-icon" type="button" data-bs-toggle="tooltip"
                                    title="Delete"><i className="ci-trash text-danger"></i></button>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th09.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Square Style Mobile UI
                            Kit (Sketch)</a></h3>
                        <div className="d-inline-block text-accent">$24.<small>00</small></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Sales: <span
                            className="fw-medium">153</span></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Earnings: <span
                            className="fw-medium">$2,570.<small>40</small></span></div>
                        <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                            <button className="btn bg-faded-accent btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Download"><i className="ci-download text-accent"></i></button>
                            <button className="btn bg-faded-info btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Edit"><i className="ci-edit text-info"></i></button>
                            <button className="btn bg-faded-danger btn-icon" type="button" data-bs-toggle="tooltip"
                                    title="Delete"><i className="ci-trash text-danger"></i></button>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th10.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Floating Phone and
                            Tablet Mockup (PSD)</a></h3>
                        <div className="d-inline-block text-accent">$15.<small>00</small></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Sales: <span
                            className="fw-medium">109</span></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Earnings: <span
                            className="fw-medium">$1,144.<small>50</small></span></div>
                        <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                            <button className="btn bg-faded-accent btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Download"><i className="ci-download text-accent"></i></button>
                            <button className="btn bg-faded-info btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Edit"><i className="ci-edit text-info"></i></button>
                            <button className="btn bg-faded-danger btn-icon" type="button" data-bs-toggle="tooltip"
                                    title="Delete"><i className="ci-trash text-danger"></i></button>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center py-4 border-bottom"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th11.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Minimal Mobile App UI
                            Kit (Sketch)</a></h3>
                        <div className="d-inline-block text-accent">$23.<small>00</small></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Sales: <span
                            className="fw-medium">117</span></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Earnings: <span
                            className="fw-medium">$1,883.<small>70</small></span></div>
                        <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                            <button className="btn bg-faded-accent btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Download"><i className="ci-download text-accent"></i></button>
                            <button className="btn bg-faded-info btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Edit"><i className="ci-edit text-info"></i></button>
                            <button className="btn bg-faded-danger btn-icon" type="button" data-bs-toggle="tooltip"
                                    title="Delete"><i className="ci-trash text-danger"></i></button>
                        </div>
                    </div>
                </div>
                {/* Product*/}
                <div className="d-block d-sm-flex align-items-center pt-4 pb-2"><a
                    className="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
                    style={{width: "12.5rem"}}><img className="rounded-3" src="img/marketplace/products/th12.jpg"
                                                 alt="Product"/></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">Travel &amp; Landmark
                            Icon Pack (AI)</a></h3>
                        <div className="d-inline-block text-accent">$17.<small>00</small></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Sales: <span
                            className="fw-medium">21</span></div>
                        <div className="d-inline-block text-muted fs-ms border-start ms-2 ps-2">Earnings: <span
                            className="fw-medium">$249.<small>90</small></span></div>
                        <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                            <button className="btn bg-faded-accent btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Download"><i className="ci-download text-accent"></i></button>
                            <button className="btn bg-faded-info btn-icon me-2" type="button" data-bs-toggle="tooltip"
                                    title="Edit"><i className="ci-edit text-info"></i></button>
                            <button className="btn bg-faded-danger btn-icon" type="button" data-bs-toggle="tooltip"
                                    title="Delete"><i className="ci-trash text-danger"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorCart;
