import React from 'react';

//import components

//import styles
import './custom-backdrop.styles.scss';

const CustomBackdrop=(props)=>{
    const {currentStatus} =props;
    console.log(currentStatus);
    return(
        <div className={`backdrop ${currentStatus ? 'activate' : null }`}></div>
    )
}

export default CustomBackdrop;