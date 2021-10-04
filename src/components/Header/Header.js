import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import './Header.css'

const Header = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <NavigationBar></NavigationBar>
          <div className="col-md-6">
            <h1 className="title">
              ANY BODY <br /> CAN DANCE
            </h1>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;