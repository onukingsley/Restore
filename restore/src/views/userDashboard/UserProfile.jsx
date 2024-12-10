import React from 'react';
import UserSidebar from "../../components/UserSidebar";

const UserProfile = () => {
    return (
        <div>
             {/*Page Title*/}
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                                <li className="breadcrumb-item text-nowrap"><a href="#">Account</a>
                                </li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">Profile info</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">Profile info</h1>
                    </div>
                </div>
            </div>
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    {/*Sidebar*/}
                    <UserSidebar/>
                    {/* Content*/}
                    <section className="col-lg-8">
                        {/* Toolbar*/}
                        <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
                            <h6 className="fs-base text-light mb-0">Update you profile details below:</h6><a className="btn btn-primary btn-sm" href="account-signin.html"><i className="ci-sign-out me-2"></i>Sign out</a>
                        </div>
                        {/* Profile form*/}
                        <form>
                            <div className="bg-secondary rounded-3 p-4 mb-4">
                                <div className="d-flex align-items-center"><img className="rounded" src="img/shop/account/avatar.jpg" width="90" alt="Susan Gardner"/>
                                    <div className="ps-3">
                                        <button className="btn btn-light btn-shadow btn-sm mb-2" type="button"><i className="ci-loading me-2"></i>Change avatar</button>
                                        <div className="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-4 gy-3">
                                <div className="col-sm-6">
                                    <label className="form-label" for="account-fn">First Name</label>
                                    <input className="form-control" type="text" id="account-fn" value="Susan"/>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" for="account-ln">Last Name</label>
                                    <input className="form-control" type="text" id="account-ln" value="Gardner"/>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" for="account-email">Email Address</label>
                                    <input className="form-control" type="email" id="account-email" value="s.gardner@example.com" disabled/>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" for="account-phone">Phone Number</label>
                                    <input className="form-control" type="text" id="account-phone" value="+7 (805) 348 95 72" required/>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" for="account-pass">New Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="account-pass"/>
                                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                                <input className="password-toggle-check" type="checkbox"/><span className="password-toggle-indicator"></span>
                                            </label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label" for="account-confirm-pass">Confirm Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="account-confirm-pass"/>
                                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                                <input className="password-toggle-check" type="checkbox"/><span className="password-toggle-indicator"></span>
                                            </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <hr className="mt-2 mb-3"/>
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="subscribe_me" checked/>
                                                    <label className="form-check-label" for="subscribe_me">Subscribe me to Newsletter</label>
                                            </div>
                                            <button className="btn btn-primary mt-3 mt-sm-0" type="button">Update profile</button>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
