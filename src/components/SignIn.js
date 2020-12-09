import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'





class SignIn extends Component {
    state = {
        user: {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = {...this.state.user};
        tempUser[name] = value;
        this.setState({
            user: tempUser
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('logging in user');
            Axios.post('http://localhost:8080/loginuser', this.state.user)
            .then(response => {
                //navigate to a Thank You Page
                localStorage.setItem("loggedInUser", response.data.email);
                this.props.history.push('/thank-you');
                
            })
            .catch(error => {
                //Display error message on the screen
            });
        }
    
    render() {
        return (
            <div>
            
            <form className="container signIn-container" onSubmit={this.handleSubmit}>
            <br></br>
            
                <div class="text-center mb-4">
                    <h1 class="mb-3">Sign In</h1>
                </div>
                <div class="form-label-group container col-2 mb-4">
                    <input onChange={this.handleChange} value={this.state.email} type="text" id="email" name="email" class="form-control" placeholder="email" />
                    <label for="user_name">Email</label>
                </div>

                <div class="form-label-group container col-2">
                    <input onChange={this.handleChange} value={this.state.password} type="password" id="password"  name="password" class="form-control" placeholder="Password" />
                    <label for="password">Password</label>
                </div>
                <button className="btn btn-primary" type="submit">Sign in</button>
            
            </form>
            </div>
            
           
        
        );
    }
}

export default SignIn;