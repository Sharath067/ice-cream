import "./Carousel.css";
import { useState, useEffect } from "react";

import ice1 from "../assets/images/chocolate-icecream.png";
import ice2 from "../assets/images/straberry-icecream.png";
import ice3 from "../assets/images/pista-icecream.png";
import ice4 from "../assets/images/vanilla-icecream.png";
import ice5 from "../assets/images/Butter Scotch-icecream.png";

export default function Carousel() {
  const slides = [
    {
      title: "Chocolate",
      text: "Delicious chocolate ice cream loved by everyone.",
      image: ice1,
    },
    {
      title: "Strawberry",
      text: "Fresh strawberry ice cream made with natural ingredients.",
      image: ice2,
    },
    {
      title: "Pista",
      text: "Rich pista ice cream with authentic nutty flavor.",
      image: ice3,
    },
    {
      title: "Vanilla",
      text: "Classic vanilla ice cream smooth and creamy.",
      image: ice4,
    },
    {
      title: "Butter Scotch",
      text: "Rich butter scotch ice cream with authentic flavor.",
      image: ice5,
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="carousel">
      {/* LEFT SEMI CIRCLE */}
      <div className="left-semi"></div>

      {/* RIGHT BIG CIRCLE */}
      <div className="right-circle"></div>

      {/* RIGHT SEMI CIRCLE */}
      <div className="right-semi"></div>

      {/* CONTENT */}
      <div className="carousel-content">
        {/* LEFT TEXT */}
        <div key={index} className="text slide-text">
          <h1>{slides[index].title}</h1>

          <p>{slides[index].text}</p>

          <button className="order-btn">Order Now</button>

          {/* NUMBERS */}
          <div className="numbers">
            {slides.map((_, i) => (
              <span
                key={i}
                className={index === i ? "active" : ""}
                onClick={() => setIndex(i)}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="image">
          <div key={index} className="image-wrapper slide-image">
            <img src={slides[index].image} alt="icecream" />
          </div>
        </div>
      </div>
    </section>
  );
}
