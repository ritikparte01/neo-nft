import React, { useEffect } from "react";

import MyVideo from "../img/hero.mp4";

import Aos from "aos";
import "aos/dist/aos.css";


function FristSlide() {


    useEffect(() => {
        Aos.init({ duration: 1000,delay:200 });
      }, []);

  return (
    <div className="FirstSlide d-flex justify-content-center align-items-center">
      <video width="70%" height="70%" loop muted autoPlay   data-aos="zoom-in-up">
        <source src={MyVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default FristSlide;
