import HeroIMG from "../../assets/hero.png";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>When banking meets minimalist</h1>
          <p>A simpler banking experience for a simpler life.</p>
          <a href="#features">Learn More ↓</a>
        </div>
        <div className="header__right">
          <div className="header__right-image">
            <img src={HeroIMG} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
