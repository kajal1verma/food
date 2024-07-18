import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
            <h4>Contact Us</h4>
            <div className="icon">
            <a className="icon-box" href="https://wa.me/9027174819"  target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp />
            </a>
            <a className="icon-box" href="https://www.instagram.com/kv4555kajal"  target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram />
            </a>
            <a className="icon-box" href="https://t.me/@kajal5219"  target="_blank" rel="noopener noreferrer">
            <SiTelegram />

            </a>

            </div>
          </div>
          <div className="right">
            <p>Bulandshahr,Uttar Pradesh,203001</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By kajal verma</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By kajal verma.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;