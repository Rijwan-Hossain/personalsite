import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <div className="d-flex" style={{ background: '#1C2331' }}>
                <div className="col-sm-6 col-md-6 col-lg-4 text-justify mb-4">
                    <h3 className="text-white text-center mt-5">
                        QUICK CONTACT
                        </h3>
                    <address className="text-white text-left ml-5 mr-5 mt-4">
                        House: Mirpur-2, H-Block, Road-10, House-2, Dhaka-1216, Bangladesh
                        <br /> 
                        Contact: 01758-712370 
                        <br /> 
                        Email: rijyan.cse.152@gmail.com
                    </address> 
                </div> 
                <div className="col-sm-6 col-md-6 col-lg-4 text-center"
                    style={{ background: '#CC0000' }}>
                    <h3 className="text-white mt-5">
                        QUICK LINKS
                        </h3>
                    <div className="text-left ml-5 mt-4 text-white">
                        <a style={{ color: 'white' }} href="http://localhost:3000/gallery">My Gallery</a> 
                        <br />
                        <a style={{ color: 'white' }} href="http://localhost:3000/resume">My Resume</a>
                    </div> 
                </div> 

                <div className="col-sm-6 col-md-6 col-lg-4 text-center" style={{ background: '#1C2331' }}>
                    <h3 className="text-white mt-5">
                        CONNECT WITH ME 
                        </h3>
                    <div className="text-center my-4 ml-2" >
                        <a style={{color: 'white'}} href="https://facebook.com/rijwan000">
                            <i className="fab fa-facebook fa-3x"></i>
                        </a> 

                        <a style={{ color: '#CC0000' }} 
                            href="https://www.youtube.com/channel/UClhEOxQJqzyqTX5It0-654w?view_as=subscriber">
                            <i className="fab fa-youtube fa-3x ml-5"></i> 
                        </a> 

                        <a style={{ color: '#1976d2' }} 
                            href="https://mail.google.com/mail/u/0/?tab=om#inbox">
                            <i class="fab fa-google fa-3x ml-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address;