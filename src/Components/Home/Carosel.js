import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import one from '../../Assets/Images/Slider/1.jpg'
import two from '../../Assets/Images/Slider/2.jpg'
import three from '../../Assets/Images/Slider/0.jpg'

class Carosel extends Component { 
    render() { 
        return ( 
            <Carousel 
                showArrows={true} 
                showStatus={false}
                autoPlay={true} 
                infiniteLoop={true} 
                stopOnHover={false}
                showThumbs={false} 
            > 
                <img height="420px" src={one} alt="Batch" />
                <img height="420px" src={two} alt="Award" />
                <img height="420px" src={three} alt="Friends" />           
            </Carousel> 
        ) 
    } 
} 

export default Carosel 
