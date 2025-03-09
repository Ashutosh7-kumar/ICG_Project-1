import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slic.css";

const Slic = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="slide">
          <img src="/images/slide1.png" alt="Coast Guard Patrol 1" />
          <div className="hero-text">
            <h1>Ready... Relevant... Responsive</h1>
            <p>
              Coast Guard ships and aircraft undertake regular patrols to keep the 
              Offshore Development Areas (ODAs) under surveillance.
            </p>
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide2.png" alt="Coast Guard Patrol 2" />
          <div className="hero-text">
            <h1>Guarding the Blue Waters</h1>
            <p>
              Indian Coast Guard ensures the security of maritime zones across the country.
            </p>
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide3.png" alt="Coast Guard Rescue Operation" />
          <div className="hero-text">
            <h1>Rescue & Relief Operations</h1>
            <p>
              Dedicated to safeguarding lives at sea with cutting-edge rescue operations.
            </p>
          </div>
        </div>
        <div className="slide">
          <img src="/images/slide4.png" alt="Coast Guard Rescue Operation" />
          <div className="hero-text">
            <h1>Rescue & Relief Operations</h1>
            <p>
              Dedicated to safeguarding lives at sea with cutting-edge rescue operations.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Slic;
