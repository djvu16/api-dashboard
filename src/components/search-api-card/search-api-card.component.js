import React from 'react';


//import components
import InputField from '../input-field/input-field.component';
import CustomButton from '../custom-button/custom-button.component';

//import styles
import './search-api-card.styles.scss';


//import Data


const SearchApiCard = (props) => {
    const {api}=props;
    const [{apiName,apiCName,backendIP,port,backendEndPoint,urlReWritingWith,fullBackendUrl,gatewayUrl,consumer,producer,state,description,clientId,clientSecret,isActive,registeredBy}] = api;
    return(
        <div className='search-api-card'>
            <div className="name-div">
                        <InputField 
                            type="text" 
                            name="apiName" 
                            value={apiName}
                            id="apiName"
                            label="API Name"
                            readOnly
                            required />
                        <InputField 
                            type="text" 
                            name="apiCName" 
                            value={apiCName}
                            id="apiCName"
                            label="API Generic Name"
                            readOnly
                            required />
                            <div className="grid-box">
                            <InputField 
                            type="text" 
                            name="consumer" 
                            value={consumer}
                            id="consumer"
                            label="Consumer"
                            readOnly
                            required />
                        <InputField 
                            type="text" 
                            name="producer" 
                            value={producer}
                            id="producer"
                            label="Producer"
                            readOnly
                            required />
                        <InputField 
                            type="text" 
                            name="state" 
                            value={state}
                            id="state"
                            label="State"
                            readOnly
                             />
                        </div>
                        <InputField 
                            type="text" 
                            name="description" 
                            value={description}
                            id="description"
                            label="Description"
                            readOnly
                            />
                    </div>
                    
                    <div className="url-div">
                        <InputField 
                            type="text" 
                            name="backendIP" 
                            value={backendIP}
                            id="backendIP"
                            label="Backend IP"
                            readOnly
                            required />
                        <InputField 
                            type="text" 
                            name="port" 
                            value={port}
                            id="port"
                            label="Port"
                            readOnly
                            required />
                        <InputField 
                            type="text" 
                            name="backendEndPoint" 
                            value={backendEndPoint}
                            id="backendEndPoint"
                            label="Backend Endpoint"
                            readOnly
                            required />
                    </div>
                    <div className="url-verify-div">
                        <InputField 
                            type="text" 
                            name="urlReWritingWith" 
                            value={urlReWritingWith}
                            id="urlReWritingWith"
                            label="URLReWriting With"
                            readOnly
                             />
                        <InputField 
                            type="text" 
                            name="fullBackendUrl"
                            value={fullBackendUrl}
                            id="fullBackendUrl"
                            label="Full Backend Url"
                            readOnly />
                        <InputField 
                            type="text" 
                            name="gatewayUrl" 
                            value={gatewayUrl}
                            id="gatewayUrl"
                            label="Gateway Url"
                            readOnly />
                        <div className="credentials">
                        <InputField 
                            type="text" 
                            name="clientId" 
                            value={clientId}
                            id="clientId"
                            label="Client Id"
                            readOnly
                            required />
                        <InputField 
                            type="text" 
                            name="clientSecret" 
                            value={clientSecret}
                            id="clientSecret"
                            label="Client Secret"
                            readOnly
                            required />
                        
                        <InputField 
                            type="text" 
                            name="isActive" 
                            value={isActive}
                            id="isActive"
                            label="isActive"
                            readOnly
                            required />
                            </div>
                    </div>
                        <div className="reg-div">
                            <InputField 
                                type="text" 
                                name="registeredBy" 
                                value={registeredBy}
                                id="registeredBy"
                                label="Registered By"
                                readOnly
                                required />
                                
                            <div className="btn-container">
                                <CustomButton 
                                    className="btn"
                                    type="button"
                                    value="Modify Details"
                                />
                                <CustomButton 
                                    className="btn"
                                    type="submit"
                                    value="Submit"
                                    disabled
                                />
                            </div>
                        </div>
        </div>
    )
}

export default SearchApiCard;