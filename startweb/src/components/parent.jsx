import React from "react";
import './components.css'
import Child from "./child.jsx";
import login from "../assets/lovebird.jpg"
function Parent(){
    return(
        <>
        <div>
        <h2>welcome to the page</h2>
        <Child name="john" imag={login} extra="logo"/>
         <Child name="siya" imag={login} extra="logo"/>
         <Child name="Diya" imag="https://th.bing.com/th/id/OIP.gASMlPqsrIt_9q8Y76PZKgHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" extra="logo"/>
<Child name="priya" imag="https://th.bing.com/th/id/R.124a1db7be2c13d936d8a71bd43ffd5f?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0" extra="nature"></Child>
        </div>
        </>
    )
}
export default Parent;