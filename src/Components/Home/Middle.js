import React from 'react'
import Card from './Card';
import me from '../../Assets/Images/me.jpg'
import TimeSpend from './TimeSpend';

import TextLoop from 'react-text-loop' 
import BodyText from 'react-text-loop' 

const Middle = () => { 
    return ( 
        <div style={{
            paddingLeft: '15px' 
        }}> 
            <div className="flex" style={{overflow: 'hidden'}}> 
                <div className="col-sm-9" style={{float: 'left'}}> 
                    <p 
                        style={{textAlign: 'justify', fontSize: '18px'}} 
                        className="lead"> 
                        I am Rijwan Hossain, a JavaScript complete (MERN) stack developer. I love working in React, NodeJS, ExpressJS. React is a great library. This site is build in React. React is only for front end development. 
                        <br/> <br/> 
                        
                        For back-end development or bussiness processing layer, I use NodeJS. It is a run-time or a compiler. This helps a machine to run JavaScript code and compile it to machine language code. I use ExpressJS which is a very popular framework of NodeJS. <br/> <br/> 
                    </p> 
                </div> 
                <div 
                    className="col-sm-3 mt-1" 
                    style={{float: 'right', marginLeft: 'auto'}}> 
                    <img 
                        src={me} 
                        alt="Rijwan Hossain" 
                        style={{transform: 'rotateY(180deg)'}}
                        height="200px" 
                    /> 
                </div> 
            </div> 
            



            {/*     Skills   */}
            <p className="display-4" 
                style={{fontSize: '30px', overflow: 'hidden'}}> 
                Skills 
            </p> 
            
            <div style={{overflow: 'hidden'}}> 
                <div style={{ float: 'left', fontSize: '18px', width: '35%'}} className="ml-5"> 
                    <ul> 
                        <li>HTML</li> 
                        <li>CSS</li> 
                        <li>Twitter Bootstrap</li> 
                        <li>C Language</li> 
                        <li>OOP</li> 
                        <li>Java</li> 
                        <li>Git</li> 
                        <li>CLI</li> 
                        <li>Webpack & Babel</li> 
                        <li>Compititive Problem Solving</li> 
                    </ul> 
                </div> 

                <div style={{float: 'left', fontSize: '18px'}}> 
                    <ul> 
                        <li>NPM & Yarn</li> 
                        <li>JavaScript</li> 
                        <li>EcmaScript</li> 
                        <li>TypeScript</li> 
                        <li>React</li> 
                        <li>React Native</li> 
                        <li>NodeJS</li> 
                        <li>ExpressJS</li> 
                        <li>REST API</li> 
                        <li>MongoDB</li> 
                    </ul> 
                </div> 
            </div> 
            <br/> 





            {/*     CHART - Time Spent     */} 
            <p className="display-4" 
                style={{fontSize: '30px', overflow: 'hidden'}}> 
                Time Spend on {' '}
                <TextLoop springConfig={{ stiffness: 180, damping: 7 }}> 
                    <BodyText className="text-info">
                        Basic Programming</BodyText> 
                    <BodyText className="text-success">
                        Problem Solving</BodyText> 
                    <BodyText className="text-warning">
                        Front-End</BodyText> 
                    <BodyText className="text-danger"> 
                        Back-End</BodyText> 
                </TextLoop> 
            </p> 
            <div style={{overflow: 'hidden'}}> 
                <div 
                    style={{ 
                        float: 'left', 
                        width: '30%'
                }}> 
                    <TimeSpend /> 
                </div> 
                <div 
                    style={{ 
                        float: 'left', 
                        width: '60%', 
                        marginTop: '45px' 
                    }}> 
                    {/* Basic Programming  */} 
                    <div 
                        style={{ 
                            float: 'left', 
                            width: '3.5%', 
                            borderRadius: '50%', 
                            backgroundColor: '#0088FE', 
                            height: '20px', 
                            marginTop: '2px',
                            marginRight: '15px' 
                        }}> 
                    </div> 
                    <div style={{float: 'left', width: '90.5%'}}> 
                        Basic Programming 
                    </div> 


                    {/*  Problem Solving  */}
                    <div 
                        style={{ 
                            float: 'left', 
                            width: '3.5%', 
                            borderRadius: '50%', 
                            backgroundColor: '#00C49F', 
                            height: '20px', 
                            marginTop: '2px',
                            marginRight: '15px' 
                        }}> 
                    </div> 
                    <div style={{float: 'left', width: '90.5%'}}> 
                        Problem Solving 
                    </div> 

                    
                    {/*  Front-End  */} 
                    <div 
                        style={{ 
                            float: 'left', 
                            width: '3.5%', 
                            borderRadius: '50%', 
                            backgroundColor: '#FFBB28', 
                            height: '20px', 
                            marginTop: '2px',
                            marginRight: '15px' 
                        }}> 
                    </div> 
                    <div style={{float: 'left', width: '90.5%'}}> 
                        Front-End Development 
                    </div> 



                    {/*  Back-End  */} 
                    <div 
                        style={{ 
                            float: 'left', 
                            width: '3.5%', 
                            borderRadius: '50%', 
                            backgroundColor: '#FF8042', 
                            height: '20px', 
                            marginTop: '2px',
                            marginRight: '15px' 
                        }}> 
                    </div> 
                    <div style={{float: 'left', width: '90.5%'}}> 
                        Back-End Development 
                    </div> 
                </div> 
            </div> 


            {/*     Favourate Person      */} 
            <p className="display-4" 
                style={{fontSize: '30px', overflow: 'hidden'}}> 
                Favourate Person 
            </p> 
            <Card className="pb-3"/> 
        </div> 
    ) 
} 

export default Middle 
