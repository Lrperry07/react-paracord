import Header from './Header';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-dom';
import about1 from '../images/about1.jpg'
import GroupBndle1 from '../images/GroupBndle1.JPG'
import GroupBndle2 from '../images/GroupBndle2.JPG'
import YllwNBlue1 from '../images/YllwNBlue1.JPG'
//import { Carousel } from 'react-responsive-carousel';

import { render } from "react-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";




class AboutUs extends Component {



render() {
    return (
        <div style={{color: "white"}}>
            <form className="container about-us-container">
                <div className="w3-content" style={{ 'max-width': '1200px' }}>

                    <div className="w3-panel">
                        <i className="w3-xlarge fa fa-bars"></i>
                    </div>
                    {/* First Grid: Logo & About   */}
                    <div className="w3-row">
                        <div className="w3-half w3-container">
                            {/* <h1 className="w3-xxlarge w3-text-light-grey">Hello New Customers!!!!</h1> */}
                            <h1 className="w3-xxlarge w3-text-grey">Welcome to Perry's Paracord Palace!!!</h1>
                            <h2 className="w3-jumbo">Come get some New Threads!!!</h2>
                        </div>
                        <div className="w3-half w3-container w3-xlarge w3-text-grey">
                            <p className="">Here is My shop to showcase and sell my Paracord Bracelets.
                            -Began Months ago with just an idea to pass time and then IT HIT ME(Not Covid)!!
                            -"Is there a jewerly line of flashy paracord bracelets?" If there is, than I have
                            -some competetion. Newly started in this trade and pray you like them and buy three
                            -or for!
                            </p>
                            <p>USAF Veteran Owned</p>
                        </div>
                    </div>

                    {/* Second Grid: Resent   */}
                    <div className="w3-panel w3-text-grey">
                        <h1>Check Us Out</h1>
                        
                    </div>
                    

                     <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={about1} className="d-block w-100" alt="First Slide" />
                            </div>
                            <div className="carousel-item">
                                <img src={GroupBndle1} className="d-block w-100" alt="Second Slide" />
                            </div>
                            <div className="carousel-item">
                                <img src={GroupBndle2} className="d-block w-100" alt="Third Slide" />
                            </div>
                            <div className="carousel-item">
                                <img src={YllwNBlue1} className="d-block w-100" alt="Fourth Slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div> 
                </div>
            </form>
        </div>
    );
}
}

export default AboutUs;