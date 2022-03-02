import React from "react";

const Field=(props)=>{
    return(
        <div className="form-group mb-3">
            <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
                name={props.value}
                required={props.required}
            />
        </div>
    )
}

export default Field;
