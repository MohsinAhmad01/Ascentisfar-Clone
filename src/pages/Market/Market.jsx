import "./Market.css";
import world from "../../assets/world.jpg";
const Market = () => {
  return (
    <>
      <div className="Market">
        <div className="center">
          <h1>We are a global company</h1>
        </div>
        <div className="world">
          <img src={world} alt="" />
        </div>
        <div className="paragraphs">
          <p>Our main offices are located in Madrid, Spain.</p>
          <p className="para2">
            We operate in regulated, emerging and expanding markets, such as{" "}
            <br /> EU, CIS, LATAM, MENA, China, India and Vietnam.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Market;
