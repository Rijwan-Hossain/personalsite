import React from 'react'

import one from '../../Assets/Images/Series/1.jpg'
import two from '../../Assets/Images/Series/2.jpg'
import three from '../../Assets/Images/Series/3.png'

const Series = () => {
    return ( 
        <div> 
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img height="220px" src={one} alt="Flash"/> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img height="220px" src={two} alt="Green Arrow"/> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img height="220px" src={three} alt="WWE"/> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 
        
export default Series 