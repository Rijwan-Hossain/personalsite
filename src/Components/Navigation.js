import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from "mdbreact";
import logo from '../Assets/Images/logo.jpg'

class Navigation extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render() { 
        return ( 
            <div className="container">
                <Navbar color="indigo" fixed="top" dark expand="md">
                    <NavbarBrand> 
                        <NavLink to="/"> 
                            <img height="35px" src={logo} alt="logo" />
                        </NavLink> 
                    </NavbarBrand> 
                    <NavbarToggler onClick={this.toggleCollapse} /> 
                    <Collapse
                        id="navbarCollapse3"
                        isOpen={this.state.isOpen}
                        navbar
                    > 
                        <NavbarNav left>
                            <NavItem active>
                                <strong>
                                    <NavLink to="/">Home</NavLink>
                                </strong>
                            </NavItem>
                            <NavItem>
                                <strong>
                                    <NavLink to="/gallery">Gallery</NavLink>
                                </strong>
                            </NavItem>
                            <NavItem>
                                <strong>
                                    <NavLink to="/resume">Resume</NavLink>
                                </strong>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
