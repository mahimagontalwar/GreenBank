import React from 'react';
import '../App.css'; // Assuming you have a separate CSS file for styling
import Mobile from '../assets/Mobile.svg'
const AppPromotion = () => {
  return (
    <section className="app-promotion-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>Easy Way to manage your finances</h1>
          <p>
            Easy to use mobile app that supports Android and iOS.
          </p>
          <div className="download-buttons">
            <a href="https://appstore.com" className="app-store-btn">
              <img src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png" alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com" className="google-play-btn">
              <img src="https://www.rgmgroup.com.au/wp-content/uploads/2018/06/Google-Play-image.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </div>
      <div>
      <img src={Mobile} alt="" />
      </div>
    </section>
  );
};

export default AppPromotion;
