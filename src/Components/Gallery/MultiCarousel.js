import React from 'react'
import Slider from 'react-slick'

import one from '../../Assets/Images/Multi/2.jpg'
import two from '../../Assets/Images/Multi/3.jpg'
import three from '../../Assets/Images/Multi/4.jpg'
import four from '../../Assets/Images/Multi/5.jpg'
import five from '../../Assets/Images/Multi/1.jpg'
import six from '../../Assets/Images/Multi/6.jpg'
import seven from '../../Assets/Images/Multi/7.jpg'
import eight from '../../Assets/Images/Multi/8.jpg'

const MultiCarousel = () => { 
    const settings = { 
        dots: true, 
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2, 
        autoplay: true
    }; 
    return ( 
        <Slider { ...settings } className="pb-4"> 
            <img height="325px" src={one} alt="" /> 
            <img height="325px" src={eight} alt="" /> 
            <img height="325px" src={five} alt="" /> 
            <img height="325px" src={seven} alt="" /> 
            <img height="325px" src={three} alt="" /> 
            <img height="325px" src={four} alt="" /> 
            <img height="325px" src={two} alt="" /> 
            <img height="325px" src={six} alt="" /> 
        </Slider> 
    ) 
} 

export default MultiCarousel 
