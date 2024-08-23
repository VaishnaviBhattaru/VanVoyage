import React from "react";
// import { useParams } from "react-router";
import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVansbyID } from "../../api";
import { requireAuth } from "../../utils";


export async function loader({params, request}) {
    await requireAuth(request)
    return getHostVansbyID(params.id)
}
export default function HVanDetails(){
   
    const van = useLoaderData()
    console.log(van)
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"}
    return(
        <>
          <div className="host-van-container">
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
        </div> 
    
        </>
    )
}