import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header';
import SignUp from './components/signup/SignUp';
import SignIn from './components/SignIn';
import AboutUs from './components/AboutUs';
//import LayOut from './components/LayOut';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">          
          <Header />
          <br></br><br></br><br></br><br></br><br></br>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={SignUp} />
            <Route path="/aboutus" component={AboutUs} />

            
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;