import React from 'react';
import logo from '../Assets/Images/logo.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt=""/>
      <div className="boundary">
        <div className="location">
          <i class="fas fa-map-marker-alt"></i>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est accusamus eius laboriosam similique. Nesciunt ab totam eius tempore harum.</p>
        </div>
        <div className="contact">
          <ul>
            <li><i class="fas fa-phone-alt"></i> +1-543-123-4567</li>
            <li><i class="fas fa-paper-plane"></i> example@fylo.com</li>
          </ul>
        </div>
        <div className="pages">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Jobs</li>
            <li>Terms</li>
            <li>Press</li>
            <li>Privacy</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="social_links">
          <span className="page_link">
            <i class="fab fa-facebook-f"></i>
          </span>
          <span className="page_link">
            <i class="fab fa-twitter"></i>
          </span>
          <span className="page_link">
            <i class="fab fa-instagram"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;