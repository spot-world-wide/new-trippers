import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Payment from "../../assets/payment-img (2).png";
import Brands from "../../assets/Logo - BRANDZ ( White ) PNG.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        {/* <div>
          <img src={Logo} alt="logo" className="footer-logo" />
          <p>Choose your favourite Destination</p>
        </div> */}
      </div>

      <div className="Bottom">
        <div>
          <h4>Get In Touch</h4>
          <div className="contact-icon">
            <i>
              <MdEmail />
            </i>
            <a href="mailto:info@trippersspot.com">info@trippersspot.com</a>
          </div>
          <div className="contact-icon">
            <i>
              <FiPhoneCall />
            </i>
            <a href="tel:8428588555">+91 8428588555</a>
          </div>

          <div className="contact-icon">
            <i>
              <FiPhoneCall />
            </i>
            <a href="tel:7826988555">+91 7826988555</a>
          </div>
        </div>
        <div>
          <h4>Top Services</h4>
          <a href="">Passport</a>
          <a href="/">Visa</a>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div>
          <h4>Payments Accepted</h4>
          <img src={Payment} alt="" className="payment-img" />
        </div>
        <div className="footer-social-icon">
          <Link to="https://www.instagram.com/trippers_spot/">
            <i>
              <BsInstagram />
            </i>
          </Link>
          <Link to="https://twitter.com/spot_worldwide">
            <i>
              <BsTwitter />
            </i>
          </Link>
          <Link to="https://www.facebook.com/people/Trippers-Spot/100086385791121/">
            <i>
              <BsFacebook />
            </i>
          </Link>
          <Link to="https://www.linkedin.com/search/results/all/?keywords=trippers%20spot&origin=HISTORY&sid=!Y4">
            <i>
              <BsLinkedin />
            </i>
          </Link>
          <Link to="https://www.youtube.com/channel/UCU2_ChFkWOMgca01SZEvbAg">
            <i>
              <BsYoutube />
            </i>
          </Link>
          <Link to="https://twitter.com/spot_worldwide">
            <i>
              <BsPinterest />
            </i>
          </Link>
        </div>
      </div>
      <Link to={"https://brandzspot.com/"} className="copyrights-container">
        <p>© Copyright 2023 - Trippers </p>
        <p>
          Powered by <img src={Brands} alt="Brandz" />
        </p>
      </Link>
    </div>
  );
};

export default Footer;
