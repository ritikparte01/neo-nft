import React, { useEffect } from "react";

import "./Home.css";


import Aos from "aos";
import "aos/dist/aos.css";


function Home() {

  
  useEffect(() => {
    Aos.init({ duration: 2000,delay:300 });
  }, []);


  return (
    <div className="container d-flex justify-center align-items-center flex-column text-white home">
      <h1 data-aos="zoom-out-down">
        A New Place To Collect <span>NFT</span> Across The World !
      </h1>
      <p className="py-4 text-center lh-lg" data-aos="zoom-out-down">
        Get started with the easiest and most secure platform to buy and <br />
        trade digital art and NFT's
      </p>
      <button className="btn btn-primary rounded-pill px-4" data-aos="flip-down">Explore Now</button>
      <button  data-aos="flip-left" className="btn text-white py-3">Watch Video</button>
    </div>
  );
}

export default Home;
