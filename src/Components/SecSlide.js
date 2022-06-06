import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import MyVid2 from '../img/slide2.mp4'

function SecSlide() {

    useEffect(() => {
        Aos.init({ duration: 1000,delay:600 });
      }, []);
    


  return (
    <div className='SecSlide container-fluid mt-5 pt-5'>
        <h1 data-aos="fade-down" className='text-white'>We've minted 35 NFTs, each equals to a week of our work</h1>
        <video width="100%" height="100%" loop muted autoPlay   data-aos="zoom-in-up">
        <source src={MyVid2} type="video/mp4" />
      </video>

    </div>
  )
}

export default SecSlide