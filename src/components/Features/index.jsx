import { SlScreenDesktop } from "react-icons/sl";
import { PiArrowUpRight } from "react-icons/pi";
import { LuCreditCard } from "react-icons/lu";
import DigitalIMG from "../../assets/digital.jpg";
import GrowIMG from "../../assets/grow.jpg";
import CardIMG from "../../assets/card.jpg";
import "./index.css";

{
  /* <div class="categories__left">
<h1>Categories</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
  dolores perspiciatis asperiores rem enim dignissimos explicabo
  eveniet facilis consequuntur corporis? Autem voluptatibus mollitia
  ea cumque consectetur repudiandae et, recusandae quaerat.
</p>
<a href="#" class="btn">Learn More</a>
</div> */
}

const Features = () => {
  return (
    <section id="features">
      <h2>ویژگی ها
      </h2>
      <p>Everything you need in a modern bank and more</p>
      <div className="container features__container">
        <article className="features">
          <div className="features__left">
            <div className="features-image">
              <img src={DigitalIMG} />
            </div>
          </div>
          <div className="features__right">
            <span>
              <SlScreenDesktop className="icon" />
            </span>
            <h4>شبکه سازی</h4>
            <p>
              زد کلاب محیطی تعاملی و پویا ایجاد می‌کند که در آن افراد بتوانند با یکدیگر ارتباط برقرار کنند و از دانش و تجربیات هم بهره‌مند شوند. این ارتباطات باعث تقویت روابط حرفه‌ای و شخصی شده و فرصت‌های همکاری و شراکت‌های کاری را افزایش می‌دهد. اعضا در این فضا می‌توانند ایده‌های خلاقانه خود را مطرح کنند و بازخورد سازنده دریافت کنند. شبکه‌سازی همچنین به گسترش دسترسی به منابع، افراد و اطلاعات کلیدی کمک می‌کند. هدف اصلی ایجاد یک جامعه حمایتی است که رشد و توسعه اعضا را تسهیل کند.            </p>
          </div>
        </article>

        <article className="features">
          <div className="features__left">
            <span>
              <PiArrowUpRight className="icon" />
            </span>
            <h4>آموزش باکیفیت</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>
          <div className="features__right">
            <div className="features-image">
              <img src={GrowIMG} />
            </div>
          </div>
        </article>

        <article className="features">
          <div className="features__left">
            <div className="features-image">
              <img src={CardIMG} />
            </div>
          </div>
          <div className="features__right">
            <span>
              <LuCreditCard className="icon" />
            </span>
            <h4>جلسات انتقال تجربه</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
