import React,{Suspense} from 'react'
import { Link, useSearchParams, useLoaderData, Await, defer} from "react-router-dom";
import { getVans } from '../../api';

export function loader() {
    return defer({ vans: getVans() })
}
function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
function Content(props){
    return(
        <div key={props.id} className='vans-content'>
            <Link 
            to={props.id} 
            state={{ 
                search: `?${props.searchParams.toString()}`, 
                type: props.typeFilter 
            }}
            aria-label={`View details for ${props.name}, priced at $${props.price} per day`}>
            <img src={props.img} alt="Van image" />
            <div className='vans-content1'>
                <div className='vans-content2'>
                    <h2>{props.name}</h2>
                    <i className={props.type}>{Capitalize(props.type)}</i>
                </div>
                <div className='vans-content3'><span className=''>${props.price}</span> <br /> <p>/day</p></div>
            </div>
            </Link>
        </div>
    )
}

export default function Vans(){

    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    // console.log(typeFilter)
    const dataPromise = useLoaderData()

    function renderVanElements(vans){
        const displayVans = typeFilter? vans.filter(char => char.type.toLowerCase()=== typeFilter): vans
        const vanContent = displayVans.map(item=>{
        // console.log(item)
        return(
            
            <Content
                img = {item.imageUrl}
                name = {item.name}
                type = {item.type}
                price = {item.price}
                id = {item.id}
                searchParams = {searchParams}
                typeFilter = {typeFilter}
            />
       ) })
       return(
        <>
        <div className='vans-main-links'>
        <div className='vans-main-link'>
        <button onClick={() =>setSearchParams({type: "simple"})} className='simple'>Simple</button>
        <button onClick={() =>setSearchParams({type: "rugged"})} className='rugged'>Rugged</button>
        <button onClick={() =>setSearchParams({type: "luxury"})} className='luxury'>Luxury</button>
        </div>
        {typeFilter&& <button onClick={()=>setSearchParams({})}>Clear filters</button>}
        </div>
        <div className='vans'>
        {vanContent}
        </div>
        </>
       )
    }
   
   
    return(
        <div className='vans-main'>
        <h1>Explore our van options</h1>
        <Suspense fallback={<h3>Loading ... </h3>}>
        <Await resolve={dataPromise.vans}>
            {renderVanElements}
        </Await>
        </Suspense>
        </div>
    )
}