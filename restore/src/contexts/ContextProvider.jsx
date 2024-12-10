import {createContext, useContext, useEffect, useState} from "react";
import axiosClient from "../axios-client";


//prepares the dataLayer
const StateContext = createContext({
    user:null,
    token: null,
    isLoading: null,
    isLoadingCart: null,
    setIsLoading: null,
    setIsLoadingCart: null,
    isSaved: null,
    setIsSaved: null,
    setCart:()=>[],
    cart: null,
    setUser: ()=>{},
    setToken:  () => {},
    setTotalPrice:null,
    totalPrice:null,
    order:null,
    setOrder:()=>{}
})

//wrap our app and provide the Data Layer
export const ContextProvider = ({children})=> {
    const [user, setUser] = useState({})
    const [order, setOrder] = useState(null)
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingCart, setIsLoadingCart] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    //everything Token
    const setToken  = (token)=>{
        _setToken(token)
        if (token){
            localStorage.setItem('ACCESS_TOKEN',token)
        }else {
            localStorage.removeItem('ACCESS_TOKEN')
        }

    }

    //everything Cart including getting the total price

    //Gets the user info and cart Using Useeffect
    useEffect( ()=>{
        setIsLoading(true)
        axiosClient.get('v1/user')
            .then(({data})=>{
                setUser(data)
                setIsLoadingCart(true)
                setIsLoading(true)

                //fetches cart data with the user_id
                axiosClient.get(`v1/carts?user_id[eq]=${data['id']}`)
                    .then(({data})=>{
                        const Price = Object.values(data.data).reduce((total, item) =>{
                             total = Number(total)+ Number(item['price'])
                            return total
                        },0)
                        const newcart = Object.values(data.data).reduce((acc,item)=>{
                            const id = item['product_id']

                            if (!acc[id]){
                                acc[id] = {...item, quant:0}
                            }
                            acc[id]['quant'] += Number(item['quantity'])

                            return acc
                        },[])
                        //setCart(data.data)

                        /*set state for cart and total price*/
                        setCart(newcart);
                        setTotalPrice(Price)

                    }).finally(()=>{
                    setIsLoadingCart(false);
                    setIsLoading(false)
                })
                axiosClient.get(`v1/orders?product=true&&user_id[eq]=${data['id']} `)
                    .then(({data})=>{
                        const neworder = Object.values(data.data).reduce((acc,item)=>{

                           if (!acc[item.UUID]){
                               acc[item.UUID] = []
                           }
                           acc[item.UUID].push(item)
                           return acc
                        },{});
                        setOrder(neworder)

                    })


            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
            setIsLoading(false)


        }

        )
    },[])


  /*  useEffect( ()=>{
        setIsLoadingCart(true)
        axiosClient.get(`v1/carts?user_id[eq]=${user['id']}`)
            .then(({data})=>{
                setCart(data.data)
            }).finally(
            setIsLoadingCart(false)
        )
    },[])*/

    return(
        <StateContext.Provider value={{
            user,token,setUser,setToken,isLoading,setIsLoading,isSaved,setIsSaved,cart,setCart,isLoadingCart,setIsLoadingCart
            ,totalPrice ,setTotalPrice, order, setOrder
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)
