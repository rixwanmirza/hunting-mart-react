import React  from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";




const Nav=(props)=>{
    return(
        <nav id="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/hunting">Hunting</Link>
                </li>
                <li>
                    <Link to="/shooting">Shooting</Link>
                </li>
                <li>
                    <Link to="/clothing">Clothing</Link>
                </li>
                <li>
                    <Link to="/footwear">Footwear</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </nav>


    )
}

export default Nav;
