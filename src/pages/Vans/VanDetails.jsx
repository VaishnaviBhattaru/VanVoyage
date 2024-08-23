import React from "react";
import { useParams } from "react-router";
import { Link, useSearchParams, useLocation, useLoaderData} from "react-router-dom";
import { getVansbyID } from "../../api";

// const params = useParams()
export function loader({params}) {
    
    return getVansbyID(params.id)
}
export default function VanDetails(props){
    const location = useLocation()
    const van = useLoaderData()
    // console.log(van)
    
    const search = location.state?.search ||""
    const type = location.state?.type || "all"

    return(
        <div className="van-detail-container">
            
       
           
            <div className="van-detail">
                 <Link
                to= {`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            <img src= {van.imageUrl}alt="Vehicle image" />
            <div className="van-type">
            <i className={van.type}>{(van.type)}</i>
            </div>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>

        </div> 
        
        </div>
    )
}