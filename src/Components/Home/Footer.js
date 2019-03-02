import React from 'react'

const Footer = () => {
    return (
        <div style={{
            background: '#263238', 
            height: '50px'
        }}> 
            <h5 style={{lineHeight: '42px'}} className="text-center text-white text-muted">
                &copy; 2018 Copyright: 
                <a style={{color: 'white'}} href="http://localhost:3000"> Rijwan Hossain </a> 
            </h5> 
        </div> 
    ) 
} 

export default Footer; 
