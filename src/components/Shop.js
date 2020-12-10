import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
//import Black1 from './images/Black1.JPG'




class Shop extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        const styleObj = {
            height: "100px",
            width: "100px"
        }
        let itemList = this.props.items.map(item => {
            return (

                <div className="card border-info mb-3" key={item.id}>
                    <div className="card-img-top">
                        <img src={/* process.env.PUBLIC_URL +  */item.img} alt={item.title} style={styleObj} />
                        <h5  className="card-title">{item.title}</h5>
                        <button to="/" className="btn btn-dark" onClick={() => { this.handleClick(item.id) }}><i>+</i></button>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>



            )
        })

        return (
            <div className="container shop-container">
                <h1 style={{color: "white"}} className="center">Our items</h1>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)