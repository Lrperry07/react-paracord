import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class Methods extends Component{
    
    state = {
        checked : false
    }



    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
            this.state.checked = true;
        }
        else{
            this.props.substractShipping();
            this.state.checked = false;
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <Link to="/thank-you"><button className="btn btn-secondary">Checkout</button></Link>
                    </div>
                 </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Methods)