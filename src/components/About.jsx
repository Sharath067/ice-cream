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
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu consectetur adipiscing sequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore u
          </p>

          <button className="read-btn">Read More</button>
        </div>
      </div>
    </section>
  );
}
