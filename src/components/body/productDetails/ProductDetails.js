import React, {Component} from 'react';
import './ProductDetails.css'
import products from '../../localData/products.json'
import ButtonsSizes from '../../buttons/buttonsSizes/ButtonsSizes';
import ButtonAddCart from '../../buttons/buttonAddCart/ButtonAddCart';

import { connect } from 'react-redux';

class ProductDetails extends Component {

    render = () =>{
        console.log(this.props)
        const prodSize = this.props.products.size;
        const clicked = this.props.products.clicked;
        const selected = this.props.products.selected;
        return (
        <div className='wrapper_paragraph'>
            <p className="font_dark font_lg">{products.prodName}</p>
            <p className="font_dark font_bold font_m para_margin">{products.prodPrice}</p>
            <div className="font_grey font_sm line_height mt-4">
            {products.prodDetails}
            </div>
            <div className='font_grey font_sm para_margin font_weight_500'>SIZE<span className='starRed'>*</span><span className='font_dark font_bold ml-2 font_xs'>{prodSize}</span></div>
            <div className='buttonPosition mt-3'>
                <ButtonsSizes/>
                {
                    !selected&&clicked?<small className='text-danger'>please select your size</small>:null
                }
                <div className = 'mt-3'>
                <ButtonAddCart/>
                </div>
            </div>
        </div>
        )
    }
}
    const mapStateToProps = state => {
        return state
    };

export default connect(mapStateToProps)(ProductDetails);