import React ,{useState} from "react";
import Logo from "../logo/Logo";
import Search from "../Search/Searech";
import CartDropdown from "../Cart/CartDropdown";
import UserDropdown from "../UserDropdown/UserDropdown"
import Nav from "../Navigation/Nav";


const MainHeader=(props)=>{

    return(
        <div className="container">
            <a href="#" className="nav-opener"><i className="fal fa-bars"></i> </a>
            <Logo />
            <div className="header-right">
                <UserDropdown />
                <CartDropdown />
                <Search item="search-active"/>
            </div>
            <Nav />
        </div>

    )
}

export default MainHeader;
