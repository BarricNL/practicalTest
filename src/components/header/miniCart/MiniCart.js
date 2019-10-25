import React, {Component} from 'react'
import './MiniCart.css';
import {connect} from 'react-redux';
import productPic from '../../../assets/img/classic-tee.jpg'

class MiniCart extends Component{
    render(){
        // console.log(this.props)
        const prodList = this.props.products.prodList
        return(
            <div>
                {
                    prodList.map(
                        (prod,index) => {
                            if (prod.prodSizes){
                            return(
                                <div className='row' key={index}>
                                    <div className='col-4 mini_pic'>
                                        <img src={productPic} alt="Loading"/>
                                    </div>
                                    <div className='col-8'>
                                        <div className='row'>{prod.prodName}</div>
                                        <div className='row'>{prod.prodQuantity} x {prod.prodPrice}</div>
                                        <div className='row'>{prod.prodSizes}</div>
                                    </div>
                                </div>
                            )
                            } else {
                                return null
                            }
                        }
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect (mapStateToProps)(MiniCart)