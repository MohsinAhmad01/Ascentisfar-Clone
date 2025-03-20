import React, { useEffect, useState } from "react";
import "./home.css";
import About from "../About us/About";
import img1 from "../../assets/imge1.jpg";
import img2 from "../../assets/imge2.jpg";
import img3 from "../../assets/image3.jpg";
import section2img from "../../assets/section2-img1.jpg";
import RawItem from "../../assets/cont-1.png";
import Meds from "../../assets/cont-2.png";
import handshake from "../../assets/cont-3.png";
import backimg from "../../assets/back-img.jpg";

const Home = () => {
  const images = [img1, img2, img3, img1];
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        return prev <= -(images.length - 1) * 40 ? 0 : prev - 0.5; // Move incrementally (e.g., 0.5vw)
      });
    }, 60); // Update every ~16ms (approx. 60fps for smooth animation)

    return () => clearInterval(interval);
  }, [images.length]);
  //.......................................................................................
  // marque way for right to left

  //  images  ko right se left krne kerne keleye dosra tareqa simple wala marque tag se krskte hai
  // const Marquee = () => {
  //   const images = [img1, img2, img3, img1];
  {
    /* <div className="marquee-container">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="marquee-image"
          />
        ))}
      </marquee>
    </div> */
  }
  //css iske leye
  // .marquee-container {
  //   width: 100%;
  //   overflow: hidden;
  //   padding: 20px 0;
  //   background-color: #f9f9f9;
  // }

  // .marquee-image {
  //   width: 40vw;
  //   height: auto;
  //   object-fit: cover;
  //   margin-right: 20px;
  // }
  //..............................................................................................

  return (
    <div>
      {/* Top Section */}
      <div className="top">
        <h1>Welcome to ASCENTISFAR</h1>
        <p>
          Suppliers of active ingredients, final product and <br /> specialized
          services for the pharmaceutical industry.
        </p>
      </div>

      {/* Full-Width Carousel Section */}
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${translateX}vw)`,
            transition: "none",
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
      {/* new section */}
      <div className="section1">
        {/* Image side */}
        <div className="image-side">
          <img src={section2img} alt="Example" />
        </div>

        {/* Text side */}
        <div className="text-side">
          <div className="head2">
            <h2>About us</h2>
          </div>
          <p>
            We are suppliers of active ingredients, <br /> final products and
            specialized services <br /> for the pharmaceutical industry.
          </p>
          <a href={<About />}>Get to know us</a>
        </div>
      </div>
      <div className="services">
        <div className="servicepart1">
          <h2>Our services</h2>
          <p>
            We offer a wide range of services and solutions for the <br />
            pharmaceutical industry.
          </p>
        </div>
        <div class="row-container">
          <div class="custom-container">
            <div className="flex">
              <img src={RawItem} alt="Placeholder Image" />
              <h3>Distribution Of raw material</h3>
            </div>
            <p>
              We distribute active ingredients APIs, <br /> Ingredients and
              excipients. We have <br /> the most competitive products with the
              highest quality.
            </p>
            <a href="#" target="_blank">
              Api list
            </a>
          </div>
          {/* container-part complete */}
          <div class="custom-container">
            <div className="flex">
              <img src={Meds} alt="Placeholder Image" />
              <h3>Finished product FDFs</h3>
            </div>
            <p>
              We provide manufacturing and R&D <br /> solutions through top-tier
              CDMOs.
            </p>
            <a href="#" target="_blank">
              FPF list
            </a>
          </div>
          <div class="custom-container">
            <div className="flex">
              <img src={handshake} alt="Placeholder Image" />
              <h3>IN/OUT Licensing</h3>
            </div>
            <p>
              We offer Licensing services for the <br /> expansion of our
              partners and <br /> implementation of your finished <br /> product
              portfolios in the fastest and <br /> most efficient way.
            </p>
            <a href="#" target="_blank">
              FPF list
            </a>
          </div>
        </div>
        {/* link */}
        <div className="single-link">
          <a href="#" target="_blank">
            Learn more
          </a>
        </div>
        {/* back-img-work */}
        <div className="backImg" style={{ backgroundImage: `url(${backimg})` }}>
          <div className="text-cont">
            <h1>Our markets</h1>
            <p>
              We work with our partners at origin to act in broad regions of the{" "}
              <br />
              world from regulated countries to emerging and expanding markets.
            </p>
            <a href="#" target="_blank">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
