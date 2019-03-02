import React from 'react'

import one from '../../Assets/Images/Design/1.jpg'
import two from '../../Assets/Images/Design/2.jpg'
import three from '../../Assets/Images/Design/3.jpg'

const Design = () => {
    return ( 
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img height="215px" src={one} alt="Tom & Jerry"/> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img height="215px" src={two} alt="Tom & Jerry"/> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img height="215px" src={three} alt="Tom & Jerry"/> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 
        
export default Design 