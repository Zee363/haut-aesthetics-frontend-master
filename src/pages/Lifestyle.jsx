import React from "react";
import "../pages/Lifestyle.css";


const Lifestyle = () => {
  return (
   <div className="lifestyle-container"> 
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img src="./lifestyle1.webp" alt="A girl and her tulips." className="img-fluid short-image"/>
            <h4>The Year Of BLOOM</h4>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle2.webp" alt="Just sip some tea" className="img-fluid"/>
            <h4>The Words You Speak Become The House You Live In</h4>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle3.webp" alt="You can't go wrong with a stripped shirt." className="img-fluid"/>
            <h4>The Journey Of Connection & Wellness</h4>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle4.webp" alt="Monochrome magic" className="img-fluid"/>
            <h4>Haut Q&A</h4>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Lifestyle;