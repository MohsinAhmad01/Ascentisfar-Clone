import React from "react";
import fimag1 from "../../assets/cont-1.png";
import fimag2 from "../../assets/cont-2.png";
import fimag3 from "../../assets/cont-3.png";
import fimag4 from "../../assets/DNA.png";
import fimag5 from "../../assets/stamp.png";
import fimag6 from "../../assets/stamp-paper.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="main">
      <div className="section1">
        <div class="service-box">
          <h2>Our Proposal</h2>
          <p>
            We offer a wide range of services and solutions for the
            pharmaceutical industry.
          </p>
        </div>
      </div>
      {/* flex-part */}
      <div class="flex-service">
        <div class="service-box1">
          <div class="imgmission">
            <img src={fimag1} alt="Mission" />
            <h2>Distribution of raw materials</h2>
          </div>
          <p>
            We distribute active ingredients APIs, Ingredients and excipients.
            We have the most competitive products with the highest quality.
          </p>
        </div>

        <div class="service-box1">
          <div class="imgmission">
            <img src={fimag2} alt="Mission" />
            <h2>Finished product FDFs</h2>
          </div>
          <p>
            We provide manufacturing and R&D solutions through top-tier CDMOs.
          </p>
        </div>

        <div class="service-box1">
          <div class="imgmission">
            <img src={fimag3} alt="Mission" />
            <h2>IN/OUT Licensing</h2>
          </div>
          <p>
            We offer Licensing services for the expansion of our partners and
            implementation of your finished product portfolios in the fastest
            and most efficient way.
          </p>
        </div>
        <div class="service-box1">
          <div class="imgmission">
            <img src={fimag4} alt="Mission" />
            <h2>API and FDF development</h2>
          </div>
          <p>
            We work closely with our customers and manufacturers to develop
            active ingredients and medicines that meet the needs of the market.
          </p>
        </div>
        <div class="service-box1">
          <div class="imgmission">
            <img src={fimag5} alt="Mission" />
            <h2>Accreditation services and GMP Audits</h2>
          </div>
          <p>
            We provide GMP audit services to guarantee accreditation of European
            regulations in terms of quality.
          </p>
        </div>
        <div class="service-box1">
          <div class="imgmission">
            <img src={fimag6} alt="Mission" />
            <h2>Technical consulting and regulatory support</h2>
          </div>
          <p>
            We offer complete regulatory support to entities without local
            representation for audit of their dossiers, presentation of their
            products to the authorities and obtaining MAs.
          </p>
        </div>
      </div>
      <div class="service-box2">
        <div class="imgmission">
          <img src={fimag6} alt="Mission" />
          <h2>Technical consulting and regulatory support</h2>
        </div>
        <p>
          We offer complete regulatory support to entities without local
          representation for audit of their dossiers, presentation of their
          products to the authorities and obtaining MAs.
        </p>
      </div>
    </div>
  );
};

export default Services;
