
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        
        
        
          
            <div className="menu-container ">
              
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About Us</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>Contact us</li>
                </Link>
             
            </div>
         
        
     
    );
};

export default NavigationBar;