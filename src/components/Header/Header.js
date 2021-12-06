import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import './Header.css'


const Header = () => {
  return (
    <div className="header-container ">
      <div className="">
        <div className="header">

          <NavigationBar></NavigationBar>
         
            <h1 className="title mt-5">
              ANY BODY <br /> CAN DANCE 
            </h1>
            <p className="text-white text-center mt-3">
            Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.<br/> Dance in your blood. Dance when you're perfectly free.
            </p>
            <button className="register-now-btn">Register Now</button>
          </div>
         
        </div>
      </div>
   
  );
};

export default Header;