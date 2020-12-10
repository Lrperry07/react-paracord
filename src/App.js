import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
//import './index.css';
// //import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Cart from './components/Cart'
// import Header from './components/Header';
// import SignUp from './components/signup/SignUp';
// import SignIn from './components/SignIn';
// import AboutUs from './components/AboutUs';
// //import LayOut from './components/LayOut';
import LayOut from './components/LayOut';


function App() {

  return (

   <BrowserRouter>
     <LayOut/><Carousel/>
   </BrowserRouter>

  );
}


export default App;