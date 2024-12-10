import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';

import {Link, Outlet} from 'react-router-dom'
import { tns } from 'tiny-slider/src/tiny-slider';
import axiosClient from "../axios-client";
import {useStateContext} from "../contexts/ContextProvider";
/*import CurrencyFormat from 'react-currency-format '*/
import TrendingProduct from "./TrendingProduct";
import Quickview from "./quickview";
import {Logout, RemoveCart} from "../Utility/Utility";










const Layout = () => {

    const {setUser,user,token,setToken,isLoading,cart,setCart,totalPrice,setTotalPrice,isLoadingCart,setIsLoading} = useStateContext()
    const logout = Logout()


  /*  const newcart = Object.values(cart).reduce((acc,item)=>{
        const id = item['product_id']

        if (!acc[id]){
            acc[id] = {...item, quant:0}
        }
        acc[id]['quant'] += Number(item['quantity'])

        return acc
    },[])
*/


    if (isLoading) {
        return <div>Loading</div>
    }else if(isLoadingCart){
        return <div>Loading</div>
    }
    else {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>Cartzilla | Account Sign In</title>
            {/* SEO Meta Tags */}
            <meta name="description" content="Cartzilla - Bootstrap E-commerce Template" />
            <meta name="keywords" content="bootstrap, shop, e-commerce, market, modern, responsive, business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean" />
            <meta name="author" content="Createx Studio" />
            {/* Viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Favicon and Touch Icons */}
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
            <link rel="manifest" href="site.webmanifest" />
            <link rel="mask-icon" color="#fe6a6a" href="safari-pinned-tab.svg" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />

                 {/*Vendor Styles including: Font Icons, Plugins, etc.*/}
           {/* <link href="https://cdn.jsdelivr.net/npm/tiny-slider@2.9.4/dist/tiny-slider.min.css" rel="stylesheet"/>*/}

            <link rel="stylesheet" href="/tiny-slider.css"/>
        {/*     Main Theme Styles + Bootstrap*/}
            <link rel="stylesheet" href="/theme.min.css" />
            {/* Google Tag Manager */}
          {/*  <script dangerouslySetInnerHTML={{
                __html: `
                        (function(w,d,s,l,i){
                            w[l]=w[l]||[];
                            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                            var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                            j.async=true;
                            j.src='../www.googletagmanager.com/gtm5445.html?id='+i+dl;
                            f.parentNode.insertBefore(j,f);
                        })(window, document, 'script', 'dataLayer', 'GTM-WKV3GT5');
                    `
            }} />*/}
        </head>
        <body>
        <main className="page-wrapper">
            {/* Header */}
            <header className="shadow-sm">
                {/* Topbar */}
                <div className="topbar topbar-dark bg-dark">
                    <div className="container">
                        <div className="topbar-text dropdown d-md-none">
                            <a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful links</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="tel:00331697720"><i className="ci-support text-muted me-2"></i>(00) 33 169 7720</a></li>
                                <li><a className="dropdown-item" href="/order-tracking"><i className="ci-location text-muted me-2"></i>Order tracking</a></li>
                            </ul>
                        </div>
                        <div className="topbar-text text-nowrap d-none d-md-inline-block">
                            <i className="ci-support"></i>
                            <span className="text-muted me-1">Support</span>
                            <a className="topbar-link" href="tel:00331697720">(00) 33 169 7720</a>
                        </div>
                        <div className="tns-carousel tns-controls-static d-none d-md-block">
                            <div className="tns-carousel-inner">
                                <div className="topbar-text">Free shipping for order over $200</div>
                                <div className="topbar-text">We return money within 30 days</div>
                                <div className="topbar-text">Friendly 24/7 customer support</div>
                            </div>
                        </div>
                        <div className="ms-3 text-nowrap">
                            <a className="topbar-link me-4 d-none d-md-inline-block" href="/order-tracking"><i className="ci-location"></i>Order tracking</a>
                        </div>
                    </div>
                </div>

                {/* Navbar */}
                <div className="navbar-sticky bg-light">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <a className="navbar-brand d-none d-sm-block flex-shrink-0" href="/"><img src="/img/logo-dark.png"  width="142" alt="Logo" /></a>
                            <div className="input-group d-none d-lg-flex mx-4">
                                <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products" />
                                <i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                            </div>
                            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                { user && user?.usertype === '0' ?(

                                    <Link className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" onClick={logout} >
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                                        <div className="navbar-tool-text ms-n3"><small>Admin {user?.name} , </small>My Account</div>
                                    </Link>
                                ):user && user?.usertype === '1' ?(
                                        <Link className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" onClick={Logout} >
                                            <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                                            <div className="navbar-tool-text ms-n3"><small>Hello {user?.name} , </small>My Account</div>
                                        </Link>
                                    ) :
                                    <Link className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" to='/login'>
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                                        <div className="navbar-tool-text ms-n3"><small>Login, </small>SignUp</div>
                                    </Link>
                                }


                                {/* Cart */}
                                <div className="navbar-tool dropdown ms-3">
                                    <a className="navbar-tool-icon-box bg-secondary dropdown-toggle" >
                                        <span className="navbar-tool-label">{Object.keys(cart).length}</span>
                                        <i className="navbar-tool-icon ci-cart"></i>
                                    </a>


                                    <a className="navbar-tool-text" >
                                        <small >My Cart</small>${totalPrice}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">

                                        <div className="widget widget-cart px-3 pt-2 pb-3" style={{ width: '20rem' }}>
                                            <div style={{ height: '15rem' }} data-simplebar data-simplebar-auto-hide="false">
                                                {cart && Object.keys(cart).length > 0 ? (
                                                    Object.keys(cart).map((key) => {
                                                        const propid = `#quick-view-electro${cart[key]['product_id']}`;
                                                        return (
                                                            <div key={cart[key]['id']} className="widget-cart-item py-2 border-bottom">

                                                                <button
                                                                    onClick={() => {setCart((prevCart) => Object.values(prevCart).filter((item) => item['product_id']!== cart[key]['product_id']));setTotalPrice((price)=>price - Number(cart[key]['price'])*Number(cart[key]['quant'])); RemoveCart(cart[key]['product_id'])}}
                                                                    className="btn-close text-danger"
                                                                    type="button"
                                                                    aria-label="Remove"
                                                                >
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                                <div className="d-flex align-items-center">
                                                                    <Link className="flex-shrink-0" to={propid}>
                                                                        <img src={'/'+cart[key]['image']} width="64" alt="Product" />
                                                                    </Link>
                                                                    <div className="ps-2">
                                                                        <h6 className="widget-product-title">
                                                                            <Link to={propid}>{cart[key]['productTitle']}</Link>
                                                                        </h6>
                                                                        <div className="widget-product-meta">
                                                                            <span className="text-accent me-2">${cart[key]['price']}</span>X
                                                                            <span className="text-muted">{cart[key]['quant']}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    <p>Your cart is empty.</p>
                                                )}
                                            </div>
                                            <Link to = '/dashboard/cart' className="btn btn-primary btn-sm d-block w-100"  >Checkout ${totalPrice}</Link>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            {/*Search*/}
                            <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                <input className="form-control rounded-start" type="text" placeholder="Search for products"/>
                            </div>
                            {/*!--Departments menu--*/}
                            <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Departments</a>
                                    <div className="dropdown-menu px-2 pb-4">
                                        <div className="d-flex flex-wrap flex-sm-nowrap">
                                            <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/01.jpg" alt="Clothing"/></a>
                                                    <h6 className="fs-base mb-2">Clothing</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's clothing</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's clothing</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's clothing</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/02.jpg" alt="Shoes"/></a>
                                                    <h6 className="fs-base mb-2">Shoes</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's shoes</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's shoes</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's shoes</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/03.jpg" alt="Gadgets"/></a>
                                                    <h6 className="fs-base mb-2">Gadgets</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Smartphones &amp; Tablets</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Wearable gadgets</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">E-book readers</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap flex-sm-nowrap">
                                            <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/04.jpg" alt="Furniture"/></a>
                                                    <h6 className="fs-base mb-2">Furniture &amp; Decor</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Home furniture</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Office furniture</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Lighting and decoration</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/05.jpg" alt="Accessories"/></a>
                                                    <h6 className="fs-base mb-2">Accessories</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Hats</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Sunglasses</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Bags</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/06.jpg" alt="Entertainment"/></a>
                                                    <h6 className="fs-base mb-2">Entertainment</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's toys</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Video games</a></li>
                                                        <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Outdoor / Camping</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/*!--Primary menu--*/}
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item border-bottom py-2" href="home-nft.html"><span className="d-block text-heading">NFT Marketplace<span className="badge bg-danger ms-1">NEW</span></span><small className="d-block text-muted">NFTs, Multi-vendor, Auctions</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-nft.html" style={{width:' 250px'}}><img src="img/home/preview/th08.jpg" alt="NFT Marketplace"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span className="d-block text-heading">Fashion Store v.1</span><small className="d-block text-muted">classNameic shop layout</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v1.html" style={{width: '250px'}}><img src="img/home/preview/th01.jpg" alt="Fashion Store v.1"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span className="d-block text-heading">Electronics Store</span><small className="d-block text-muted">Slider + Promo banners</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-electronics-store.html"style={{width: '250px'}}><img src="img/home/preview/th03.jpg" alt="Electronics Store"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-marketplace.html"><span className="d-block text-heading">Marketplace</span><small className="d-block text-muted">Multi-vendor, digital goods</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-marketplace.html" style={{width: '250px'}}><img src="img/home/preview/th04.jpg" alt="Marketplace"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-grocery-store.html"><span className="d-block text-heading">Grocery Store</span><small className="d-block text-muted">Full width + Side menu</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-grocery-store.html" style={{width: '250px'}}><img src="img/home/preview/th06.jpg" alt="Grocery Store"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-food-delivery.html"><span className="d-block text-heading">Food Delivery Service</span><small className="d-block text-muted">Food &amp; Beverages delivery</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-food-delivery.html" style={{width: '250px'}}><img src="img/home/preview/th07.jpg" alt="Food Delivery Service"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span className="d-block text-heading">Fashion Store v.2</span><small className="d-block text-muted">Slider + Featured categories</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v2.html" style={{width: '250px'}}><img src="img/home/preview/th02.jpg" alt="Fashion Store v.2"/></a></div>
                                        </li>
                                        <li className="dropdown position-static mb-0"><a className="dropdown-item py-2" href="home-single-store.html"><span className="d-block text-heading">Single Product Store</span><small className="d-block text-muted">Single product / mono brand</small></a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-single-store.html" style={{width: '250px'}}><img src="img/home/preview/th05.jpg" alt="Single Product / Brand Store"/></a></div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                    <div className="dropdown-menu p-0">
                                        <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                            <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                <div className="widget widget-links mb-4">
                                                    <h6 className="fs-base mb-3">Shop layouts</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-links mb-4">
                                                    <h6 className="fs-base mb-3">Marketplace</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-links">
                                                    <h6 className="fs-base mb-3">Grocery store</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item"><a className="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                <div className="widget widget-links mb-4">
                                                    <h6 className="fs-base mb-3">Food Delivery</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-links">
                                                    <h6 className="fs-base mb-3">NFT Marketplace<span className="badge bg-danger ms-1">NEW</span></h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-catalog-v1.html">Catalog v.1</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-catalog-v2.html">Catalog v.2</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-single-auction-live.html">Single Item - Auction Live</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-single-auction-ended.html">Single Item - Auction Ended</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-single-buy.html">Single Item - Buy Now</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-vendor.html">Vendor Page</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-connect-wallet.html">Connect Wallet</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="nft-create-item.html">Create New Item</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-column pt-1 pt-lg-4 px-2 px-lg-3">
                                                <div className="widget widget-links mb-4">
                                                    <h6 className="fs-base mb-3">Shop pages</h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="shop-cart.html">Cart</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                                                        <li className="widget-list-item"><a className="widget-list-link" href="comparison.html">Product Comparison</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown f"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Account</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop User Account</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                                                <li><a className="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                                                <li><a className="dropdown-item" href="account-address.html">Account Addresses</a></li>
                                                <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                                                <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                                                <li><a className="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                                                <li><a className="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                                                <li><a className="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                                                <li><a className="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                                                <li><a className="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                                                <li><a className="dropdown-item" href="dashboard-products.html">Products</a></li>
                                                <li><a className="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                                                <li><a className="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">NFT Marketplace<span className="badge bg-danger ms-1">NEW</span></a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="nft-account-settings.html">Profile Settings</a></li>
                                                <li><a className="dropdown-item" href="nft-account-payouts.html">Wallet &amp; Payouts</a></li>
                                                <li><a className="dropdown-item" href="nft-account-my-items.html">My Items</a></li>
                                                <li><a className="dropdown-item" href="nft-account-my-collections.html">My Collections</a></li>
                                                <li><a className="dropdown-item" href="nft-account-favorites.html">Favorites</a></li>
                                                <li><a className="dropdown-item" href="nft-account-notifications.html">Notifications</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                                        <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Navbar Variants</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                                                <li><a className="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                                                <li><a className="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                                                <li><a className="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                                                <li><a className="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                                                <li><a className="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                                                <li><a className="dropdown-item" href="home-electronics-store.html">Electronics Store</a></li>
                                                <li><a className="dropdown-item" href="home-marketplace.html">Marketplace</a></li>
                                                <li><a className="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-divider"></li>
                                        <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                        <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="help-topics.html">Help Topics</a></li>
                                                <li><a className="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                                                <li><a className="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                                                <li><a className="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-divider"></li>
                                        <li><a className="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog List Layouts</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                                                <li><a className="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Grid Layouts</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                                                <li><a className="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Single Post Layouts</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                                                <li><a className="dropdown-item" href="blog-single.html">Article no Sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / Components</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="docs/dev-setup.html">
                                            <div className="d-flex">
                                                <div className="lead text-muted pt-1"><i className="ci-book"></i></div>
                                                <div className="ms-2"><span className="d-block text-heading">Documentation</span><small className="d-block text-muted">Kick-start customization</small></div>
                                            </div></a></li>
                                        <li className="dropdown-divider"></li>
                                        <li><a className="dropdown-item" href="components/typography.html">
                                            <div className="d-flex">
                                                <div className="lead text-muted pt-1"><i className="ci-server"></i></div>
                                                <div className="ms-2"><span className="d-block text-heading">Components<span className="badge bg-info ms-2">40+</span></span><small className="d-block text-muted">Faster page building</small></div>
                                            </div></a></li>
                                        <li className="dropdown-divider"></li>
                                        <li><a className="dropdown-item" href="docs/changelog.html">
                                            <div className="d-flex">
                                                <div className="lead text-muted pt-1"><i className="ci-edit"></i></div>
                                                <div className="ms-2"><span className="d-block text-heading">Changelog<span className="badge bg-success ms-2">v2.4.0</span></span><small className="d-block text-muted">Regular updates</small></div>
                                            </div></a></li>
                                        <li className="dropdown-divider"></li>
                                        <li><a className="dropdown-item" href="mailto:support@createx.studio">
                                            <div className="d-flex">
                                                <div className="lead text-muted pt-1"><i className="ci-help"></i></div>
                                                <div className="ms-2"><span className="d-block text-heading">Support</span><small className="d-block text-muted">support@createx.studio</small></div>
                                            </div></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </header>
            <Outlet />
        </main>

        <footer className="footer bg-dark pt-5">
            <div className="container">
                <div className="row pb-2">
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">Shop departments</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Sneakers &amp; Athletic</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Athletic
                                    Apparel</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Sandals</a>
                                </li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Jeans</a></li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Shirts &amp; Tops</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Shorts</a>
                                </li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">T-Shirts</a>
                                </li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Swimwear</a>
                                </li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Clogs &amp; Mules</a></li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Bags &amp; Wallets</a></li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Accessories</a></li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Sunglasses &amp; Eyewear</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Watches</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">Account &amp; shipping info</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Your
                                    account</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Shipping
                                    rates &amp; policies</a></li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Refunds &amp; replacements</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Order
                                    tracking</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Delivery
                                    info</a></li>
                                <li className="widget-list-item"><a className="widget-list-link"
                                                                    href="#">Taxes &amp; fees</a></li>
                            </ul>
                        </div>
                        <div className="widget widget-links widget-light pb-2 mb-4">
                            <h3 className="widget-title text-light">About us</h3>
                            <ul className="widget-list">
                                <li className="widget-list-item"><a className="widget-list-link" href="#">About
                                    company</a></li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Our team</a>
                                </li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">Careers</a>
                                </li>
                                <li className="widget-list-item"><a className="widget-list-link" href="#">News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget pb-2 mb-4">
                            <h3 className="widget-title text-light pb-1">Stay informed</h3>
                            <form className="subscription-form validate"
                                  action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                                  method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                                <div className="input-group flex-nowrap"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                    <input className="form-control rounded-start" type="email" name="EMAIL"
                                           placeholder="Your email" required/>
                                        <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*
                                        </button>
                                </div>
                                 {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{position: 'absolute' , left: '-5000px'}} aria-hidden="true">
                                    <input className="subscription-form-antispam" type="text"
                                           name="b_c7103e2c981361a6639545bd5_29ca296126" tabIndex="-1"/>
                                </div>
                                <div className="form-text text-light opacity-50">*Subscribe to our newsletter to receive
                                    early discount offers, updates and new products info.
                                </div>
                                <div className="subscription-status"></div>
                            </form>
                        </div>
                        <div className="widget pb-2 mb-4">
                            <h3 className="widget-title text-light pb-1">Download our app</h3>
                            <div className="d-flex flex-wrap">
                                <div className="me-2 mb-2"><a className="btn-market btn-apple" href="#"
                                                              role="button"><span className="btn-market-subtitle">Download on the</span><span
                                    className="btn-market-title">App Store</span></a></div>
                                <div className="mb-2"><a className="btn-market btn-google" href="#" role="button"><span
                                    className="btn-market-subtitle">Download on the</span><span
                                    className="btn-market-title">Google Play</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 bg-darker">
                <div className="container">
                    <div className="row pb-3">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex"><i className="ci-rocket text-primary" style={{fontSize : '2.25rem'}}></i>
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over
                                        $200</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex"><i className="ci-currency-exchange text-primary"
                                                       style={{fontSize : '2.25rem'}}></i>
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex"><i className="ci-support text-primary"
                                                       style={{fontSize : '2.25rem'}}></i>
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex"><i className="ci-card text-primary" style={{fontSize : '2.25rem'}}></i>
                                <div className="ps-3">
                                    <h6 className="fs-base text-light mb-1">Secure online payment</h6>
                                    <p className="mb-0 fs-ms text-light opacity-50">We possess SSL / Secure
                                        сertificate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-light mb-5"/>
                        <div className="row pb-2">
                            <div className="col-md-6 text-center text-md-start mb-4">
                                <div className="text-nowrap mb-4"><a className="d-inline-block align-middle mt-n1 me-3"
                                                                     href="#"><img className="d-block"
                                                                                   src="img/footer-logo-light.png"
                                                                                   width="117" alt="Cartzilla"/></a>
                                    <div className="btn-group dropdown disable-autohide">
                                        <button
                                            className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2"
                                            type="button" data-bs-toggle="dropdown"><img className="me-2"
                                                                                         src="img/flags/en.png"
                                                                                         width="20" alt="English"/>Eng /
                                            $</button>
                                        <ul className="dropdown-menu my-1">
                                            <li className="dropdown-item">
                                                <select className="form-select form-select-sm">
                                                    <option value="usd">$ USD</option>
                                                    <option value="eur">€ EUR</option>
                                                    <option value="ukp">£ UKP</option>
                                                    <option value="jpy">¥ JPY</option>
                                                </select>
                                            </li>
                                            <li><a className="dropdown-item pb-1" href="#"><img className="me-2"
                                                                                                src="img/flags/fr.png"
                                                                                                width="20"
                                                                                                alt="Français"/>Français</a>
                                            </li>
                                            <li><a className="dropdown-item pb-1" href="#"><img className="me-2"
                                                                                                src="img/flags/de.png"
                                                                                                width="20"
                                                                                                alt="Deutsch"/>Deutsch</a>
                                            </li>
                                            <li><a className="dropdown-item" href="#"><img className="me-2"
                                                                                           src="img/flags/it.png"
                                                                                           width="20" alt="Italiano"/>Italiano</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget widget-links widget-light">
                                    <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                                        <li className="widget-list-item me-4"><a className="widget-list-link"
                                                                                 href="#">Outlets</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link"
                                                                                 href="#">Affiliates</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link"
                                                                                 href="#">Support</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link"
                                                                                 href="#">Privacy</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Terms
                                            of use</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end mb-4">
                                <div className="mb-3"><a className="btn-social bs-light bs-twitter ms-2 mb-2"
                                                         href="#"><i className="ci-twitter"></i></a><a
                                    className="btn-social bs-light bs-facebook ms-2 mb-2" href="#"><i
                                    className="ci-facebook"></i></a><a
                                    className="btn-social bs-light bs-instagram ms-2 mb-2" href="#"><i
                                    className="ci-instagram"></i></a><a
                                    className="btn-social bs-light bs-pinterest ms-2 mb-2" href="#"><i
                                    className="ci-pinterest"></i></a><a
                                    className="btn-social bs-light bs-youtube ms-2 mb-2" href="#"><i
                                    className="ci-youtube"></i></a></div>
                                <img className="d-inline-block" src="img/cards-alt.png" width="187"
                                     alt="Payment methods"/>
                            </div>
                        </div>
                        <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights
                            reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank"
                                                 rel="noopener">Createx Studio</a></div>
                </div>
            </div>
        </footer>
       {/*  Toolbar for handheld devices (Default)*/}
        <div className="handheld-toolbar">
            <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item"
                                                                 href="account-wishlist.html"><span
                className="handheld-toolbar-icon"><i className="ci-heart"></i></span><span
                className="handheld-toolbar-label">Wishlist</span></a><a className="d-table-cell handheld-toolbar-item"
                                                                         href="javascript:void(0)"
                                                                         data-bs-toggle="collapse"
                                                                         data-bs-target="#navbarCollapse"
                                                                         onClick="window.scrollTo(0, 0)"><span
                className="handheld-toolbar-icon"><i className="ci-menu"></i></span><span
                className="handheld-toolbar-label">Menu</span></a><a className="d-table-cell handheld-toolbar-item"
                                                                     href="shop-cart.html"><span
                className="handheld-toolbar-icon"><i className="ci-cart"></i><span
                className="badge bg-primary rounded-pill ms-1">4</span></span><span
                className="handheld-toolbar-label">$265.00</span></a></div>
        </div>
        {/*Back To Top Button*/}<a className="btn-scroll-top" href="#top" data-scroll><span
            className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i
            className="btn-scroll-top-icon ci-arrow-up"> </i></a>
        {/*Vendor scrits: js libraries and plugins*/}
       {/* <script src="/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/tiny-slider@2.9.4/dist/min/tiny-slider.min.js"></script>
        <script src="/vendor/simplebar/dist/simplebar.min.js" />
        <script src="/vendor/tiny-slider/dist/min/tiny-slider.js" />
        <script src="/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js" />
         Main theme script
        <script src="/theme.min.js" />*/}
           <script rel="script" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />

        <script rel="script" src="/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"/>
        <script rel="script" src="/vendor/simplebar/dist/simplebar.min.js" />
        <script rel='script' src="/tiny-slider" defer />
        <script rel="script"  src="/theme.min" defer />


        </body>
        </html>
    );}
};

export default Layout;
