import React from 'react';
import './Footer.css'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai';
import {AiFillPhone,AiTwotoneMail} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';


const Footer = () => {
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Any Body Can Dance</h1>
                <p className="mt-3 ">
                  <p><AiFillPhone/> 12485799228</p>
            <p><AiTwotoneMail/> anybodycandance@gmail.
            com</p>
            <p><HiLocationMarker/> 194/A Kazla,Motihar,6204 <br/> Rajshahi,Bangladeshh
            </p>
                </p>

                
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <h4>Opening hours</h4>
              <p>Contemporary :  09.00 AM- 11.00AM</p>
              <p>Folk Dance   :  11.00 AM- 1.00PM</p>
              <p>Bharatnatyam :  01.00 PM- 03.00PM</p>
              <p>Ballet       :  03.00 AM- 05.00PM</p>
            </div>
          </div>
          <div className="social-icons"><AiOutlineFacebook/> <AiOutlineInstagram/> <AiOutlineYoutube/></div>
        </div>
      </div>
    </div>
    );
};

export default Footer;