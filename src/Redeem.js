import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Redeem() {

    useEffect(() => {
        Aos.init({ duration: 1000,delay:200 });
      }, []);
    

  return (
    <div className='Redeem container text-white'>
        <h1 className='heading' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"   data-aos-delay="500" >You can redeem Embacy<br/> Coins for:</h1>
        <div className="split">
            <div className="website">
                <h1 className='g-text' data-aos="flip-left">Website</h1>
                <h4>from 2 to 8 Emb</h4>
            </div>

            <div className="branding">
                <h1 className='g-text' data-aos="flip-left">Branding</h1>
                <h4>from 4 to 6 Emb</h4>
            </div>

            <div className="interface">
                <h1 className='g-text' data-aos="flip-left">Interface</h1>
                <h4>from 4 Emb</h4>
            </div>

        </div>
    </div>
  )
}

export default Redeem