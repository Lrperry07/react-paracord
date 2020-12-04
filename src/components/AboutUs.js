import Header from './Header';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-dom';




class AboutUs extends Component {
    render() {
        return (
            <div>
                <form className="about-us-container">
                    <div className="w3-content" style={{ 'max-width': '1200px' }}>

                        <div className="w3-panel">
                            <i className="w3-xlarge fa fa-bars"></i>
                        </div>
                        {/* First Grid: Logo & About   */}
                        <div className="w3-row">
                            <div className="w3-half w3-container">
                                <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
                                <h1 className="w3-xxlarge w3-text-grey">I Am Richard aka "BATMAN"!!</h1>
                                <h1 className="w3-jumbo">*GASP*Not Really*Sigh*</h1>
                            </div>
                            <div className="w3-half w3-container w3-xlarge w3-text-grey">
                                <p className="">I am a 27 yr/old veteran(USAF) who loves to game!
                                - Learning how to code has been an adventure and still hard work but im still up to the challenge.
                                - Nothing comes easy if it comes with a big reward at the end.</p>
                                <p>Work Harder to Be Smarter so that I can game harder!! (lol)</p>
                            </div>
                        </div>

                        {/* Second Grid: Resent   */}
                        <div className="w3-panel w3-text-grey">
                            <h4>MOST RECENT WORK:</h4>
                        </div>
                        <div className="w3-row">
                            <div className="w3-half w3-container">
                                {/* <img src={pic3} style={{ width: '100%' }} /> */}
                            </div>
                            <div className="w3-half w3-container">
                                {/* <img src={pic2} style={{ width: '100%' }} /> */}
                                <p className="w3-xlarge w3-text-grey">
                                    Demos, Logos, Reports, Names, Events, Media, Wordpress, Google, Books, Optimisations</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AboutUs;