import * as FaIcons from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          &copy; 2024 Love Cusine Recipe - All right reserved
        </div>
        <div className="social">
          <div className="soical-icon-group">
            <FaIcons.FaFacebook className="soical-icon" />
          </div>
          <div className="soical-icon-group">
            <FaIcons.FaTwitter className="social-icon" />
          </div>
          <div className="soical-icon-group">
            <FaIcons.FaInstagram className="soical-icon" />
          </div>
          <div className="soical-icon-group">
            <FaIcons.FaLinkedin className="soical-icon" />
          </div>
          <div className="soical-icon-group">
            <FaIcons.FaGithub className="soical-icon" />
          </div>
          <div className="soical-icon-group">
          <FaIcons.FaTumblr className="soical-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
