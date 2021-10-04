import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar';
import './Header.css'
import '../../images/images (1).jpg'

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
          <div className="col-md-6 header-image">
            {/* <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSns2MUfe7_6SxXkSfd1faIYtkM1P9Gr1GQ&usqp=CAU" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;