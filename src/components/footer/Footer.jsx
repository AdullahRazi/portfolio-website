import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abdullah Razi</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100083693322792"><FaFacebookF /></a>
        <a href="https://www.instagram.com/abdullah_razl/"><FiInstagram /></a>
        <a href="https://twitter.com/SyedAbd36729549"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdullah Razi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer