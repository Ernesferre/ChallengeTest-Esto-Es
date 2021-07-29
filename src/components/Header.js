import React from 'react'
import { Nav } from 'react-bootstrap'
import  logo   from '../assets/logo.png';

const Header = () => {
    return (
        <div className="navbar-nav mr-auto p-2">  
            <Nav>
                <img src={logo} alt="EstoEs"></img>           
            </Nav>
            <hr></hr>
        </div>


    )
}

export default Header
