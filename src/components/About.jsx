import "./About.css";
import icecream from "../assets/images/about-us-image.png";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <div className="circle-yellow"></div>
          <div className="circle-pink"></div>

          <img src={icecream} alt="Icecream" className="about-image" />
        </div>

        <div className="about-right">
          <div className="title-row">
            <h2>About Icecream</h2>
            <div className="line"></div>
          </div>

          <p>
            Ice cream is a popular frozen dessert loved by people of all ages
            around the world. It is made from ingredients such as milk, cream,
            sugar, and natural or artificial flavors. The mixture is churned
            while freezing to create a smooth, creamy texture. Ice cream comes
            in a wide variety of flavors, including classic options like
            vanilla, chocolate, and strawberry, as well as modern and unique
            flavors like cookies and cream, mango, and chocolate brownie. Ice
            cream is often enjoyed as a refreshing treat, especially during hot
            weather, and is commonly served in cones, cups, or as part of
            desserts like sundaes, milkshakes, and cakes. In addition to its
            delicious taste, ice cream is also associated with celebrations,
            family gatherings, and special occasions, making it more than just a
            dessert—it’s an experience that brings joy and happiness.
          </p>

          <button className="read-btn">Read More</button>
        </div>
      </div>
    </section>
  );
}
