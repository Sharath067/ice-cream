import React from "react";
import { FaIceCream } from "react-icons/fa";
import "./IceCreamServices.css";

const IceCreamServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">
        Our Ice Cream Services
        <span className="title-line"></span>
      </h2>

      <p className="services-subtitle">
        Sometimes, things happen that cause great pain and suffering.
      </p>

      <div className="services-cards">
        <div className="service-card">
          <div className="card-content">
            <FaIceCream className="service-icon" />
            <div className="card-text">
              <h3>Fresh Scoop Ice Cream</h3>
              <p>
                Enjoy freshly scooped ice creams made daily using premium
                ingredients. Choose from classic favorites or seasonal specials,
                served with perfect texture and rich flavor in every bite.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="card-content">
            <FaIceCream className="service-icon" />
            <div className="card-text">
              <h3>Custom Ice Cream Creations</h3>
              <p>
                Create your own ice cream delight by mixing flavors, toppings,
                and sauces. From cones to cups, we make every order just the way
                you love it.
              </p>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="card-content">
            <FaIceCream className="service-icon" />
            <div className="card-text">
              <h3>Party & Event Catering</h3>
              <p>
                Make your celebrations sweeter with our ice cream catering
                services. Perfect for birthdays, weddings, and events with a
                variety of flavors everyone will enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="read-more-btn">Read More</button>
    </section>
  );
};

export default IceCreamServices;
