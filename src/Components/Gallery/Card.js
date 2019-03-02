import React from 'react'
import './Card.css' 

import one from '../../Assets/Images/GalleryCard/1.jpg'
import two from '../../Assets/Images/GalleryCard/2.jpg'
import five from '../../Assets/Images/GalleryCard/5.jpg'
import six from '../../Assets/Images/GalleryCard/6.jpg'
import seven from '../../Assets/Images/GalleryCard/7.jpg'
import eight from '../../Assets/Images/GalleryCard/8.jpg'

const Card = () => {
    return (
        <div>
            <div className="row">
                <div className="card-container col-sm-6 pt-3">
                    <div className="card card-front">
                        <img height="265px" src={two} alt="..."/>
                    </div>
                    <div className="card card-back">
                        <div className="card-body text-dark" 
                            style={{background: 'rgb(108, 241, 108)'}}>
                            <h4 className="text-center">CSE Carnival 2016</h4> 
                            <div style={{width: '50%', float: 'left'}}> 
                                <p 
                                    className="text-justify mt-4"> 
                                    Team Name: GUB-Unique <br/> 
                                    Rank: Runners Up  
                                </p> 
                            </div> 
                            <div style={{width: '50%', float: 'left'}}>
                                <img 
                                    style={{
                                        marginLeft: '23px', 
                                        marginBottom: '8px'
                                    }} 
                                    height="145px" 
                                    src={five} 
                                    alt="Creast"/> 
                                <h6 className="text-dark"> 
                                    Symbol of Excellence 
                                </h6> 
                            </div> 
                        </div> 
                    </div> 
                </div> 



                <div className="card-container col-sm-6 pt-3">
                    <div className="card card-front">
                        <img height="265px" src={one} alt="..."/>
                    </div>
                    <div className="card card-back">
                        <div className="card-body text-dark" 
                            style={{background: 'rgb(108, 241, 108)'}}>
                            <h4 className="text-center">CSE Carnival 2018</h4> 
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
                                    src={six} 
                                    alt="Creast"/> 
                                <h6 className="text-dark"> 
                                    Symbol of Excellence
                                </h6>
                            </div> 
                        </div> 
                    </div> 
                </div> 







                <div className="col-sm-6 pt-5">
                    <div className="card">
                        <img height="265px" src={seven} alt="Program"/> 
                    </div> 
                </div> 

                <div className="col-sm-6 pt-5"> 
                    <div className="card"> 
                        <img height="265px" src={eight} alt="Program"/> 
                    </div> 
                </div>  

            
            </div> 
        </div> 
    ) 
} 
        
export default Card 