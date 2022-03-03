import React from "react";

const Field=(props)=>{


    return(

            <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
                name={props.value}
                required={props.required}
            />

    )
}

export default Field;
