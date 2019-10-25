import React, {Component} from 'react';
import './ButtonAddCart.css';
import {connect} from 'react-redux';
import {addToCart} from '../../../actions/Action';

class ButtonAddCart extends Component{

    clickAddCart(){
        const clicked = true;
        this.props.dispatch(addToCart(clicked,this.props.products.size));
        // console.log(this.props)
        // if (this.props.products.selected){

        // }
    }
    render(){
        return (
            <div className='wrapper_button'>
            <div className='buttonAddCart' onClick={()=>{
                this.clickAddCart();
                }}>ADD TO CART</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state
}
export default connect (mapStateToProps)(ButtonAddCart)
