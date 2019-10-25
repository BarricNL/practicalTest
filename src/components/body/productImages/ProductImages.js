import React from 'react';
import productPic from '../../../assets/img/classic-tee.jpg';
import './ProductImages.css';

const ProductImages = () =>{
    return (
        <div>
            <div className='wrapper_pic'>
            <img src={productPic} alt="Loading"/>
            </div>
        </div>
    )
}


export default ProductImages