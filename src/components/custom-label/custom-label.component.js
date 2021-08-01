import React from 'react';


//import component

//import styles
import './custom-label.styles.scss';

const CustomLabel= (props) => {
    const {value,className} = props;
    return(
        <div className={`custom-label ${className}`}>
            <label>{value}</label>
        </div>
    )
}

export default CustomLabel;