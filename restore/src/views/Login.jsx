import {useEffect, useRef, useState} from "react";
import axiosClient from "../axios-client";
import {useStateContext} from "../contexts/ContextProvider";
import {Link,Navigate,useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {


    /*definition of input using useRef*/
    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const phoneRef = useRef()
    const passwordRef = useRef()
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()
    const navigate = useNavigate()

    const [error , setError] = useState()

    const {token,setToken,setUser,user} = useStateContext()

/*
    if (token && user){
        return <Navigate to='/'/>
    }
*/
/*
    useEffect(()=>{
        axiosClient.get('/v1/user')
            .then(({data})=>{
                setUser(data)
            })
    },[])
    console.log(user)
*/


    const onLoginSubmit =  (ev)=> {
        ev.preventDefault();
        setError(null)


            const loginPayload = {
                'email': loginEmailRef.current.value,
                'password': loginPasswordRef.current.value
            }

                axiosClient.post('v1/authenticate',loginPayload)
                    .then( ({data})=>{
                        setToken(data.token)
                        setUser(data.user)
                        console.log('code reached')
                        console.log('this is the user '+user + token)
                        navigate('/')




                    })
                    .catch(err=>{
                        /* const response = err.response*/  /*direct assignment*/

                        const {response} = err /*destructuring of an object to get a value and assign it to a variable*/
                        if (response){
                            console.log(response.data.errors)
                            setError(response.data.errors)
                        }

                    })






    }
    const Logout =async (e)=>{
        await console.log(axiosClient.get('v1/user'));
    }

    const onRegistrationSubmit = (e)=>{
        e.preventDefault()


        const payload = {
            'name' : nameRef.current.value,
            'email' : emailRef.current.value,
            'address' : addressRef.current.value,
            'phoneNo' : phoneRef.current.value,
            'password' : passwordRef.current.value,
        }
        axiosClient.post('/v1/register',payload)
            .then(({data})=>{
                setToken(data.token);
                setUser(data.user)
                console.log('we got here')
                console.log(data)
                /*navigate('/')*/
                window.location.href = '/'

            })
            .catch(err => {
                const {response} = err
                setError(response.data.errors)
            })

    }

    return (
        <div className="container py-4 py-lg-5 my-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="h4 mb-1">Sign in</h2>
                            <div className="py-3">
                                <h3 className="d-inline-block align-middle fs-base fw-medium mb-2 me-2" onClick={Logout}>With social
                                    account:</h3>
                                <div className="d-inline-block align-middle"><a
                                    className="btn-social bs-google me-2 mb-2" href="#" data-bs-toggle="tooltip"
                                    title="Sign in with Google"><i className="ci-google"></i></a><a
                                    className="btn-social bs-facebook me-2 mb-2" href="#" data-bs-toggle="tooltip"
                                    title="Sign in with Facebook"><i className="ci-facebook"></i></a><a
                                    className="btn-social bs-twitter me-2 mb-2" href="#" data-bs-toggle="tooltip"
                                    title="Sign in with Twitter"><i className="ci-twitter"></i></a></div>
                            </div>
                            <hr/>
                                <h3 className="fs-base pt-4 pb-2">Or using form below</h3>

                                <form  onSubmit={onLoginSubmit}>

                                    <div>
                                        {error && <div style={{padding : '0'}}>
                                            {Object.keys(error).map((key,value)=>{
                                                if (key === 'email'){
                                                    return <div key={key}>{error[key].map(val => (
                                                        <div key={key} style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                                    ))}</div>
                                                }

                                            })}
                                        </div>
                                        }
                                        <div className="input-group mb-3"><i
                                            className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                            <input ref={loginEmailRef} className="form-control rounded-start" name="email" type="email"
                                                   placeholder="Email"/>
                                        </div>
                                    </div>




                                    <div className="input-group mb-3"><i
                                        className="ci-locked position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                        <div className="password-toggle w-100">
                                            {error && <div style={{padding : '0'}}>
                                                {Object.keys(error).map((key,value)=>{
                                                    if (key === 'password'){
                                                        return <div>{error[key].map(val => (
                                                            <div style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                                        ))}</div>
                                                    }

                                                })}
                                            </div>
                                            }
                                            <input ref={loginPasswordRef} className="form-control" type="password" placeholder="Password"
                                                   name="password"/>
                                                <label className="password-toggle-btn" aria-label="Show/hide password">
                                                    <input className="password-toggle-check" type="checkbox"/><span
                                                        className="password-toggle-indicator"/>
                                                </label>
                                        </div>
                                        {/*@if($errors->has('err'))*/}

                                        {/*<div style="color: red; font-size: 10px">{{$errors->get('err')[0]}}</div>*/}
                                        {/*@endif*/}
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" checked
                                                   id="remember_me"/>
                                                <label className="form-check-label" htmlFor="remember_me">Remember
                                                    me</label>
                                        </div>
                                        <a className="nav-link-inline fs-sm" href="account-password-recovery.html">Forgot
                                            password?</a>
                                    </div>
                                    <hr className="mt-4"/>
                                        <div className="text-end pt-4">
                                            <button type="submit" className="btn btn-primary" ><i
                                                className="ci-sign-in me-2 ms-n21"></i>Sign In
                                            </button>
                                        </div>
                                </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pt-4 mt-3 mt-md-0">
                    <h2 className="h4 mb-3">No account? Sign up</h2>
                    <p className="fs-sm text-muted mb-4">Registration takes less than a minute but gives you full
                        control over your orders.</p>
                    <form onSubmit={onRegistrationSubmit}>

                        <div className="row gx-4 gy-3">
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-fn">First Name</label>
                                <input ref={nameRef} className="form-control" type="text" name="name"
                                       id="reg-fn"/>
                                {error && <div style={{padding : '0'}}>
                                    {Object.keys(error).map((key,value)=>{
                                        if (key === 'name'){
                                            return <div>{error[key].map(val => (
                                                <div style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                            ))}</div>
                                        }

                                    })}
                                </div>
                                }
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-email">E-mail Address</label>
                                <input ref={emailRef} className="form-control" type="email" name="email"
                                       id="reg-email"/>
                                {error && <div style={{padding : '0'}}>
                                    {Object.keys(error).map((key,value)=>{
                                        if (key === 'email'){
                                            return <div>{error[key].map(val => (
                                                <div style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                            ))}</div>
                                        }

                                    })}
                                </div>
                                }
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-phone">Phone Number</label>
                                <input ref={phoneRef} className="form-control" type="text" name="phoneNo"
                                       id="reg-phone"/>
                                    {error && <div style={{padding : '0'}}>
                                        {Object.keys(error).map((key,value)=>{
                                            if (key === 'phoneNo'){
                                                return <div>{error[key].map(val => (
                                                    <div style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                                ))}</div>
                                            }

                                        })}
                                    </div>
                                    }

                                    <div className="invalid-feedback">Please enter your phone number!</div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="reg-password">Password</label>
                                <input ref={passwordRef} className="form-control" type="password" name="password" id="reg-password"/>
                                {error && <div style={{padding : '0'}}>
                                    {Object.keys(error).map((key,value)=>{
                                        if (key === 'password'){
                                            return <div>{error[key].map(val => (
                                                <div style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                            ))}</div>
                                        }

                                    })}
                                </div>
                                }

                            </div>
                            <div className="col-sm-12">
                                <label className="form-label" htmlFor="Address">Address</label>
                                <textarea ref={addressRef} className="form-control" name="address"  id="address">

                            </textarea>
                                {error && <div style={{padding : '0'}}>
                                    {Object.keys(error).map((key,value)=>{
                                        if (key === 'address'){
                                            return <div>{error[key].map(val => (
                                                <div style={{color: 'red', fontSize: '10px'}}>{val}</div>
                                            ))}</div>
                                        }

                                    })}
                                </div>
                                }

                            </div>
                            <div className="col-12 text-end">
                                <button className="btn btn-primary" ><i className="ci-user me-2 ms-n1"></i>Sign
                                    Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
