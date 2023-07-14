import React from "react";
import logo from "../assets/logo.jpeg";
import { MdOutlineArrowUpward } from "react-icons/md";
import resume from "./milos.pdf";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={logo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a href="https://github.com/miladBann">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/milad-bannourah/">LinkedIn</a>
        </div>
        <div>
          <a href="mailto:miladbannourah@outlook.com">Email</a>
        </div>
        <div>
          <a href={resume}>Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Milad Bannourah</div>
    </div>
  );
};

export default Footer;
