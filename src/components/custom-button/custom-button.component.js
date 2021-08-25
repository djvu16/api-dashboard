import React from 'react';


//import components


//import scss
import './custom-button.styles.scss';

const CustomButton = (props) =>{
    const {className,type,value,onClick,...otherProps}= props;
    return(
        
        <div className="custom-btn">
            <button type={type} className="btn" onClick={onClick ? onClick : null} {...otherProps}>
            {props.children}
            </button>
        </div>
    )
}

export default CustomButton;