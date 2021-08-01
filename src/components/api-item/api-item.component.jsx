import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


//import components
import CustomLabel from "../custom-label/custom-label.component";
import CustomSpan from "../custom-span/custom-span.component";

import './api-item.styles.scss';


const ApiItem = (props) =>{
    const {id,apiName,apiCName,urlReWritingWith,fullBackendUrl,gatewayUrl,consumer,producer,state,description,clientId,clientSecret,isActive,registeredBy} = props;
    
    const [show,setShow]=useState(false);
    const showApiData=()=>{
        setShow(!show);
    }
    return(
        <div className="api-item">
            <div className="api-overview">
                <h3 className="heading">{id}.{apiName}</h3>
                <h4 className="sub-heading">{gatewayUrl}</h4>
                <div className="arrow-down" onClick={showApiData}>
                    <FontAwesomeIcon 
                        icon={faChevronDown}
                    />
                </div>
                <CustomSpan className="item-1" value={apiCName} />
                <CustomSpan className="item-2" value={producer} />
                <CustomSpan className="item-3" value={consumer} />
                <CustomSpan className="item-4" value={isActive} />
                <div className={`${!show ? 'hide-content' : ''}${show ? 'api-cred' : ''}`}>
                    <CustomLabel value="URL Re-Writing"/>
                    <CustomSpan className="item-5" value={urlReWritingWith} />
                    <CustomLabel value="Backend Url"/>
                    <CustomSpan className="item-6" value={fullBackendUrl} />
                    <CustomLabel value="Client Id"/>
                    <CustomSpan className="item-7" value={clientId} />
                    <CustomLabel value="Client Secret"/>
                    <CustomSpan className="item-8" value={clientSecret} />
                    <CustomLabel value="Description"/>
                    <CustomSpan className="item-9" value={description} />
                    <CustomLabel value="State"/>
                    <CustomSpan className="item-10" value={state} />
                    <CustomLabel value="Registered By"/>
                    <CustomSpan className="item-11" value={registeredBy} />
                </div>
            </div>
        </div>
    )
}

export default ApiItem;