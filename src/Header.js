import { Link } from "react-router-dom";
import React, { useState } from "react";

import './Header.css';

export default function Header() {

    const [expand, setExpand] = useState(false);



    return (
        <header style={{maxWidth:"70% : setExpand(!expand)"}}>
            <div className="header-container">
                <div className="header-logo">
                    <h2 onClick={()=> setExpand(!expand)}>
                        lt-n
                    </h2>
                </div>
                <nav>
                    <div className="nav-container">
                        
                        {expand && 
                        <div className="nav-links">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="portfolio">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}