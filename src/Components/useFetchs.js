import React from "react";
import './useFetch.css'

export default function Fetchdata(){
    fetch('https://reqres.in/api/users/')
    .then(response=>{
        if(!response.ok){
            throw Error("Error")}
            return response.json()
    })
    .then(data=>{
        console.log(data.data)
        const html=data.data.map(user=>{
            return `
                <div class="user">

                <p> <img src="${user.avatar}" alt="${user.first_name}"/> </p>
                <p>Name: ${user.first_name}</p>
                <p>Last Name: ${user.last_name}</p>
                <p>Email: ${user.email}</p>
                    </div>`
        })
        // console.log(html)
        document.querySelector("#app").insertAdjacentHTML("afterbegin",html)
    })
    .catch(error=>{
        console.log(error)
    })
}