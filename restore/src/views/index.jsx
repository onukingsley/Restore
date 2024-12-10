import React, {useEffect, useState} from 'react';
import Hero from "../components/hero";
import TrendingProduct from "../components/TrendingProduct";
import PromoBanner from "../components/PromoBanner";
import StoreCarousel from "../components/StoreCarousel";
import Productwidget from "../components/Productwidget";
import Socials from "../components/socials";
import {useStateContext} from "../contexts/ContextProvider";
import {Navigate} from 'react-router-dom'
import axiosClient from "../axios-client";
import error from "eslint-plugin-react/lib/util/error";

const Index = () => {
    const {token} = useStateContext();
    const [Product,setProduct] = useState([])
    const [Isloading,setIsloading] = useState(false)
/*
    if (!token){
        return <Navigate to='/login'/>
    }*/

    useEffect(()=>{
        setIsloading(true)
        axiosClient.get('v1/products?productImg=true&review=true&store=true')
            .then(({data})=>{
                console.log(data.data)
                setProduct(data.data)

        })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>setIsloading(false))

    },[])
    console.log(Product)
    if (Isloading){
        return (<div>
            <p>Loading......</p>
        </div>)

    }
    return (
        <div>
            <Hero/>
            <TrendingProduct product={Product}/>
            <PromoBanner/>
            <StoreCarousel/>
            <Productwidget/>
            <Socials/>
        </div>
    );
};

export default Index;
