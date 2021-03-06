import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Methods from './Methods'
import Shop from './Shop';
import '../App.css';



class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img "> 
                                        <img src={item.img} alt={item.img} className="img-cart"/>
                                    </div>
                                
                                    <div className="card bg-secondary item-desc ">
                                        <a className="title">{item.title}</a>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="btn btn-success" onClick={()=>{this.handleAddQuantity(item.id)}}>+</i></Link>
                                            <Link to="/cart"><i className="btn btn-danger" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                        </div>
                                        <button className="btn btn-danger remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Your Shopping Cart is Empty. Lets Go Shopping!!!</p>
               
             )
       return(

        
            <div style={{color: "white"}} className="container cart-container">
                <div className="cart">
                    <h1>You have ordered:</h1>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Methods />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)