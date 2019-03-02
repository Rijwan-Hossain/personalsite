import React from 'react'

import one from '../../Assets/Images/Person/1.jpg'
import two from '../../Assets/Images/Person/2.jpg'
import three from '../../Assets/Images/Person/3.jpg'

const Card = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img height="215px" src={one} alt="Shahid Afridi"/> 
                        <div className="card-body">
                            <h4 className="text-center">Shahid Afridi</h4>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img height="215px" src={two} alt="Anisul Haque"/> 
                        <div className="card-body">
                            <h4 className="text-center">Anisul Haque</h4>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img height="215px" src={three} alt="John Cena"/> 
                        <div className="card-body">
                            <h4 className="text-center">John Cena</h4>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 
        
export default Card 