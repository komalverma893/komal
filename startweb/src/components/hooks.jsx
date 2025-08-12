import React,{useState} from "react";
function Hooks(){
    const[Count,SetCount]=useState(0);
    const increment=()=>{
        SetCount(Count+1);
    };
    const decrement=()=>{
        
SetCount(Count-1);
    };

    return(
        <>
<div>
<p>count:{Count}</p>
<button onClick={decrement}>minus</button>
<button onClick={increment}>plus</button>
</div>
</>
    );
};
export default Hooks;