import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


//import components
import CustomLabel from "../custom-label/custom-label.component";
import CustomSpan from "../custom-span/custom-span.component";

import './api-item.styles.scss';
import { Link } from "react-router-dom";


const ApiItem = (props) =>{
    const {id, apiName,apiCName,urlReWritingWith,fullBackendUrl,gatewayUrl,consumer,producer,state,description,clientId,clientSecret,isActive,registeredBy,viewPerfBtn} = props;
    
    const [show,setShow]=useState(false);
    const showApiData=()=>{
        setShow(!show);
    }
    return(
        <div className="api-item">
            <div className="head">
            <h3 className="heading">{apiName}</h3>
            <h4 className="sub-heading">{gatewayUrl}</h4>
            </div>
            <div className="api-overview">
                <div>
                <CustomLabel value="Api C Name"/>
                <CustomSpan className="item-1" value={apiCName} />
                </div>
                <div>
                <CustomLabel value="Producer"/>
                <CustomSpan className="item-2" value={producer} />
                </div>
                <div>
                <CustomLabel value="Consumer"/>
                <CustomSpan className="item-3" value={consumer} />
                </div>
                <div>
                <CustomLabel value="is Active"/>
                <CustomSpan className="item-4" value={isActive} />
                </div>
            </div>
            <div className="arrow-down-content" >
                <div className="arrow-down" onClick={showApiData}>
                    <FontAwesomeIcon 
                        icon={faChevronDown}
                    />
                </div>
                <div className={`${!show ? 'hide-content' : ''}${show ? 'api-cred' : ''}`}>
                    <div>
                    <CustomLabel value="URL Re-Writing"/>
                    <CustomSpan className="item-5" value={urlReWritingWith} />
                    </div>
                    <div>
                    <CustomLabel value="Backend Url"/>
                    <CustomSpan className="item-6" value={fullBackendUrl} />
                    </div>
                    <div>
                    <CustomLabel value="Client Id"/>
                    <CustomSpan className="item-7" value={clientId} />
                    </div>
                    <div>
                    <CustomLabel value="Client Secret"/>
                    <CustomSpan className="item-8" value={clientSecret} />
                    </div>
                    <div>
                    <CustomLabel value="Description"/>
                    <CustomSpan className="item-9" value={description} />
                    </div>
                    <div>
                    <CustomLabel value="State"/>
                    <CustomSpan className="item-10" value={state} />
                    </div>
                    <div>
                    <CustomLabel value="Registered By"/>
                    <CustomSpan className="item-11" value={registeredBy} />
                    </div>
                    <div>
                        {
                            viewPerfBtn ? <Link to={`/search/${id}`}>View Details</Link> : null

                        }
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default ApiItem;