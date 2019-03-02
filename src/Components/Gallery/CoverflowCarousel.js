import React from 'react'
import Coverflow from 'react-coverflow'

import one from '../../Assets/Images/Coverflow/1.jpg'
import two from '../../Assets/Images/Coverflow/2.jpg'
import three from '../../Assets/Images/Coverflow/3.jpg'
import four from '../../Assets/Images/Coverflow/4.jpg'
import five from '../../Assets/Images/Coverflow/5.jpg'
import six from '../../Assets/Images/Coverflow/6.jpg'
import eight from '../../Assets/Images/Coverflow/8.jpg'
import nine from '../../Assets/Images/Coverflow/9.jpg'
import ten from '../../Assets/Images/Coverflow/10.jpg'


const CoverflowCarousel = () => { 
    return ( 
        <div>  
            <Coverflow
                height="380" displayQuantityOfSide={2} speed="1000"
                navigation={false} enableScroll={true} 
                clickable={true} active={0} autoplay={true} 
            > 
                <img height="" src={six} alt=""/> 
                <img height="" src={two} alt=""/> 
                <img height="" src={three} alt=""/> 
                <img height="" src={four} alt=""/> 
                <img  src={one} alt=""/> 
                <img height="" src={five} alt=""/> 
                <img height="" src={ten} alt=""/> 
                <img height="" src={eight} alt=""/> 
                <img height="" src={nine} alt=""/> 
            </Coverflow> 
        </div> 
    )
}

export default CoverflowCarousel
