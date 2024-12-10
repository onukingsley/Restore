import React from 'react';
import axiosClient from "../axios-client";
import {useStateContext} from "../contexts/ContextProvider";
import {useNavigate} from "react-router-dom";



export const Logout = () => {
    const {setUser,user,token,setToken,isLoading,cart,setCart,totalPrice,setTotalPrice,isLoadingCart,setIsLoading} = useStateContext();
    const navigate = useNavigate()
    return () => {
        axiosClient.post('v1/logout', user)
            .then(({data}) => {
                setUser(null)
                setToken(null)

                navigate('/login')
            })
    };



};

export const getUser = () => {
    return (
        <div>

        </div>
    );
};


/*Cart */
export const RemoveCart = (id)=>{

    axiosClient.delete(`v1/carts/${id}`)
        .then(({data})=>{

            console.log(data)
        }).catch(error=>{
        console.log(error)
    })
}

export const AddtoCart = ({props})=>{
    const {setUser,user,token,setToken,isLoading,cart,setCart,totalPrice,setTotalPrice,isLoadingCart,setIsLoading} = useStateContext();
    let price = props['price']
    if (props['discountPrice'] && !props['discountPrice']==0){
        price = props['discountPrice']
    }
    if(props['discountPrice'] && props['discountPrice']==0) {
        price = props['price']
    }
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


