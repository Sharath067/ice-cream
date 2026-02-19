import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonial.css";
import image1 from "../assets/images/ice-cream-1.png";
import image2 from "../assets/images/ice-cream-2.png";
import image3 from "../assets/images/ice-cream-3.png";
import image4 from "../assets/images/ice-cream-4.png";

const testimonials = [
  {
    text: `time falls as labor and great pain some. For I come to the least,
    who is our exercise any labor except as some from it convenient consequence.
    `,
    name: "Marri Fen",
    image: image1,
  },
  {
    text: `Amazing service and delicious ice creams. Every flavor feels fresh
    and perfectly balanced. The staff is friendly and the ambience is lovely.`,
    name: "John Carter",
    image: image2,
  },
  {
    text: `A perfect place for family and friends. The custom ice cream options
    are fun and tasty. Highly recommended for celebrations.`,
    name: "Sophia Lee",
    image: image3,
  },
  {
    text: `The best ice cream experience I've had in years. The flavors are
    unique and the service is outstanding. Highly recommended for celebrations.`,
    name: "David Wilson",
    image: image4,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonial</h2>

      <div className="testimonial-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-card">
          <p className="testimonial-text">{testimonials[index].text}</p>

          <h4 className="testimonial-name">{testimonials[index].name}</h4>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="testimonial-avatar">
        <img src={testimonials[index].image} alt={testimonials[index].name} />
      </div>
    </section>
  );
};

export default Testimonial;
