import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="about1" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="GroupBndle1" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="GroupBndle2" />
      <p className="legend">Legend 3</p>
    </div>
    
  </Carousel>
);