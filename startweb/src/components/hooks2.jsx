import React,{useState,useEffect} from "react";
function Hooks2(){
    const[count,setCount]=useState(0);
    const increment=()=>{ 
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    useEffect(()=>{
        console.log("Count value updated:");
    });
    return(
        <div>
            <p>NUMBER:{count}</p>
            <button onClick={increment}>PLUS</button><br/>
            <button onClick={decrement}>MINUS</button>
        </div>
    )

};
export default Hooks2;