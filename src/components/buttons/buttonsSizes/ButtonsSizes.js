import React, {Component} from 'react';
import './ButtonsSizes.css';
import products from '../../localData/products.json';
import {selectSize} from '../../../actions/Action';
import {connect} from 'react-redux';

class ButtonsSizes extends Component{
    state = {
        prodSize: null,
        index: false,
        selected:false,
    }


    getProductSize = (size, index) =>{
        const selected = true;
        this.props.dispatch(selectSize(size, selected));
        this.setState(()=>{
            return(
                {
                    prodSize: size,
                    index: index,
                    selected:true
                }
            )
        })
    }


    render = () =>{ 
        return (
        
        <div className='row font_xs font_grey wrapper_button'>
            {products.prodSizes.map((size, index)=>{
                return(
                    <div className={`buttonSize ${index===this.state.index?"buttonSize_selected":null}`} key ={index} onClick={()=>{
                        this.getProductSize(size,index);
                    }}>{size}</div>
                )                
            })}
        </div>
    )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect (mapStateToProps)(ButtonsSizes)