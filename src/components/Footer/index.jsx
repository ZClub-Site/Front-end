import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoLinkedin } from "react-icons/bi";
import IconImg from "../../assets/icon.png";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__1">
          <a href="#" className="footer__logo">
            <img src={IconImg} />
            <h4>Bankinst</h4>
          </a>
        </div>
        <div className="footer__2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#operations">Operations</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="footer__3">
          <h4>Privacy</h4>
          <ul className="privacy">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__4">
          <h4>Contact</h4>
          <div>
            <p>+01 234 567 8910</p>
            <p>example@gmail.com</p>
          </div>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <ImFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <TbBrandGithubFilled />
              </a>
            </li>
            <li>
              <a href="#">
                <BiLogoLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <small>Copyright - All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
