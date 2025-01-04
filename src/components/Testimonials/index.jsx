import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AVTR1 from "../../assets/user-1.jpg";
import AVTR2 from "../../assets/user-2.jpg";
import AVTR3 from "../../assets/user-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./index.css";

const Testimonial = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section id="testimonials">
      <h2>Not sure yet?</h2>
      <p>Millions of Bankists are already making their lifes simpler.</p>
      <div className="container testimonials__container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <SwiperSlide className="testimonial">
            <div className="testimonial__info">
              <h4>Best financial decision ever!</h4>
              <p>
                Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                incidunt commodi architecto numquam omnis nulla autem,
                necessitatibus blanditiis modi similique quidem. Odio aliquam
                culpa dicta beatae quod maiores ipsa minus consequatur error
                sunt, deleniti saepe aliquid quos inventore sequi.
                Necessitatibus id alias reiciendis, perferendis facere.
              </p>
            </div>
            <div className="testimonial__person">
              <div className="avatar">
                <img src={AVTR1} />
              </div>
              <div className="person__info">
                <h4>Aarav Lynn</h4>
                <small>San Francisco, USA</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="testimonial__info">
              <h4>Finally free from old-school banks</h4>
              <p>
                Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                incidunt commodi architecto numquam omnis nulla autem,
                necessitatibus blanditiis modi similique quidem. Odio aliquam
                culpa dicta beatae quod maiores ipsa minus consequatur error
                sunt, deleniti saepe aliquid quos inventore sequi.
                Necessitatibus id alias reiciendis, perferendis facere.
              </p>
            </div>
            <div className="testimonial__person">
              <div className="avatar">
                <img src={AVTR3} />
              </div>
              <div className="person__info">
                <h4>Francisco Gomes</h4>
                <small>Lisbon, Portugal</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="testimonial__info">
              <h4>Best financial decision ever!</h4>
              <p>
                Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                incidunt commodi architecto numquam omnis nulla autem,
                necessitatibus blanditiis modi similique quidem. Odio aliquam
                culpa dicta beatae quod maiores ipsa minus consequatur error
                sunt, deleniti saepe aliquid quos inventore sequi.
                Necessitatibus id alias reiciendis, perferendis facere.
              </p>
            </div>
            <div className="testimonial__person">
              <div className="avatar">
                <img src={AVTR2} />
              </div>
              <div className="person__info">
                <h4>Miyah Miles</h4>
                <small>London, UK</small>
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
