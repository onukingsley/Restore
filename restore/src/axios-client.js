import axios from "axios";
import {useStateContext} from "./contexts/ContextProvider";
import log from "eslint-plugin-react/lib/util/log";

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,
})

/*axiosClient.defaults.withCredentials = true;*/





axiosClient.interceptors.request.use((config)=>{
    if(localStorage.getItem('ACCESS_TOKEN')){
        const token = localStorage.getItem('ACCESS_TOKEN')

        config.headers.Authorization = `Bearer ${token}`

    }

    return config;
})

axiosClient.interceptors.response.use((response)=>{
        console.log(response)
    return response;
},(error)=>{
    try{
        const {response} = error
        if (response.status === 401){
            localStorage.removeItem('ACCESS_TOKEN')
            console.log('unauthorised user')
        }
    }catch (e){
        console.log('this is the error ' + e)
    }

        throw error;
})


export default axiosClient;
