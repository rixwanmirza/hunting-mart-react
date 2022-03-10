import React  from "react";
import SocialIcon from "./SocialIcons/SocialIcon";

const SocialLinks=(props)=>{

    return(
        <ul className="social-links">
            <SocialIcon url="abc.com" icon="fab fa-facebook-f"/>
            <SocialIcon url="abc.com" icon="fab fa-twitter"/>
            <SocialIcon url="abc.com" icon="fab fa-whatsapp"/>
            <SocialIcon url="abc.com" icon="fab fa-instagram"/>
            <SocialIcon url="abc.com" icon="fab fa-youtube"/>
        </ul>

    )
}

export default SocialLinks;
