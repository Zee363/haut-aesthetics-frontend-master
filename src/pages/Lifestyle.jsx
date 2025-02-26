import React from "react";
import "../pages/Lifestyle.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

const Lifestyle = () => {
return (
   <div className="lifestyle-container"> 
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img src="./lifestyle1.webp" alt="A girl and her tulips." className="img-fluid short-image"/>
           <Link to={"/words/0"}><h4>The Year Of BLOOM</h4></Link>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle2.webp" alt="Just sip some tea" className="img-fluid"/>
          <Link to={"/words/1"}><h4>The Words You Speak Become The House You Live In</h4></Link>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle3.webp" alt="You can't go wrong with a stripped shirt." className="img-fluid"/>
           <Link to={"/words/2"}><h4>The Journey Of Connection & Wellness</h4></Link>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle4.webp" alt="Monochrome magic" className="img-fluid"/>
          <Link to={"/words/3"}><h4>Haut Q&A</h4></Link>
          </div>
        </div>
      </div>
    </div> 
  )
};

export default Lifestyle;