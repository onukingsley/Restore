import React from 'react';
import UserSidebar from "../../components/UserSidebar";
import {Link} from "react-router-dom";

const UserPurchase = () => {
    return (
        <div>
            <div>

                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i
                                        className="ci-home"></i>Home</a></li>
                                    <li className="breadcrumb-item text-nowrap"><a href="#">Account</a>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap active" aria-current="page">Orders
                                        history
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">My orders</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        {/*Sidebar*/}
                        <UserSidebar/>
                        {/* Content*/}
                        <section className="col-lg-8">
                            {/*Toolbar*/}
                            <div
                                className="d-flex justify-content-between align-items-center pt-lg-2 pb-4 pb-lg-5 mb-lg-3">
                                <div className="d-flex align-items-center">
                                    <label className="d-none d-lg-block fs-sm text-light text-nowrap opacity-75 me-2"
                                           htmlFor="order-sort">Sort orders:</label>
                                    <label className="d-lg-none fs-sm text-nowrap opacity-75 me-2" htmlFor="order-sort">Sort
                                        orders:</label>
                                    <select className="form-select" id="order-sort">
                                        <option>All</option>
                                        <option>Delivered</option>
                                        <option>In Progress</option>
                                        <option>Delayed</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>
                                <Link className="btn btn-primary btn-sm d-none d-lg-inline-block"
                                   href="account-signin.html"><i className="ci-sign-out me-2"></i>Sign out</Link>
                            </div>
                            {/*Orders list*/}
                            <div className="table-responsive fs-md mb-4">
                                <table className="table table-hover mb-0">
                                    <thead>
                                    <tr>
                                        <th>Order #</th>
                                        <th>Date Purchased</th>
                                        <th>Status</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="py-3"><a className="nav-link-style fw-medium fs-sm"
                                                                href="#order-details"
                                                                data-bs-toggle="modal">34VB5540K83</a></td>
                                        <td className="py-3">May 21, 2019</td>
                                        <td className="py-3"><span className="badge bg-info m-0">In Progress</span></td>
                                        <td className="py-3">$358.75</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><a className="nav-link-style fw-medium fs-sm"
                                                                href="#order-details"
                                                                data-bs-toggle="modal">78A643CD409</a></td>
                                        <td className="py-3">December 09, 2018</td>
                                        <td className="py-3"><span className="badge bg-danger m-0">Canceled</span></td>
                                        <td className="py-3"><span>$760.50</span></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><a className="nav-link-style fw-medium fs-sm"
                                                                href="#order-details"
                                                                data-bs-toggle="modal">112P45A90V2</a></td>
                                        <td className="py-3">October 15, 2018</td>
                                        <td className="py-3"><span className="badge bg-warning m-0">Delayed</span></td>
                                        <td className="py-3">$1,264.00</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><a className="nav-link-style fw-medium fs-sm"
                                                                href="#order-details"
                                                                data-bs-toggle="modal">28BA67U0981</a></td>
                                        <td className="py-3">July 19, 2018</td>
                                        <td className="py-3"><span className="badge bg-success m-0">Delivered</span>
                                        </td>
                                        <td className="py-3">$198.35</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><a className="nav-link-style fw-medium fs-sm"
                                                                href="#order-details"
                                                                data-bs-toggle="modal">502TR872W2</a></td>
                                        <td className="py-3">April 04, 2018</td>
                                        <td className="py-3"><span className="badge bg-success m-0">Delivered</span>
                                        </td>
                                        <td className="py-3">$2,133.90</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><a className="nav-link-style fw-medium fs-sm"
                                                                href="#order-details"
                                                                data-bs-toggle="modal">47H76G09F33</a></td>
                                        <td className="py-3">March 30, 2018</td>
                                        <td className="py-3"><span className="badge bg-success m-0">Delivered</span>
                                        </td>
                                        <td className="py-3">$86.40</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*Pagination*/}
                            <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#"><i
                                        className="ci-arrow-left me-2"></i>Prev</a></li>
                                </ul>
                                <ul className="pagination">
                                    <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 5</span>
                                    </li>
                                    <li className="page-item active d-none d-sm-block" aria-current="page"><span
                                        className="page-link">1<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">4</a>
                                    </li>
                                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">5</a>
                                    </li>
                                </ul>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Next">Next<i
                                        className="ci-arrow-right ms-2"></i></a></li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPurchase;
