import React from 'react';
import { BiGlobe, BiRupee } from 'react-icons/bi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { AiOutlineCopyright } from 'react-icons/ai';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <span className="copyright">
                <AiOutlineCopyright />
                2022 Airbnb, Inc.
            </span>
            <span>·</span>
            <span className="footer-links">Privacy</span>
            <span>·</span>
            <span className="footer-links">Terms</span>
            <span>·</span>
            <span className="footer-links">Sitemap</span>
            <span>·</span>
            <span className="footer-links">Company details</span>
            <span>·</span>
            <span className="footer-links">Destinations</span>
        </div>
        <div className="footer-right">
            <span>
                <BiGlobe />
                English (IN)
            </span>
            <span>
                <BiRupee />
                INR
            </span>
            <span>
                Support & Resources
                <MdKeyboardArrowUp />
            </span>
        </div>
    </div>
  )
}

export default Footer;