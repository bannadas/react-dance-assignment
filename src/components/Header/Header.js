import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import './Header.css'


const Header = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="header">
          <NavigationBar></NavigationBar>
         
            <h1 className="title mt-5">
              ANY BODY <br /> CAN DANCE
            </h1>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
          </div>
         
        </div>
      </div>
   
  );
};

export default Header;