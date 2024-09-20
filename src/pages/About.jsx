import React from 'react'

import { Link } from 'react-router-dom'

export default function About(){
    return(
        <>
       
        <div className='about'>
        <div className='about-img'>
        {/* <img src="about-bg.png" alt="person on van" /> */}
       
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</p>
        </div>
        <div className='about-container'>
        <div className='container-text'><p>Your destination is waiting.</p>
        <p>Your van is ready.</p>
        </div>
        <Link to="/vans">Explore our vans</Link>
        </div>
        </div>
        
        </>
    )
}