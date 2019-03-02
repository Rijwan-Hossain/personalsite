import React, { Component } from 'react'
import Left from './Left';
import Middle from './Middle';
import Address from './Address';
import Footer from './Footer';

class Home extends Component { 
    render() { 
        return ( 
            <div> 
                <div className="container"> 
                    <div style={{paddingTop: '77px', overflow: 'hidden'}}></div> 
                    <div style={{marginTop: '20px', overflow: 'hidden'}}>
                        <div style={{float: 'left', width: '22%'}}>
                            <Left /> 
                        </div> 
                        <div style={{float: 'left', width: '78%'}}>
                            <Middle /> 
                        </div> 
                    </div> 
                    <Address style={{paddingTop: '50px', overflow: 'hidden'}} /> 
                    <Footer style={{overflow: 'hidden'}} /> 
                </div> 
            </div> 
        ) 
    } 
} 

export default Home; 