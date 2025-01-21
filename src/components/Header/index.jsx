import HeroIMG from "../../assets/hero.png";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>اولین کامیونیتی نسل زد ایران</h1>
          <p>یک کامینیوتی یادگیری و رشد حرفه‌ای است که با هدف ایجاد شبکه‌ای از افراد مشتاق به پیشرفت، ارائه تجربیات متخصصان، جلسات انتقال تجربه، مشاوره حرفه‌ای و فردی، و معرفی استعدادها به کسب‌وکارها فعالیت می‌کند. مأموریت ما این است که مسیر یادگیری و پیشرفت را برای اعضای خود هموار کنیم و در کنار آن‌ها از خودشناسی تا دستیابی به اهداف شغلی و فردی‌شان همراه باشیم.</p>
          <a href="#features"> اطلاعات بیشتر ↓</a>
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
