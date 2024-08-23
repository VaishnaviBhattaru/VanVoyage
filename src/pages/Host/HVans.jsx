import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({request}) {
    await requireAuth(request)
    return getHostVans()
    return null
}

export default function HVans(){

    const vans = useLoaderData()
    // console.log(vans)
    const vansElements = vans.map(van =>(
        <>
        <Link 
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van">
                <img src={van.imageUrl} alt="Van Image" />
                <div className="host-van-info">
                    <h2>{van.name}</h2>
                    <p>${van.price}<span>/day</span></p>
                </div>
                
            </div>
            
        </Link>
        </>
    ))
    return(
        <div className="host-vans">
            <h1>Your listed vans</h1>
            <div className="host-van-elements">
            {vansElements}
            </div>
            
        </div>
        
    )
}


//"/host/vans"