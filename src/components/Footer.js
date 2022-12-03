import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li>
          <SocialIcon url="https://www.facebook.com/kuyarey.shop" bgColor="#fff" />
        </li>
        <li>
          <SocialIcon url="https://www.instagram.com/kuyareyflowershop" bgColor="#fff" />
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Review</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <p>©2022 Kuya Rey Flowershop | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
