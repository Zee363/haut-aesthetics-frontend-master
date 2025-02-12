import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pages/Home.css";
import "../pages/Signup.css";
import "../pages/Login.css";

const Home = () => {
    return (
        <div>
        <span className="buttons-container">
             <button className="signup-button">
                        <Link to="/signup">SIGNUP</Link>
                        </button>
                        <button className="login-button">
                           <Link to="/login">LOGIN</Link>
                           </button>
                            </span>

      <div className="grid-container container-fluid">
        <div className="item-image1">
          <img src="./home-pic1.webp" alt="Perfume."  className="img-fluid"/>
        </div>
        <div className="item image2">
          <img src="./home-pic3.webp" alt="A display of fashion."  className="img-fluid"/>
        </div>
        <div className="item name brand-name">
            <h1>
              {" "}
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
            <br />
            <h1>
              
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
            <h1>
              
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
            <h1>
             
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
          </div>
        <div className="item image3">
          <img src="./home-pic2.webp" alt="Clothes." className="img-fluid"/>
        </div>
        <div className="item image4">
          <img src="./home-pic4.webp" alt="A portrait of Ayanda." className="img-fluid" />
        </div>
        <div className="item image5">
          <img src="./home-pic5.webp" alt="Skin care products." className="img-fluid"/>
        </div>
      </div>
      </div>
    );
  };
  
  export default Home;