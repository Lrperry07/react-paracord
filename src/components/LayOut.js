import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SignUp from './signup/SignUp';
import Home from './Home';
import Thankyou from './Thankyou';
import AboutUs from './AboutUs';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
//import UserProfile from './Home';
import '../index.css'
import SignIn from './SignIn';
import Shop from './Shop';
import SavedItems from './SavedItems';




class LayOut extends Component {
    render() {
        let routes = (
            //See before you login
            <div className="">
                {/* <Route path="/signup" component={SignUp} /> */}
                 {/* <Route Path="/signin" component={SignIn} />  */}
                <Route path="/thank-you" component={Thankyou} />
            </div>
        );
        //See After you Login
        if (localStorage.getItem("loggedInUser")) {
            routes = (
                <div>
                    {/* <Route path="/cart" component={Cart} /> */}
                    <Route path="/home" component={Home} />
                    <Route path="/savedItems" component={SavedItems} />
                    <Route path="/thank-you" component={Thankyou} />
                    {/* <Route path="/shop" component={Shop} /> */}
                
                </div>
            )
        }
        return (
            <div>
                <Header {...this.props} />
                {routes}
                <Route path="/about-us" component={AboutUs} />
                <Route path="/signup" component={SignUp} />
                <Route path="/cart" component={Cart} />
                <Route path="/shop" component={Shop} />
                <Route path="/sign-in" component={SignIn} />
                <Footer />
            </div>
        );
    }
}

export default withRouter(LayOut);