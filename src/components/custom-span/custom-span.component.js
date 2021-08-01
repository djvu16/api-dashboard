import React from "react";

//import components

//import styles
import './custom-span.styles.scss';

const CustomSpan = (props) => {
    const {id,value} = props;
    return(
        <div className="custom-span">
            <span id={id} >{value}</span>
        </div>
    )
}
    

export default CustomSpan;