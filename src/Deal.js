import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


import MyVid4 from "./img/eth.mp4";

function Deal() {


    
    useEffect(() => {
        Aos.init({ duration: 1000,delay:400 });
      }, []);
    

  return (
    <div className='Deal container d-flex justify-content-center align-items-center'>


        <video width="50%" height="50%" loop muted autoPlay   data-aos="fade-up">
        <source src={MyVid4} type="video/mp4" />
      </video>
        <h1 data-aos="fade-down" className='text-white heading'>And it's a good deal</h1>
        <h4 className='text-white'>Typically our sprints cost between $3.5k-$4.5k, but our coins cost exactly 1 ETH, which results in a decent discount!
We want to give</h4>

    </div>
  )
}

export default Deal