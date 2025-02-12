import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Beauty.css";

const Beauty = () => {
  return (
    <div className="beauty-container">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img src="./beauty1.webp" alt="Face wash demonstration." />
          <h3>Skin Health Is The Future</h3>
        </div>
        <div class="col-sm-6">
          <img src="./beauty2.webp" alt="Ayanda" className="short-image img-fluid" />
          <h3>In My Skin With Skin Creamery</h3>
        </div>
        <div class="col-sm-6">
          <img src="./beauty3.webp" alt="Moisturizer" />
          <h3>Get Ready to Get Hydrated W/Kind</h3>
        </div>
        <div class="col-sm-6">
          <img src="./beauty4.webp" alt="Botanical balm" />
          <h3>The SOS Treatment You Need</h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Beauty;