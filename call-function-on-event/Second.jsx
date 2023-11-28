import React from "react";
function Second({name,title}){
    function clickMe(){
        alert("hello")
    }
    return(
        <div>
            {name} {title} <br />
            <button onClick={clickMe}>Click here</button> <br />
            <button onClick={()=>clickMe()}>Click here</button>
        </div>
    );
}
export default Second;