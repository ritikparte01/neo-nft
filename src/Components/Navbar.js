import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="container d-flex justify-content-between align-items-center pt-3">
            <div className="logo">
                <h1><span className='fw-bold fst-italic'>Neo</span>NFT</h1>
            </div>
            <div className="menu">
                <ul className='d-flex justify-content-between align-items-center mt-3'>
                    <li><a href="#" className='active'>Home</a></li>
                    <li><a href="#">MarketPlace</a></li>
                    <li><a href="#">My Collection</a></li>
                    <li><a href="#">Sellers</a></li>
                </ul>
            </div>
            <div className="wallet">
                <button className="btn rounded-pill">Connect Wallet</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar