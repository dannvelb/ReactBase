import React, {  } from 'react';
import { Link } from "react-router-dom";

const NOT_FOUND = () => (
    <div className="account-pages my-5 pt-5">
        <div className="text-center mb-5">
            <h1 className="display-2 font-weight-medium">4<i className="bx bx-buoy bx-spin text-primary display-3"></i>4</h1>
            <h4 className="text-uppercase">Sorry, page not found</h4>
            <div className="mt-5 text-center">
                <Link className="btn btn-primary waves-effect waves-light" to={"/"}>Back to Home</Link>
            </div>
        </div>
        <div>
        </div>
    </div>
);



export default NOT_FOUND

