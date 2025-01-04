import { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import "./index.css";

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  useEffect(() => {
    const menu = document.querySelector(".nav__menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    const openNav = () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      menuBtn.style.display = "none";
    };

    menuBtn.addEventListener("click", openNav);

    const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";
    };

    closeBtn.addEventListener("click", closeNav);

    const navItems = menu.querySelectorAll("a");

    if (window.innerWidth < 768) {
      navItems.forEach((item) => {
        item.addEventListener("click", closeNav);
      });

      return () => {
        menuBtn.removeEventListener("click", openNav);
        closeBtn.removeEventListener("click", closeNav);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        nav.classList.toggle("window-scroll", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <a href="#" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className={`nav__menu ${isNavMenuOpen ? "nav__menu" : ""}  `}>
          <li>
            <a href="#features" className="nav__link">
              Features
            </a>
          </li>
          <li>
            <a href="#operations" className="nav__link">
              Operations
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav__link">
              Testimonials
            </a>
          </li>
          <li>
            <button className="btn">
              <Link to="/register" className="registerBtn">
                Open account
              </Link>
            </button>
          </li>
        </ul>
        <button id="open-menu-btn" onClick={toggleNavMenu}>
          <AiOutlineBars className="open__menu" />
        </button>
        <button id="close-menu-btn" onClick={toggleNavMenu}>
          <MdOutlineClose className="close__menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
