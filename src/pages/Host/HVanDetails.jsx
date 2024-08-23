import React, {Suspense} from "react";
// import { useParams } from "react-router";
import { Link, Outlet, NavLink, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVansbyID } from "../../api";
import { requireAuth } from "../../utils";



export async function loader({params, request}) {
    await requireAuth(request)
    return defer({van: getHostVansbyID(params.id)})
}
export default function HVanDetails(){
   
    const HostVanPromise = useLoaderData()
    
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"}

    function renderHostVan(van){
        return(
            <>
             <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
       
            
            
                <div className="host-van-details">
                    <img src={van.imageUrl} alt="" />
                    <div className="host-van-dinfo">
                    <i className={van.type}>{(van.type)}</i>
                        <h2>{van.name}</h2>
                        <p>${van.price}<span>/day</span></p>
                        </div>
                
                    
                </div>
                
            <nav className="host-van-detail-nav">
               <NavLink to="." 
                end 
                style={({isActive}) => isActive ? activeStyle : null }>
                Details</NavLink> 
                <NavLink to="pricing" 
                style={({isActive}) => isActive ? activeStyle : null }>
                Pricing</NavLink> 

                <NavLink to="photos" 
                style={({isActive}) => isActive ? activeStyle : null }>
                Photos</NavLink> 

            </nav>
        <Outlet context={{van}}/>
            </>
        )
    }
    return(
        <>
          <div className="host-van-container">
       <Suspense fallback={<h3>Loading van Data...</h3>}>
        <Await resolve={HostVanPromise.van}>
            {renderHostVan}
        </Await>
       </Suspense>
        </div> 
    
        </>
    )
}