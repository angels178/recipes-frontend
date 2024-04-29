import * as FaIcons from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          &copy; 2024 Love Cusine Recipe - All right reserved
        </div>
        <div className="footer-social">
          <div className="footer-icon-group">
            <FaIcons.FaFacebook className="footer-icon" />
          </div>
          <div className="footer-icon-group">
            <FaIcons.FaTwitter className="footer-icon" />
          </div>
          <div className="footer-icon-group">
            <FaIcons.FaInstagram className="footer-icon" />
          </div>
          <div className="footer-icon-group">
            <FaIcons.FaLinkedin className="footer-icon" />
          </div>
          <div className="footer-icon-group">
            <FaIcons.FaGithub className="footer-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
