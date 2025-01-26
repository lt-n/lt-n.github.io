import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion({title, content}) {

    const [isOpen, setIsOpen] = useState(false);


    return(
        <div>
            <button onClick={()=> setIsOpen(!isOpen)}>{title}</button>
            {isOpen && <div>{content}</div>}
        </div>
    )
}