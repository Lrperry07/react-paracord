import React, { Component } from 'react';
import { Route } from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cart from './Cart';
import SignUp from './signup/SignUp';
import SignIn from './SignIn';


class Header extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }
    changeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = { ...this.state.user };
        tempUser[name] = value;
        this.setState(
            {
                User: tempUser
            }
        );
    }
    handleSubmit = () => {

        Axios.post('http://localhost:8080/loginUser', this.state.user)
            .then(response => {
                //navigate to home page
                localStorage.setItem("loggedInUser", response.data.email);
                //save the users email(token)
                this.props.history.push('/home');
            })
            .catch(error => {
                //display error message on the screen "email/password invalid"
            });
    }
    signOut = () => {
        localStorage.removeItem("loggedInUser");
        this.props.history.push('/');
    }

    render() {
        let signInSignOut = (

             <form className="form-inline mt-2 mt-md-0">
                 <input onChange={this.changeHandler} value={this.state.user.email} name="email" className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" />
                 <input onChange={this.changeHandler} value={this.state.user.password} name="password" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
                 <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.handleSubmit} type="button">Sign In</button>
             </form>
        );
        let links = (
            <li className="nav-item active">
                <Link className="nav-link" to="/signup">Sign Up <span className="sr-only">(current)</span></Link>
            </li>
        );

        if (localStorage.getItem("loggedInUser")) {
            signInSignOut = (
                <button className="btn btn-outline-info my-2 my-sm-0"
                    onClick={this.signOut} type="button">
                    Sign Out
                </button>
            );
            links = (
                <li className="nav-item active">
                    <Link className="nav-link" to="/settings">Settings <span className="sr-only">(current)</span></Link>
                </li>
            );
        }
        return (
            <div className="mb-5">
                <nav className="navbar navbar-expand-md navbar-light fixed-top ">
                    <Link className="navbar-brand" to="/">Perry's Cord Shop</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {links}
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                                <Link className="nav-link" to="/shop">Shop</Link>
                                <Link className="nav-link" to="/cart">Shopping Cart</Link>

                            </li>
                        </ul>
                        {signInSignOut}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;