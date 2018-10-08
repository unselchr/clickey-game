import React from "react";
import "./picture.css";

const picture= props=>(
    <div data-id={props.id} data-order={props.order} className="card" onClick={()=>props.clickHandler(props.id)}>
        <img alt="" src={props.image}/>
    </div>
)
export default picture;