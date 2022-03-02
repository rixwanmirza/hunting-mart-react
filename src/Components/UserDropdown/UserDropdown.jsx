import React,{useEffect, useState} from "react";

const UserDropdown=(props)=>{
    const [activedropdown, setactivedropdown] = useState(false);
    const handleToggle=() => {
        setactivedropdown(!activedropdown);
    };

    return(
        <div className={`user-btn ${activedropdown ? "show" : ""}`}>
            <button className="btn" type="button" onClick={handleToggle}>
                <i className="fal fa-user-circle"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    )
}

export default UserDropdown;
