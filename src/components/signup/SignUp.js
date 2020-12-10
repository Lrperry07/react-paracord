import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-dom';



class SignUp extends Component {
    state = {
        user: {
            fName: '',
            lName: '',
            age: '',
            email: '',
            pNumber: '',
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
    handleSubmit = () => {
            Axios.post('http://localhost:8080/submitUserDetails', this.state.user)
            .then(response => {
                //navigate to a Thank You Page
                this.props.history.push('/Thankyou');
            })
            .catch(error => {
                //Display error message on the screen
            });
        }
    
    render() {
        return (
            <div>                
                <form style={{color: "white"}} className="container sign-up-container" onSubmit={this.handleSubmit}>
                    <h1>Sign Up Below!!!</h1>
                    <div className="row mb-4">
                        <div className="col">
                            <input onChange={this.handleChange} value={this.state.user.fName} name="fName" type="text" class="form-control" placeholder="First name"/>
                        </div>
                        <div class="col">
                            <input onChange={this.handleChange} value={this.state.user.lName} name="lName" type="text" class="form-control" placeholder="Last name"/>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <input onChange={this.handleChange} value={this.state.user.age} name="age" type="text" class="form-control" placeholder="Age"/>
                        </div>
                        <div className="col">
                            <input onChange={this.handleChange} value={this.state.user.pNumber} name="pNumber" type="text" class="form-control" placeholder="Telephone"/>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <input onChange={this.handleChange} value={this.state.user.email} name="email" type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="col">
                            <input onChange={this.handleChange} value={this.state.user.password} name="password" type="text" className="form-control" placeholder="Password"/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-secondary btn-lg btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;