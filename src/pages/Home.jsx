import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        
        <div className='home'>
            <div>
            <h1>VanVoyage</h1>
            <p>Your journey starts with the right van. Rent the perfect van to make your perfect road trip.</p>
            </div>
            <Link to="/vans">Find your van</Link>
        </div>
      
        </>
    )
}