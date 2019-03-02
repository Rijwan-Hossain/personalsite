import React, { Component } from 'react' 

import CoverflowCarousel from './CoverflowCarousel' 
import MultiCarousel from './MultiCarousel' 
import Left from '../Home/Left' 
import Card from './Card' 
import Address from '../Home/Address'
import Footer from '../Home/Footer'


class Gallery extends Component { 
    render() { 
        return ( 
            <div className="container"> 
                <div style={{paddingTop: '90px', overflow: 'hidden'}}></div> 
                
                <CoverflowCarousel style={{overflow: 'hidden'}}/> 

                <div style={{marginTop: '20px', overflow: 'hidden'}}> 
                    <div style={{float: 'left', width: '22%'}}> 
                        <Left /> 
                    </div> 
                    <div style={{float: 'left', width: '78%'}} className="pl-3"> 
                        <h1 className="display-4 text-center pb-3"> 
                            Image Slider 
                        </h1> 
                        <MultiCarousel /> 
                        <div className="pt-4"></div> 


                        <h1 className="display-4 text-center pt-5 pb-2"> 
                            Gallery
                        </h1> 

                        <h1 
                            style={{fontSize: '30px'}}
                            className="display-4 text-center pb-2"> 
                            Programming Contest Moments
                        </h1> 

                        <Card className="mt-5"/> 
                    </div> 
                </div> 
                <Address /> 
                <Footer /> 
            </div> 
        ) 
    } 
} 

export default Gallery 