import React from 'react';
import {useStateContext} from "../../contexts/ContextProvider";

const VendorIndex = () => {
    const {user} = useStateContext()
    return (
        <section className="col-lg-8 d-flex">
            <h1 className="text-black text-center justify-content-center align-content-center">Welcome {user.name}  </h1>

        </section>
    );
};

export default VendorIndex;
