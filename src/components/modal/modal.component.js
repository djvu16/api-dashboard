import React from 'react';

//import components
import CustomLabel from '../custom-label/custom-label.component';
import CustomButton from '../custom-button/custom-button.component';

//import styles
import './modal.styles.scss';


const Modal =({api,showModal,setShowModal})=>{
    const {id,apiName,apiCName,backendIP,port,backendEndPoint,urlReWritingWith,fullBackendUrl,gatewayUrl,consumer,producer,state,description,clientId,clientSecret,isActive,registeredBy} = api;

    const handleOkayClick = (event)=>{
        event.preventDefault();
        setShowModal(!showModal);
    }
    return(
        <div className="modal">
            <h2>{apiName}</h2>
            <CustomLabel 
                value={id}
            />
            <CustomLabel 
                value={apiCName}
            />
            <CustomLabel 
                value={backendIP}
            />
            <CustomLabel 
                value={port}
            />
            <CustomLabel 
                value={backendEndPoint}
            />
            <CustomLabel 
                value={urlReWritingWith}
            />
            <CustomLabel 
                value={fullBackendUrl}
            />
            <CustomLabel 
                value={gatewayUrl}
            />
            <CustomLabel 
                value={consumer}
            />
            <CustomLabel 
                value={producer}
            />
            <CustomLabel 
                value={state}
            />
            <CustomLabel 
                value={description}
            />
            <CustomLabel 
                value={clientId}
            />
            <CustomLabel 
                value={clientSecret}
            />
            <CustomLabel 
                value={isActive}
            />
            <CustomLabel 
                value={registeredBy}
            />
            <CustomButton 
                type="button"
                value="Okayish"
                onClick={handleOkayClick}
            />
        </div>
    )
}

export default Modal;