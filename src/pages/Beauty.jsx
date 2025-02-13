import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Beauty.css";
import { Link } from "react-router-dom";

const Beauty = () => {
  return (
    <div className="beauty-container">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img src="./beauty1.webp" alt="Face wash demonstration." className="img-fluid" />
         <Link to={"/health/0"}><h3>Skin Health Is The Future</h3></Link>
        </div>
        <div class="col-sm-6">
          <img src="./beauty2.webp" alt="Ayanda" className="short-image img-fluid" />
          <Link to={"/health/1"}><h3>In My Skin With Skin Creamery</h3></Link>
        </div>
        <div class="col-sm-6">
          <img src="./beauty3.webp" alt="Moisturizer" className="big-image img-fluid" />
          <Link to={"/health/2"}><h3>Get Ready to Get Hydrated W/Kind</h3></Link>
        </div>
        <div class="col-sm-6">
          <img src="./beauty4.webp" alt="Botanical balm"  className="img-fluid"/>
          <Link to={"/3"}><h3>The SOS Treatment You Need</h3></Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Beauty;