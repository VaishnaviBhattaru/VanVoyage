import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="not-found">
        <h1>Sorry, the page you are looking for not found</h1>
        <Link to = ".">Return to home</Link>
        </div>
    )
}