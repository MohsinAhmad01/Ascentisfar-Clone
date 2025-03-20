import React from "react";
import "./Integredents.css";

const Integredents = () => {
  return (
    <>
      <div className="main">
        <div className="top">
          <div className="integ-box">
            <h1>Active ingredients</h1>
            <a href="#">See / download API list</a>
          </div>
        </div>
        <div className="integ-sec">
          <div className="content">
            <div className="flex">
              <p>
                <b>+</b> <span>A-B-C-D</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>E-F-G-H</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>I-J-K-L</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>M-N-O-P</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>Q-R-S-T</span>
              </p>
              <hr />
              <p>
                <b>+</b> <span>U-V-W-X-Y-Z</span>
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integredents;
