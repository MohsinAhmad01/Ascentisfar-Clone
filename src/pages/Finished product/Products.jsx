import React from "react";
import "./Products.css";
const Products = () => {
  return (
    <>
      <div className="main">
        <div className="top">
          <div className="integ-box">
            <h1>Finished Product Distribution & Licensing</h1>
            <a href="#">See / download API list</a>
          </div>
        </div>
        <div className="integ-sec">
          <div className="content">
            <h2 className="hospi">FDF Hospitalary Use</h2>
            <div className="flex">
              <p>
                <b>+</b> <span>A-B-C-D</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>F-G-I</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>P-T</span>
              </p>
            </div>
            <h2 className="hospi">FDF Generics</h2>
            <div className="flex">
              <p>
                <b>+</b> <span>A-B-C-D</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>E-I-L-M</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>O-P-Q</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>R-S-T-V</span>
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products; // Default export
