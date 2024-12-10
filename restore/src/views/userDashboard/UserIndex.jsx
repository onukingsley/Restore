import React from 'react';
import {useParams} from 'react-router-dom'
import {useStateContext} from "../../contexts/ContextProvider";
import UserSidebar from "../../components/UserSidebar";

const UserIndex = () => {
    const {id} = useParams()
    const {user} = useStateContext()
    console.log(id)
    return (
        <div>
            <div>
                {/*Page Title*/}
                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                                    <li className="breadcrumb-item text-nowrap"><a href="#">Account</a>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap active" aria-current="page">User</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">Profile info</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        {/*Sidebar*/}
                     <UserSidebar/>
                        {/* Content*/}
                        <section className="col-lg-8">
                            <h1 className="text-white">Welcome {user.name}  </h1>
                        </section>

                </div>
            </div>
            </div>

            </div>
    );
};

export default UserIndex;
