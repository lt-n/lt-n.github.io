import React, { useState } from "react"

import "./State.css"


export function State() {

    const [menu, setMenu] = useState(true);

    return (
        <div>
            <div>
                <button onClick={()=> setMenu(!menu)}>label</button>
                {menu ? <div>menu-open</div> : <div>menu-close</div>}
            </div>
        </div>
    )
}

export function TemplateLiteral() {
    const [menu, setMenu] = useState(false);

    return (
        <div>
            <div>
                <button onClick={()=> setMenu(!menu)}>Menu</button>
            </div>
            
            <nav>
                <div className={`menu ${menu ? "open" : "close"}`}>

                </div>
            </nav>
        </div>
    )
}