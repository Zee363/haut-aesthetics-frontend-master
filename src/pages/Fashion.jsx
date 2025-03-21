import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Fashion.css";
import { Link } from "react-router-dom";

const Fashion = () => {
  return (
    <div className="fashion-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img src="./fashion1.webp" alt="Chic style" className="img-fluid"/>
           <Link to={"/honey/0"}><h4>The Fig & Honey Edit</h4></Link>
          </div>
          <div class="col-sm-6">
            <img src="./fashion2.webp" alt="Country style" className="img-fluid shorter-image"/>
           <Link to={"/honey/1"}><h4>DISSH - The Minimalistic Brand Worth The Hype</h4></Link>
          </div>
          <div class="col-sm-6">
            <img src="./fashion3.webp" alt="Pretty Yellow Dress" className="img-fluid"/>
            <Link to={"/honey/2"}><h4>Spring Dressing With Poetry</h4></Link>
          </div>
          <div class="col-sm-6">
            <img src="./fashion4.webp" alt="Laid back style" className="img-fluid short-image"/>
           <Link to={"/honey/3"}><h4>Pre-loved Styling Edit</h4></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;