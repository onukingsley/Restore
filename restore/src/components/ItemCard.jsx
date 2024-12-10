import React, {useRef} from 'react';
import Quickview from "./quickview";
import {useStateContext} from "../contexts/ContextProvider";
import {v4} from "uuid"
import axiosClient from "../axios-client";

const ItemCard = ({props}) => {
  /*  console.log(props)*/
    const uuid = v4()
    const {user,isLoading,setCart,cart,setTotalPrice,totalPrice} = useStateContext()
    let price = props['price']
    if (props['discountPrice'] && !props['discountPrice']==0){
        price = props['discountPrice']
    }
    if(props['discountPrice'] && props['discountPrice']==0) {
        price = props['price']
    }
    const AddtoCart = ()=>{
        if (!isLoading){
            const payload = {
                'product_id': props['id'],
                'store_id': props['store']['id'],
                'user_id': user['id'],
                'name': user['name'],
                'email': user['email'],
                'phoneNo': user['phoneNo'],
                'address': user['address'],
                'productTitle': props['productName'],
                'price':price,
                'quantity': 1,
                'image': props['image'],
                'UUID': uuid,
            }
            console.log(payload)


            axiosClient.post('v1/carts',payload)
                .then(({data})=>{
                    console.log(data)
                    setCart((cart)=>{
                       const updateCart = {...cart}

                        if (updateCart[data.product_id]){
                            updateCart[data.product_id]['quant'] = updateCart[data.product_id]['quant'] + Number(data['quantity'])
                            console.log(data['quantity']+'  '+updateCart[data.product_id]['quant'])
                        }
                        else{
                            updateCart[data.product_id] = {...data , quant:Number(data['quantity'])}
                        }
                        console.log(updateCart)
                        return updateCart;
                    })


                    setTotalPrice((totalPrice)=>totalPrice + Number(data['price']))
                    //setCart((cart)=>[data,...cart ])
                }).catch(error=>{
                    console.log(error)
            })

        }


    }
    const propid =  `#quick-view-electro${props['id']}`
    return (<>
            <Quickview props={props}/>
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">

                {/*show discount of hot tag based on the quantity and if there is discount price*/}
        <div className="card product-card">
            {props['quantity'] == 0? (
                    <span className="  badge bg-dark badge-shadow">Out of Stock</span>

            ):props['quantity']<10 ?(
                <span className="badge  bg-danger badge-shadow">Hot</span>
            ):props['discountPrice']?(
                <span className="badge bg-danger badge-shadow">Discount</span>
            ):
                <div></div>
            }

            <div className="product-card-actions d-flex align-items-center"><a
                className="btn-action nav-link-style me-2" href="#"><i className="ci-compare me-1"></i>Compare</a>
                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip"
                        data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
            </div>
            <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html"><img
                src={props['image']} alt="Product"/></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Computers</a>
                <h3 className="product-title fs-sm"><a href="shop-single-v2.html">{props['productName']}</a>
                </h3>
                <div className="d-flex justify-content-between">
                    {props['discountPrice']?(
                        <div className="product-price"><span className="text-accent">${props['discountPrice']}</span>
                            <del className="fs-sm text-muted">${props['price']}</del>
                        </div>
                    ):(
                        <div className="product-price"><span className="text-accent">${props['price']}</span>
                        </div>
                    )}

                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i
                        className="star-rating-icon ci-star-filled active"></i><i
                        className="star-rating-icon ci-star-filled active"></i><i
                        className="star-rating-icon ci-star-filled active"></i><i
                        className="star-rating-icon ci-star"></i>
                    </div>
                </div>
            </div>
            <div className="card-body card-body-hidden">

                    {props['quantity'] == 0?(
                        <button disabled={true} className="btn btn-dark btn-sm d-block w-100 mb-2" type="submit"><i
                            className="ci-cart fs-sm me-1"></i>Out of Stock
                        </button>
                    ):(
                        <button className="btn btn-primary btn-sm d-block w-100 mb-2" onClick={AddtoCart} type="button"><i
                            className="ci-cart fs-sm me-1"></i>Add to Cart
                        </button>
                    )}



                <div className="text-center"><a className="nav-link-style fs-ms" href={propid}
                                                data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick
                    view</a></div>
            </div>
        </div>
        <hr className="d-sm-none"/>
    </div>
        </>

    );
};

export default ItemCard;
