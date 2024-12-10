import React from 'react';
import {Outlet} from 'react-router-dom'
const VendorLayout = () => {
    return (

    <html lang="en">
   <head>
        <meta charset="utf-8"/>
            <title>Cartzilla | Store</title>

            <meta name="description" content="Cartzilla - Bootstrap E-commerce Template"/>
                <meta name="keywords" content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean"/>
                    <meta name="author" content="Createx Studio"/>

                        <meta name="viewport" content="width=device-width, initial-scale=1"/>

                            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
                                <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
                                    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
                                        <link rel="manifest" href="site.webmanifest"/>
                                            <link rel="mask-icon" color="#fe6a6a" href="safari-pinned-tab.svg"/>
                                                <meta name="msapplication-TileColor" content="#ffffff"/>
                                                    <meta name="theme-color" content="#ffffff"/>
                                                       {/*Vendor Styles including: Font Icons, Plugins, etc.*/}
                                                        <link rel="stylesheet" media="screen" href="vendor/simplebar/dist/simplebar.min.css"/>
                                                        <link rel="stylesheet" media="screen" href="vendor/tiny-slider/dist/tiny-slider.css"/>
                                                         {/*Main Theme Styles + Bootstrap*/}
                                                        <link rel="stylesheet" media="screen" href="css/theme.min.css"/>


    </head>
    {/*Body*/}
    <body className="handheld-toolbar-enabled">


    <main className="page-wrapper">
        {/*Navbar Marketplace*/}
        {/* Remove "navbar-sticky" className to make navigation bar scrollable with the page.*/}
        <header className="bg-light shadow-sm navbar-sticky">
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container"><a className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1" href="index.html"><img src="img/logo-dark.png" width="142" alt="Cartzilla"/></a><a className="navbar-brand d-sm-none me-2 order-lg-1" href="index.html"><img src="img/logo-icon.png" width="74" alt="Cartzilla"/></a>
                     {/*Toolbar*/}
                    <div className="navbar-toolbar d-flex align-items-center order-lg-3">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool d-none d-lg-flex" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#searchBox" role="button" aria-expanded="false" aria-controls="searchBox"><span className="navbar-tool-tooltip">Search</span>
                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="dashboard-favorites.html"><span className="navbar-tool-tooltip">Favorites</span>
                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a>
                        <div className="navbar-tool dropdown ms-2"><a className="navbar-tool-icon-box border dropdown-toggle" href="dashboard-sales.html"><img src="img/marketplace/account/avatar-sm.png" width="32" alt="Createx Studio"/></a><a className="navbar-tool-text ms-n1" href="dashboard-sales.html"><small>Createx Std.</small>$1,375.00</a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <div style={{minidth: "14rem"}}>
                                    <h6 className="dropdown-header">Account</h6><a className="dropdown-item d-flex align-items-center" href="dashboard-settings.html"><i className="ci-settings opacity-60 me-2"></i>Settings</a><a className="dropdown-item d-flex align-items-center" href="dashboard-purchases.html"><i className="ci-basket opacity-60 me-2"></i>Purchases</a><a className="dropdown-item d-flex align-items-center" href="dashboard-favorites.html"><i className="ci-heart opacity-60 me-2"></i>Favorites<span className="fs-xs text-muted ms-auto">4</span></a>
                                    <div className="dropdown-divider"></div>
                                    <h6 className="dropdown-header">Seller Dashboard</h6><a className="dropdown-item d-flex align-items-center" href="dashboard-sales.html"><i className="ci-dollar opacity-60 me-2"></i>Sales<span className="fs-xs text-muted ms-auto">$1,375.00</span></a><a className="dropdown-item d-flex align-items-center" href="dashboard-products.html"><i className="ci-package opacity-60 me-2"></i>Products<span className="fs-xs text-muted ms-auto">5</span></a><a className="dropdown-item d-flex align-items-center" href="dashboard-add-new-product.html"><i className="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a><a className="dropdown-item d-flex align-items-center" href="dashboard-payouts.html"><i className="ci-currency-exchange opacity-60 me-2"></i>Payouts</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item d-flex align-items-center" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign Out</a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-tool ms-4"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="marketplace-cart.html"><span className="navbar-tool-label">3</span><i className="navbar-tool-icon ci-cart"></i></a></div>
                    </div>
                    <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
                        {/*Search*/}
                        <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                            <input className="form-control rounded-start" type="text" placeholder="Search marketplace"/>
                        </div>
                        {/* Categories dropdown*/}
                        <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-menu align-middle mt-n1 me-2"></i>Categories</a>
                                <ul className="dropdown-menu py-1">
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Photos</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Photos<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Abstract</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Animals</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Architecture</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Beauty &amp; Fashion</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Business</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Education</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Food &amp; Drink</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Holidays</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Industrial</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">People</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Sports</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Technology</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Graphics</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item product-title fw-medium"><a href="#">All Graphics<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Icons</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Illustartions</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Patterns</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Textures</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Web Elements</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">UI Design</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All UI Design<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">PSD Templates</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Sketch Templates</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Adobe XD Templates</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Figma Templates</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Web Themes</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Web Themes<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">WordPress Themes</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Bootstrap Themes</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">eCommerce Templates</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Muse Templates</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Plugins</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Fonts</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Fonts<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Blackletter</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Display</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Non Western</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Sans Serif</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Script</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Serif</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Slab Serif</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Symbols</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Add-Ons</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Add-Ons<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Photoshop Add-Ons</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Illustrator Add-Ons</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Sketch Plugins</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Procreate Brushes</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">InDesign Palettes</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Lightroom Presets</a></li>
                                            <li><a className="dropdown-item" href="marketplace-category.html">Other Software</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/*Primary menu*/}
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="index.html">Back to main demo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Search collapse*/}
            <div className="search-box collapse" id="searchBox">
                <div className="card pt-2 pb-4 border-0 rounded-0">
                    <div className="container">
                        <div className="input-group"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                            <input className="form-control rounded-start" type="text" placeholder="Search marketplace"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/*Dashboard header*/}
        <div className="page-title-overlap bg-accent pt-4">
            <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                <div className="d-flex align-items-center pb-3">
                    <div className="img-thumbnail rounded-circle position-relative flex-shrink-0" style={{width: "6.375rem"}}><img className="rounded-circle" src="img/marketplace/account/avatar.png" alt="Createx Studio"/></div>
                    <div className="ps-3">
                        <h3 className="text-light fs-lg mb-0">Createx Studio</h3><span className="d-block text-light fs-ms opacity-60 py-1">Member since November 2019</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="text-sm-end me-5">
                        <div className="text-light fs-base">Total sales</div>
                        <h3 className="text-light">426</h3>
                    </div>
                    <div className="text-sm-end">
                        <div className="text-light fs-base">Seller rating</div>
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                        </div>
                        <div className="text-light opacity-60 fs-xs">Based on 98 reviews</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mb-5 pb-3">
            <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                <div className="row">
                    {/* Sidebar*/}
                    <aside className="col-lg-4 pe-xl-5">
                        {/* Account menu toggler (hidden on screens larger 992px)*/}
                        <div className="d-block d-lg-none p-4"><a className="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse"><i className="ci-menu me-2"></i>Account menu</a></div>
                        {/* Actual menu*/}
                        <div className="h-100 border-end mb-2">
                            <div className="d-lg-block collapse" id="account-menu">
                                <div className="bg-secondary p-4">
                                    <h3 className="fs-sm mb-0 text-muted">Account</h3>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-settings.html"><i className="ci-settings opacity-60 me-2"></i>Settings</a></li>
                                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-purchases.html"><i className="ci-basket opacity-60 me-2"></i>Purchases</a></li>
                                    <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-favorites.html"><i className="ci-heart opacity-60 me-2"></i>Favorites<span className="fs-sm text-muted ms-auto">4</span></a></li>
                                </ul>
                                <div className="bg-secondary p-4">
                                    <h3 className="fs-sm mb-0 text-muted">Seller Dashboard</h3>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-sales.html"><i className="ci-dollar opacity-60 me-2"></i>Sales<span className="fs-sm text-muted ms-auto">$1,375.00</span></a></li>
                                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-products.html"><i className="ci-package opacity-60 me-2"></i>Products<span className="fs-sm text-muted ms-auto">5</span></a></li>
                                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3 active" href="dashboard-add-new-product.html"><i className="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a></li>
                                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-payouts.html"><i className="ci-currency-exchange opacity-60 me-2"></i>Payouts</a></li>
                                    <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                                </ul>
                                <hr/>
                            </div>
                        </div>
                    </aside>
                     {/*Content*/}
                   <Outlet/>
                </div>
            </div>
        </div>
    </main>
     {/*Footer*/}
    <footer className="footer bg-dark pt-5">
        <div className="container pt-2 pb-3">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-4">
                    <div className="text-nowrap mb-3"><a className="d-inline-block align-middle mt-n2 me-2" href="#"><img className="d-block" src="img/footer-logo-light.png" width="117" alt="Cartzilla"/></a><span className="d-inline-block align-middle h5 fw-light text-white mb-0">Marketplace</span></div>
                    <p className="fs-sm text-white opacity-70 pb-1">High quality items created by our global community.</p>
                    <h6 className="d-inline-block pe-3 me-3 border-end border-light"><span className="text-primary">65,478 </span><span className="fw-normal text-white">Products</span></h6>
                    <h6 className="d-inline-block pe-3 me-3 border-end border-light"><span className="text-primary">2,521 </span><span className="fw-normal text-white">Members</span></h6>
                    <h6 className="d-inline-block me-3"><span className="text-primary">897 </span><span className="fw-normal text-white">Vendors</span></h6>
                    <div className="widget mt-4 text-md-nowrap text-center text-md-start"><a className="btn-social bs-light bs-twitter me-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-light bs-facebook me-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-light bs-dribbble me-2 mb-2" href="#"><i className="ci-dribbble"></i></a><a className="btn-social bs-light bs-behance me-2 mb-2" href="#"><i className="ci-behance"></i></a><a className="btn-social bs-light bs-pinterest me-2 mb-2" href="#"><i className="ci-pinterest"></i></a></div>
                </div>
                {/* Mobile dropdown menu (visible on screens below md)*/}
                <div className="col-12 d-md-none text-center mb-4 pb-2">
                    <div className="btn-group dropdown d-block mx-auto mb-3">
                        <button className="btn btn-outline-light border-light dropdown-toggle" type="button" data-bs-toggle="dropdown">Categories</button>
                        <ul className="dropdown-menu my-1">
                            <li><a className="dropdown-item" href="#">Photos</a></li>
                            <li><a className="dropdown-item" href="#">Graphics</a></li>
                            <li><a className="dropdown-item" href="#">UI Design</a></li>
                            <li><a className="dropdown-item" href="#">Web Themes</a></li>
                            <li><a className="dropdown-item" href="#">Fonts</a></li>
                            <li><a className="dropdown-item" href="#">Add-Ons</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropdown d-block mx-auto">
                        <button className="btn btn-outline-light border-light dropdown-toggle" type="button" data-bs-toggle="dropdown">For members</button>
                        <ul className="dropdown-menu my-1">
                            <li><a className="dropdown-item" href="#">Licenses</a></li>
                            <li><a className="dropdown-item" href="#">Return policy</a></li>
                            <li><a className="dropdown-item" href="#">Payment methods</a></li>
                            <li><a className="dropdown-item" href="#">Become a vendor</a></li>
                            <li><a className="dropdown-item" href="#">Become an affiliate</a></li>
                            <li><a className="dropdown-item" href="#">Marketplace benefits</a></li>
                        </ul>
                    </div>
                </div>
                 {/*Desktop menu (visible on screens above md)*/}
                <div className="col-md-3 d-none d-md-block text-center text-md-start mb-4">
                    <div className="widget widget-links widget-light pb-2">
                        <h3 className="widget-title text-light">Categories</h3>
                        <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Photos</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Graphics</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">UI Design</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Web Themes</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Fonts</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Add-Ons</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 d-none d-md-block text-center text-md-start mb-4">
                    <div className="widget widget-links widget-light pb-2">
                        <h3 className="widget-title text-light">For members</h3>
                        <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Licenses</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Return policy</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Payment methods</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Become a vendor</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Become an affiliate</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="#">Marketplace benefits</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/*Second row*/}
        <div className="pt-5 bg-darker">
            <div className="container">
                <div className="widget w-100 mb-4 pb-3 text-center mx-auto" style={{maxWidth: "28rem"}}>
                    <h3 className="widget-title text-light pb-1">Subscribe to newsletter</h3>
                    <form className="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                        <div className="input-group flex-nowrap"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                            <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required/>
                                <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                        </div>
                         {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{position: "absolute" , left: "-5000px"}} aria-hidden="true">
                            <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabindex="-1"/>
                        </div>
                        <div className="form-text text-light opacity-50">*Receive early discount offers, updates and new products info.</div>
                        <div className="subscription-status"></div>
                    </form>
                </div>
                <hr className="hr-light mb-3"/>
                    <div className="d-md-flex justify-content-between pt-4">
                        <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
                        <div className="widget widget-links widget-light pb-4">
                            <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Help Center</a></li>
                                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Affiliates</a></li>
                                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Support</a></li>
                                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </footer>
     {/*Toolbar for handheld devices (Marketplace)*/}
    <div className="handheld-toolbar">
        <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item" href="dashboard-favorites.html"><span className="handheld-toolbar-icon"><i className="ci-heart"></i></span><span className="handheld-toolbar-label">Favorites</span></a><a className="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span className="handheld-toolbar-icon"><i className="ci-menu"></i></span><span className="handheld-toolbar-label">Menu</span></a><a className="d-table-cell handheld-toolbar-item" href="marketplace-cart.html"><span className="handheld-toolbar-icon"><i className="ci-cart"></i><span className="badge bg-primary rounded-pill ms-1">3</span></span><span className="handheld-toolbar-label">$56.00</span></a></div>
    </div>
    {/*Back To Top Button*/}

    <a className="btn-scroll-top" href="#top" data-scroll><span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i className="btn-scroll-top-icon ci-arrow-up">   </i></a>
    <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/simplebar/dist/simplebar.min.js"></script>
    <script src="vendor/tiny-slider/dist/min/tiny-slider.js"></script>
    <script src="vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>

    <script src="js/theme.min.js"></script>
    </body>

   </html>
    );
};

export default VendorLayout;
