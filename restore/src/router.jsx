import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout";
import Index from "./views";
import UserOrders from "./views/userDashboard/UserOrders";
import UserCart from "./views/userDashboard/UserCart";
import UserProfile from "./views/userDashboard/UserProfile";
import UserIndex from "./views/userDashboard/UserIndex";
import UserPurchase from "./views/userDashboard/UserPurchase";
import CheckoutComplete from "./views/userDashboard/checkout/checkoutComplete";
import CheckoutShipping from "./views/userDashboard/checkout/checkoutShipping";
import CheckoutReview from "./views/userDashboard/checkout/checkoutReview";
import CheckoutPayment from "./views/userDashboard/checkout/checkoutPayment";
import CheckoutDetails from "./views/userDashboard/checkout/checkoutDetails";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51MqbTFBhiAQUIShna8m6VNqpc9dp5x8Il6SZE3wwaJKQWcf5xhZ0dnSUfWxXK3UOpECxwKKThPVtoRGU2eAHjkpr001ffNx9tM')

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Index/>
            },
            {
                path: '/product/:id',
                element: <Index/>
            },
            {
            path: '/login',
            element: <Login/>
            },

        ]
    },

    //User Dashboard
    {
        path: '/dashboard',
        element: <Layout/>,
        children:[
            {
                path: '/dashboard/:id',
                element: <UserIndex/>
            },
            {
                path:'/dashboard/profile',
                element: <UserProfile/>
            },
            {
                path: '/dashboard/cart',
                element: <UserCart/>
            },
            {
                path: '/dashboard/orders',
                element: <UserOrders/>
            },
           /* {
                path: '/dashboard/wishList',
                element: ''
            },*/
            {
                path: '/dashboard/purchase',
                element: <UserPurchase/>
            },
            {
                path: '/dashboard/review',
                element: ''
            },
            {
                path: '/dashboard/checkoutDetails',
                element: <CheckoutDetails/>
            },
            {
                path: '/dashboard/payment',
                element:<Elements stripe={stripePromise}> <CheckoutPayment/> </Elements>
            },
            {
                path: '/dashboard/checkoutReview',
                element: <Elements stripe={stripePromise}><CheckoutReview/></Elements>
            },
            {
                path: '/dashboard/checkoutShipping',
                element: <CheckoutShipping/>
            },
            {
                path: '/dashboard/checkoutComplete/:UUID',
                element: <CheckoutComplete/>
            },


            {
                path: '*',
                element: <NotFound />
            },
        ]
    },

    //Vendor Dashboard
    {
        path: '/vendor',
        element: '',
        children: [
            {
              path: '/vendor/:id',
              element: ''
            },
            {
                path: '/vendor/profile',
                element: ''
            },
            {
                path: '/vendor/purchases',
                element: ''
            },
            {
                path: '/vendor/cart',
                element: ''
            },
            //Sales Section
            {
                path: '/vendor/sales',
                element: ''
            },
            {
                path: '/vendor/pendingOrders',
                element: ''
            },
            {
                path: '/vendor/products',
                element: ''
            },
            {
                path: '/vendor/addProduct',
                element: ''
            },
            {
                path: '/vendor/payout',
                element: ''
            },
        ]
    },
    //admin Dashboard
    {
        path: '/admin',
        element: '',
        children: [
            {
              path: '/admin/:id',
              element: ''
            },
            //User management
            {
                path: '/admin/viewUsers',
                element: ''
            },
            {
                path: '/admin/editUsers/:id',
                element: ''
            },
            {
                path: '/admin/userActivity',
                element: ''
            },
            //Product Management
            {
                path: '/admin/viewProducts',
                element: ''
            },
            {
                path: '/admin/addProduct',
                element: ''
            },
            {
                path: '/admin/viewCategories',
                element: ''
            },
            {
                path: '/admin/addCategory',
                element: ''
            },
            {
                path: '/admin/viewlowstock',
                element: ''
            },
            //order Management
            {
                path: '/admin/viewOrders',
                element: ''
            },
            {
                path: '/admin/cancelled',
                element: ''
            },
            {
                path: '/admin/sales',
                element: ''
            },
            //seller Management
            {
                path: '/admin/viewVendor',
                element: ''
            },
            {
                path: '/admin/rates',
                element: ''
            },
            //Payment Management
            {
                path: '/admin/allPayment',
                element: ''
            },
            {
                path: '/admin/userEarning',
                element: ''
            },

        ]
    },

    //Authentication and Sign Up
    {
        path: '/signup',
        element: <Signup/>
    },
    //404 page Not found
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/layout',
        element: <Layout/>
    }

])

export default router;
