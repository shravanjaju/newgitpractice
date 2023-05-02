import React from "react";
import { useState} from "react";
import './useFetch.css'

export default function Fetchd(){
    const[image,setImage]=useState("https://dog.ceo/api/breeds/image/random")

   async function refreshData(){
    try{
        const response =await fetch("https://dog.ceo/api/breeds/image/random")
        const data=await response.json()
        setImage(data.message)

    }
    catch(error){
        console.log(error)}
    }
    return(
        <div className="btnclass">
            <img
                src={image}
                height={"500px"}
                width={"500px"}
                alt="img"/><br></br><br></br>
            <button onClick={refreshData}>Refresh</button>
                </div>
    )

}