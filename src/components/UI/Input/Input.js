import React from "react";

import classes from "./Input.module.css";

// {...props.input} = this passes the attributes to an input. like type="text" id="..." etc.

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input}/> 
        </div>
    );
});

export default Input;