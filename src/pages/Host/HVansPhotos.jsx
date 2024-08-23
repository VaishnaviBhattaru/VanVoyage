import React from "react";
import { useOutletContext } from "react-router";

export default function HvansPhotos(){
    const { van } = useOutletContext()
    return(
        <img src={van.imageUrl} className="host-van-detail-image" />
    )
}