import React from 'react'
import './Card.css' 

import seven from '../../Assets/Images/GalleryCard/7.jpg' 
import eight from '../../Assets/Images/GalleryCard/8.jpg' 
import nine from '../../Assets/Images/GalleryCard/9.jpg' 
import ten from '../../Assets/Images/GalleryCard/10.jpg' 

const Card2 = () => {
    return ( 
        <div> 
            <div className="row"> 

                <div className="card-container col-sm-6 pt-5" 
                    style={{overflow: 'hidden'}}> 
                    <div className="card card-front"> 
                        <img height="265px" src={seven} alt="..."/> 
                    </div> 
                    <div className="card card-back">
                        <img 
                            height="265px" 
                            src={eight} 
                            alt="partner"/>
                    </div> 
                </div> 



                <div className="card-container col-sm-6 pt-5" 
                    style={{overflow: 'hidden'}}> 
                    <div className="card card-front"> 
                        <img height="265px" src={nine} alt="..."/> 
                    </div> 
                    <div className="card card-back">
                        <div className="card-body text-dark" 
                            style={{background: 'rgb(108, 241, 108)'}}>
                            <h4 className="text-center">IEEE Contest - 2017</h4> 
                            <div style={{width: '50%', float: 'left'}}> 
                                <p 
                                    className="text-justify mt-4"> 
                                    Team Name: <br/> Army of Darkness <br/> 
                                    Rank: 2nd Runners Up 
                                </p> 
                            </div> 
                            <div style={{width: '50%', float: 'left'}}>
                                <img 
                                    style={{
                                        marginLeft: '23px', 
                                        marginBottom: '8px'
                                    }} 
                                    height="145px" 
                                    src={ten} 
                                    alt="Creast"/> 
                                <h6 className="text-dark"> 
                                    Symbol of Excellence
                                </h6>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
    ) 
} 
        
export default Card2 