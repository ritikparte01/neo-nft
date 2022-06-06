import React, { useEffect } from "react";

import MyVid3 from "../img/starly.mp4";

import Aos from "aos";
import "aos/dist/aos.css";





function ThirdSlide() {
    
    
    
    useEffect(() => {
        Aos.init({ duration: 1000,delay:200 });
      }, []);

    return (
      <div className='ThirdSlide container d-flex justify-content-center align-items-center'>

      <video width="70%" height="70%" loop muted autoPlay   data-aos="fade-down">
        <source src={MyVid3} type="video/mp4" />
      </video>
    </div>
  );
}

export default ThirdSlide