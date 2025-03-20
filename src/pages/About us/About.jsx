import React from "react";
import "./About.css";
import bg from "../../assets/about-bg.jpg";
import bgtop from "../../assets/bg-top.jpg";
import section2 from "../../assets/section2-img1.jpg";
import mission from "../../assets/mission.jpg";
import values from "../../assets/values.jpg";
const About = () => {
  return (
    <div className="main">
      <div className="section1">
        {/* Text Side */}
        <div className="text-side">
          <h2>Our history</h2>
          <p>
            Ascentisfar was born as a response to the increasingly <br />{" "}
            demanding conditions of the pharmaceutical industry. <br /> We are a
            company made up of top-level professionals <br /> with a presence in
            the main countries that produce <br /> medicines and active
            ingredients.
          </p>
          <a href="#">Get to know us</a>
        </div>

        {/* Image Side */}
        <div className="image-side" style={{ backgroundImage: `url(${bg})` }}>
          <div className="overlay-image">
            <img src={bgtop} alt="Overlay" />
          </div>
        </div>
      </div>
      {/* secondpart */}
      <div className="section2">
        <div className="image-side">
          <img src={section2} alt="Example" />
        </div>

        {/* Text side */}
        <div className="text-side">
          <h2>Why Ascentisfar?</h2>
          <p>
            We are a young company that has a team <br /> with extensive
            experience and knowledge, <br /> which allows us to offer the best
            solutions, <br /> with the highest quality. Our proximity to <br />{" "}
            clients and manufacturers at source <br /> allows us to achieve what
            others do not <br /> and in the best market conditions.
          </p>
        </div>
      </div>
      {/* section3 */}
      <div className="section3">
        <div class="flex-About">
          <div class="About-box">
            <h2>What moves us</h2>
            <h3>Vision</h3>
            <p>
              We want to be the reference company in what we do for our partners
              in the markets where we operate.
            </p>
          </div>

          <div class="About-box">
            <div className="imgmission">
              <img src={mission} alt="" />
              <h2>Mission</h2>
            </div>
            <p>
              Creating value with the products and services <br /> we provide to
              our clients, in order to improve <br /> the quality of life of
              people and all this carried <br /> out in a sustainable and
              accessible way <br /> for society as a whole.
            </p>
          </div>
        </div>
        <div className="About-box1">
          <div className="imgmission1">
            <img src={values} alt="" />
            <h2>our values</h2>
          </div>
          <p>
            These are times of change but there <br /> are things that should
            not change. At <br /> Ascentisfar we think that the the <br />{" "}
            customer must continue to be at <br /> the center of the equation.
            The customer <br />
            is our reason for being, our greatest <br /> motivation to offer the
            best service <br /> with seriousness, professionalism and <br />{" "}
            know-how.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
