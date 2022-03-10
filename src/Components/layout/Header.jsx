import React ,{useState} from "react";
import logo from "../../logo.svg";
import Topbar from "./Topbar";
import MainHeader from "./MainHeader";

const Header=(props)=>{

    return(
        <header id="header">
            <Topbar />
            <MainHeader />
        </header>
    )
}

export default Header;
