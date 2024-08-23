import React, {Suspense} from "react";
import { Link, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({request}) {
    await requireAuth(request)
    return defer({vans: getHostVans()})
}

export default function HVans(){

    const hostVansPromise = useLoaderData()
    // console.log(vans)
    function renderHostVans(vans){
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
        <div className="host-van-elements">
            {vansElements}
            </div>
    )
}
    return(
        <div className="host-vans">
            <h1>Your listed vans</h1>
            <Suspense fallback={<h3>Loading Vans Data ...</h3>}>
                <Await resolve={hostVansPromise.vans}>
                    {renderHostVans}
                </Await>
            </Suspense>
            
        </div>
        
    )
}


//"/host/vans"