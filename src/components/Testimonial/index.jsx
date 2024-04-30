import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { profile3, profile4, profile5, profile6 } from "../../images";

const data = [
  {
    avatar: profile3,
    name: "Itachi Uchiha",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ducimus voluptates dicta nemo, ad nesciunt provident soluta molestias perferendis sit?",
  },
  {
    avatar: profile4,
    name: "Gojo Satoru",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ducimus voluptates dicta nemo, ad nesciunt provident soluta molestias perferendis sit?",
  },
  {
    avatar: profile5,
    name: "Kirito",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ducimus voluptates dicta nemo, ad nesciunt provident soluta molestias perferendis sit?",
  },
  {
    avatar: profile6,
    name: "Rain Rocks",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ducimus voluptates dicta nemo, ad nesciunt provident soluta molestias perferendis sit?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">Testimonials</h2>
          <p className="text__muted description">
            iscover what clients are saying about their experiences working with
            me as their trusted web developer. From startups to established
            businesses, my dedication to crafting exceptional online experiences
            shines through in their words.
          </p>
        </div>

        <Swiper
          className="testimonial__container"
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={item.avatar} alt={item.review} />
              </div>
              <h3 className="client__name">{item.name}</h3>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
