import React, {Component} from 'react';
import './Header.css';
import MiniCart from './miniCart/MiniCart';
import {connect} from 'react-redux';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            activated:false
        }
    }
    handleMyCart(){
        this.setState({activated:!this.state.activated})
        console.log(this.state.activated)
    }
    render(){
        return (
            <div>
            <header className='wrapper_nav'>
                <nav className='nav_bar'>
                    <div className="row mr-2 justify-content-end">
                        <div className="col-1 font_xsm leter_space">
                            <div className={this.state.activated?'my_cart_text my_cart_text_activated':'my_cart_text'}>
                                <span className='my_cart' onClick={()=>{this.handleMyCart()}}>My Cart (4)</span><span className='my_cart_icon'onClick={()=>{this.handleMyCart()}}><i className="fa fa-cart-arrow-down"> (4)</i></span>
                                {
                                    this.state.activated?
                                    <div className= 'mini_cart_dropdown'>
                                        <MiniCart/>
                                    </div>:null
                                }
                            </div>
                        </div>
                        <div className='col-1'></div> 
                    </div>
                       
                </nav>
            </header>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect (mapStateToProps)(Header)