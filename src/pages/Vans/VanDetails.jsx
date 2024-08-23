import React, {Suspense} from "react";
import { useParams } from "react-router";
import { Link, useSearchParams, useLocation, useLoaderData,defer,Await} from "react-router-dom";
import { getVansbyID } from "../../api";

// const params = useParams()
export function loader({params}) {
    
    return defer({van: getVansbyID(params.id)})
}
export default function VanDetails(props){
    const location = useLocation()
    const vanDataPromise = useLoaderData()
    // console.log(van)
    
    const search = location.state?.search ||""
    const type = location.state?.type || "all"
    function renderVan(van){
        return(
            <>
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
            </>
        )
    }
    return(
        <div className="van-detail-container">
            
       <Suspense fallback={<h3>Loading Van data...</h3>}>
        <Await resolve={vanDataPromise.van}>
            {renderVan}
        </Await>
       </Suspense>
           
             
        
        </div>
    )
}