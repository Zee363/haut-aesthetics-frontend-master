import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/About.css";

const About = () => {
  return (
    <div className="about-container container-fluid">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <img src="./about1.webp" alt="Ayanda in monochrome jersey" className="img-fluid"/>
            <p>The Haut Aesthetics was founded in 2017 by Ayanda Adams. The blog is a perfect creation in showcasing all things that the founder stands for including fashion, style, lifestyle, skincare, and beauty. The blog is aimed at empowering, inspiring and sharing through personal surroundings, styles and authenticity.</p>
            <p>Featuring personal style, lifestyle topics and the everyday life. It’s about choosing clean, minimal (with a hint of colour), timeless, sustainable pieces to get you through each season and challenges the preconceptions of what you can and can’t wear.</p>
            <img src="./about2.webp" alt="Ayanda in a coat" className="img-fluid" />
            <p>Ayanda is an influential tastemaker on the web who has collaborated with brands like Esteè Lauder, Woolworths, Poetry, Dissh, Lelive, Goodleaf, Kiko Vitals, Charlotte Rhys, Skin Creamery, Standard Beauty, Swiitch Beauty, Bonheur, Suki Suki Naturals, and more! She is also one of the #IconicWomen for Iconography</p>
            </div>
            </div>
        </div>
    </div>
  )
};

export default About; 