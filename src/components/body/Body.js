import React, {Component} from 'react';
import './Body.css';
import ProductDetails from './productDetails/ProductDetails';
import ProductImages from './productImages/ProductImages';

class Body extends Component{
    render = () => {
    return (
        <div className="container mt-4">
            <div className="row wapper_body">
                <div className="col-lg-5 col-sm-10 mr-4 img_sm">
                    <ProductImages/>
                </div>
                <div className="col-lg-6 col-sm-10">
                    <ProductDetails/>
                </div>
            </div>
        </div>
        )
    }
}

export default Body;