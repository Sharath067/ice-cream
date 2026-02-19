import "./Featured.css";

import ice1 from "../assets/images/straberry-icecream.png";
import ice2 from "../assets/images/vanilla-icecream.png";
import ice3 from "../assets/images/chocolate-icecream.png";
import ice4 from "../assets/images/mango-icecream.png";
import ice5 from "../assets/images/pista-icecream.png";
import ice6 from "../assets/images/Butter Scotch-icecream.png";

export default function Featured() {
  const items = [
    { image: ice1, price: "₹10", name: "Strawberry Ice Cream" },
    { image: ice2, price: "₹10", name: "Vanilla Ice Cream" },
    { image: ice3, price: "₹10", name: "Chocolate Ice Cream" },
    { image: ice4, price: "₹10", name: "Mango Ice Cream" },
    { image: ice5, price: "₹10", name: "Pista Ice Cream" },
    { image: ice6, price: "₹10", name: "Butter Scotch Ice Cream" },
  ];

  return (
    <section className="featured">
      {/* Title */}
      <div className="featured-header">
        <h2>
          Our Featured Ice Cream
          <span></span>
        </h2>

        <p>
          Enjoy our delicious ice creams made with fresh ingredients and rich,
          creamy flavors.
        </p>
      </div>

      {/* Cards */}
      <div className="featured-grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={item.image} alt="icecream" />
            </div>

            <div className="price">{item.price}</div>

            <div className="card-body">
              <h4>{item.name}</h4>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="see-more">
        <button>See More</button>
      </div>
    </section>
  );
}
