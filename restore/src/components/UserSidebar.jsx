import React from 'react';
import {useStateContext} from "../contexts/ContextProvider";
import {Link} from "react-router-dom";
import {Logout} from "../Utility/Utility";

const UserSidebar = () => {
    const {user} = useStateContext()
    const logout = Logout()
    return (
        <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                    <div className="d-md-flex align-items-center">
                        <div className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0" style={{width: "6.375rem"}}><span className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip" title="Reward points">384</span><img className="rounded-circle" src="/img/shop/account/avatar.jpg" alt="Susan Gardner"/></div>
                        <div className="ps-md-3">
                            <h3 className="fs-base mb-0">{user.name}</h3><span className="text-accent fs-sm">{user.email}</span>
                        </div>
                    </div><Link className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" to="#account-menu" data-bs-toggle="collapse" aria-expanded="false"><i className="ci-menu me-2"></i>Account menu</Link>
                </div>
                <div className="d-lg-block collapse" id="account-menu">
                    <div className="bg-secondary px-4 py-3">
                        <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="border-bottom mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3" to="/dashboard/Orders"><i className="ci-bag opacity-60 me-2"></i>Orders<span className="fs-sm text-muted ms-auto">1</span></Link></li>
                        <li className="border-bottom mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3" to="/dashboard/cart"><i className="ci-heart opacity-60 me-2"></i>Cart<span className="fs-sm text-muted ms-auto">3</span></Link></li>
                        <li className="mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3" to="/dashboard/purchase"><i className="ci-help opacity-60 me-2"></i>Purchased<span className="fs-sm text-muted ms-auto">1</span></Link></li>
                        <li className="mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3" to="/dashboard/cancelledOrder"><i className="ci-help opacity-60 me-2"></i>Cancelled Order<span className="fs-sm text-muted ms-auto">1</span></Link></li>
                    </ul>
                    <div className="bg-secondary px-4 py-3">
                        <h3 className="fs-sm mb-0 text-muted">Account settings</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="border-bottom mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3 active" to="/dashboard/profile"><i className="ci-user opacity-60 me-2"></i>Profile info</Link></li>
                        <li className="border-bottom mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3" to="/dashboard/address"><i className="ci-location opacity-60 me-2"></i>Addresses</Link></li>
                        <li className="d-lg-none border-top mb-0"><Link className="nav-link-style d-flex align-items-center px-4 py-3" onClick={logout}><i className="ci-sign-out opacity-60 me-2"></i>Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default UserSidebar;
