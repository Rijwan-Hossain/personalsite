import React, { Component } from 'react' 
import './Resume.css'
import me from '../../Assets/Images/me.jpg'
import one from '../../Assets/Images/Signature/1.jpg'

class Resume extends Component { 
    render() { 
        return ( 
            <div className="templete"> 
                <div style={{paddingTop: '90px', overflow: 'hidden'}}></div> 
                
                
                <h1 
                    className="display-4 text-center pt-3 pb-3" 
                    style={{fontSize: '45px', overflow: 'hidden'}}> 
                    Curriculum Vitae 
                </h1> 

                <div 
                    style={{ 
                        overflow: 'hidden', 
                        borderBottom: '1.5px solid'
                    }}> 
                    <div style={{float: 'left',width: '85%'}}> 
                        <h1 
                            className="display-4 mb-4" 
                            style={{fontSize: '30px'}}> 
                            Md. Rijyan Hossain 
                        </h1> 
                        <address> 
                            Address: House-16, Road-28, Section-10/D, Mirpur, Dhaka
                        </address> 
                        <p style={{marginTop: '-15px'}}>
                            Contact: 01758712370 
                        </p> 
                        <p style={{marginTop: '-15px'}}> 
                            Email: rijyan.cse.152@gmail.com 
                        </p> 
                    </div> 
                    <div style={{float: 'left', width: '15%'}}> 
                        <img 
                            src={me} 
                            height="130px" 
                            style={{  
                                marginLeft: '0 auto',  
                                transform: 'rotateY(180deg)' 
                        }} 
                            alt="Rijwan"/> 
                    </div> 
                </div> <br/> 

                <h1 className="display-4" style={{fontSize: '22px'}}>
                    Career Objective
                </h1> 
                <p style={{
                        textAlign: 'justify'
                    }}> 
                    I believe that excellence comes from working hard and smart. This is why I want to boost up my career through dedicating myself into my job.
                </p>  
                <br/> 




                <h1 className="display-4" style={{fontSize: '22px'}}>
                    Technical Skills 
                </h1> 
                <ul className="pl-5">
                    <li>
                        Tool / Language: C, Java, OOP, HTML, CSS, Bootstrap, JavaScript, React, NodeJS. 
                    </li> 
                    <li>
                        Computer Literate: Proficiency in Excel & Power Point.
                    </li> 
                    <li>
                        Other Skills: Graphics Designing & Video Editing
                    </li> 
                </ul> <br/> 





                <h1 className="display-4" style={{fontSize: '22px'}}>
                    Education 
                </h1> 
                <p className="display-4" 
                    style={{ 
                        fontSize: '15px', 
                        textDecoration: 'underline' 
                    }}> 
                    <a href="http://green.edu.bd/"> 
                        Green University of Bangladesh 
                    </a> 
                    , Passed in 2019 
                </p> 
                <p style={{marginTop: '-5px'}}> 
                    Under Graduated with a Bachelor’s Degree in CSE 
                </p> <br/> 








                <h1 className="display-4" style={{fontSize: '22px'}}>
                    Academic Projects 
                </h1> 
                <ul className="pl-5"> 
                    <li> 
                        Love Calculator 
                    </li> 
                    <li> 
                        ProgGyan Online
                    </li> 
                    <li> 
                        Fitness Application (Tutorial, Blog, E-Commerce) 
                    </li> 
                </ul> <br/> 







                <h1 className="display-4" style={{fontSize: '22px'}}>
                    Achievements 
                </h1> 
                <p className="pl-4"> 
                    Single Contest 
                </p> 
                <ul style={{paddingLeft: '60px', marginTop: '-10px'}}> 
                    <li> 
                        Ranked: 1st in Green University of Bangladesh IPC-1
                    </li> 
                    <li> 
                        Ranked: 1st in Green University of Bangladesh IPC-2
                    </li> 
                    <li> 
                        Ranked: 2nd in Green University of Bangladesh IPC-3 
                    </li> 
                </ul> 







                <p className="pl-4"> 
                    Team Contest 
                </p> 
                <ul style={{paddingLeft: '60px', marginTop: '-10px'}}> 
                    <li> 
                        Ranked: 2nd in Green University of Bangladesh CSE Carnival 2016
                    </li> 
                    <li> 
                        Ranked: 3rd in Green University of Bangladesh CSE Carnival 2017
                    </li> 
                    <li> 
                        Ranked: 3rd in Green University of Bangladesh CSE Carnival 2018 
                    </li> 
                </ul> <br/> 








                <h1 className="display-4 pb-3" style={{fontSize: '22px'}}>
                    Reference  
                </h1> 

                <p style={{fontSize: '18.5px'}}> 
                    Prof. Dr. Md. Abdur Razzaque
                </p> 
                <p  style={{marginTop: '-7px'}}> 
                    University of Dhaka (DU) <br/> 
                    Phone: 8802-8032711, 8802-8051829 <br/> 
                    Email: chairman.cse@green.edu.bd
                </p> <br/>  


                <p style={{fontSize: '18.5px'}}> 
                    Prof. Dr. Md. Monirul Islam 
                </p> 
                <p  style={{
                    marginTop: '-7px', 
                    paddingBottom: '10px',
                    borderBottom: '1.5px solid black'
                }}> 
                    Distinguished Professor <br/> 
                    Bangladesh University of Engineering & Technology (BUET) <br/> 
                    Phone: 8802-8032711, 8802-8051829 <br/> 
                    Email: advisor.cse@green.edu.bd 
                </p> <br/> <br/> <br/> <br/>   

                
                <p> 
                    I acknowledge that all the information given above are true.
                </p> <br/> 


                <div style={{float: 'left', width: '70%'}}>
                    <p>{ }</p>
                </div>
                <div 
                    style={{ 
                        float: 'left', 
                        width: '30%' 
                    }}> 
                    <img 
                        src={one} 
                        height= '40px'
                        width='160px'
                        alt="Signature" 
                        className="offset-2"
                    /> 
                    <p className="text-center mt-1" 
                        style={{borderTop: '1px solid black'}}> 
                        Date & Signature
                    </p> 
                </div> 


                <br/> <br/> <br/>
                <div>
                    <a className="btn btn-primary" href="https://bit.ly/2H3nAJe"> 
                        Download CV 
                    </a> 
                </div> 
                <br/> <br/> 
            </div> 
        ) 
    } 
} 

export default Resume 

