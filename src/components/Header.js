import { Button } from 'bootstrap';
import React from 'react'
import { Nav } from 'react-bootstrap'
import  logo   from '../assets/logo.png';

const Header = () => {
    return (
        <div className="navbar-nav mr-auto ">  
            <Nav
                
            >

                    <button
                        
                        className="btn btn-danger mt-3 mb-2"
                        

                        >Mi Logo
                    </button>
                {/* <p 
                    
                >
                    Mi Logo
                </p>            */}
            </Nav>
            <hr></hr>
        </div>


    )
}

export default Header
