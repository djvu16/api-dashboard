import React from "react";

//import styles
import "./input-field.styles.scss"

//import components

const InputField =(props)=>{
    const {handleChange,label,type,...otherFormInputProps}=props;
    // console.log(handleChange,label,type,otherFormInputProps);
    return(
        <div className="form-input">
            <input type={type} className={`${type} input-field`} onChange={handleChange} {...otherFormInputProps} />
            {
            label ?
            <label className={`${otherFormInputProps.value.length ? 'shrink' : '' } label`}>{label}</label> : null
        }  
        </div>
    )
}

export default InputField;