import React  from "react";


const SocialLinks=(props)=>{

    return(
        <li><a href={props.url}><i className={props.icon}></i> </a></li>
    )
}

export default SocialLinks;



