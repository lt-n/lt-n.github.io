import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div>
            <button className="mob-menu-btn" onClick={()=> setMenu(!menu)}>Click me</button>
            <nav>
                <ul className={`mob-menu ${menu ? "open" : "close"}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}