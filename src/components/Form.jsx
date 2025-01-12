import React from "react"

export default function Form(props) {
    return(
        <div className="field-container">
            <input 
                type='checkbox' 
                id={props.ident} 
                name={props.name} 
                value={props.value} 
                onChange={(e) => props.onChange(props.value, e.target.checked)}
            />
            <label 
                className="field-label" 
                htmlFor={props.ident}> 
                {props.icon && (
                    <img 
                        className="field-icon" 
                        src={props.icon}
                        alt=""
                    />
                )}
                {props.tech}
            </label>
        </div>
    )
}