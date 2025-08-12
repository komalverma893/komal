import React from "react";
import './components.css'
function Child(props){
    return(
        <>
        <h1>hello {props.name} </h1>
        <img src={props.imag} alt={props.extra} class="img"></img>
        <hr/>
        </>
    )
}
export default Child;