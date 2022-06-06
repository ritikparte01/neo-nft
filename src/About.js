

import box1 from "./img/box1.svg";
import box2 from "./img/box2.svg";
import box3 from "./img/box3.svg";


import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


function About() {

    useEffect(() => {
        Aos.init({ duration: 1000,delay:600 });
      }, []);
    

  return (
    <div className="About container">
      <h1 className="about-heading text-center text-white py-3" data-aos="zoom-out-down">
        Let us introduce ourselves
      </h1>

      <div className="container py-5 d-flex justify-content-between align-items-center">
        <div className="box" data-aos="fade-up-right">
          <img className="py-5" src={box1} alt="" />
          <p className="px-4">
            We’re Embacy and we’ve worked with over 100 digital companies from
            27 countries, more than quarter of them are from the crypto space.
          </p>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>

        <div className="box" data-aos="zoom-in-up">
          <img className="py-5" src={box2} alt="" />
          <p className="px-4">
            We’re great at branding, websites, and interfaces — you can see our
            portfolio and reviews from clients.
          </p>
          <a href="#">Behance</a>
          <a href="#">Clutch</a>
        </div>

        <div className="box" data-aos="fade-up-left">
          <img className="py-5" src={box3} alt="" />
          <p className="px-4">
            We structure our team’s work on a project in weekly sprints, so
            clients buy 3 to make simple landing page or 5 to make a great
            branding project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
