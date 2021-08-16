import React,{Component} from "react";
import {connect} from 'react-redux';
import {postSaveNewApi} from '../../redux/action/api-action-api'; 

//import styles
import "./api-detail.styles.scss";

//import components
import InputField from "../../components/input-field/input-field.component";
import SideMenuBar from "../../components/side-menu-bar/side-menu-bar.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {apiActionType} from '../../redux/actionType';
//import apiDetails from "./integrationDetails";


class ApiDetailPage extends Component{
    constructor(){
        super();

        this.state={
                apiName:'',
                apiCName:'',
                backendIP:'',
                port:'',
                backendEndPoint:'',
                urlReWritingWith:'',
                fullBackendUrl:'',
                gatewayUrl:'',
                consumer:'',
                producer:'',
                state:'',
                description:'',
                clientId:'',
                clientSecret:'',
                isActive:'',
                registeredBy:''
        }
    }

    resetAllFields = (state) =>{
        
    }

    handleChange=(event)=>{
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({[name]:value});
        //handle the readOnly fields
        this.setState({fullBackendUrl:`https://${this.state.backendIP}:${this.state.port}${this.state.backendEndPoint}`});
        this.setState({gatewayUrl:`https://gatewayDomainName${this.state.urlReWritingWith}${this.state.backendEndPoint}`});
    }

    handleSubmit=(event)=>{ 
        event.preventDefault();
        const apiItemDtls={
            apiName:this.state.apiName,
            apiCName:this.state.apiCName,
            backendIP:this.state.backendIP,
            port:this.state.port,
            backendEndPoint:this.state.backendEndPoint,
            urlReWritingWith:this.state.urlReWritingWith,
            fullBackendUrl:this.state.fullBackendUrl,
            gatewayUrl:this.state.gatewayUrl,
            consumer:this.state.consumer,
            producer:this.state.producer,
            state:this.state.state,
            description:this.state.description,
            clientId:this.state.clientId,
            clientSecret:this.state.clientSecret,
            isActive:this.state.isActive,
            registeredBy:this.state.registeredBy
        }
        /* this.props.addApiToList(apiItemDtls); */
        postSaveNewApi(apiItemDtls)
        .then(data=>{
            console.log(data);
            alert(data.message);
            this.setState({
                apiName:'',
                apiCName:'',
                backendIP:'',
                port:'',
                backendEndPoint:'',
                urlReWritingWith:'',
                fullBackendUrl:'',
                gatewayUrl:'',
                consumer:'',
                producer:'',
                state:'',
                description:'',
                clientId:'',
                clientSecret:'',
                isActive:'',
                registeredBy:''
            });
        })
        .catch(err=>{
            alert(err);
            this.setState({
                apiName:'',
                apiCName:'',
                backendIP:'',
                port:'',
                backendEndPoint:'',
                urlReWritingWith:'',
                fullBackendUrl:'',
                gatewayUrl:'',
                consumer:'',
                producer:'',
                state:'',
                description:'',
                clientId:'',
                clientSecret:'',
                isActive:'',
                registeredBy:''
            });
        });
    }

    render(){

        const {apiName,apiCName,backendIP,port,backendEndPoint,urlReWritingWith,fullBackendUrl,gatewayUrl,consumer,producer,state,description,clientId,clientSecret,isActive,registeredBy} =this.state;

    return(
        <div className="api-detail">
            <SideMenuBar />
            <div className="container">
            <div className='content-box'>
                <form type="submit" onSubmit={this.handleSubmit}>
                    <div className="name-div">
                        <InputField 
                            type="text" 
                            name="apiName" 
                            value={apiName}
                            id="apiName"
                            label="API Name"
                            onChange={this.handleChange}
                            required />
                        <InputField 
                            type="text" 
                            name="apiCName" 
                            value={apiCName}
                            id="apiCName"
                            label="API Generic Name"
                            onChange={this.handleChange}
                            required />
                            <div className="grid-box">
                            <InputField 
                            type="text" 
                            name="consumer" 
                            value={consumer}
                            id="consumer"
                            label="Consumer"
                            onChange={this.handleChange}
                            required />
                        <InputField 
                            type="text" 
                            name="producer" 
                            value={producer}
                            id="producer"
                            label="Producer"
                            onChange={this.handleChange}
                            required />
                        <InputField 
                            type="text" 
                            name="state" 
                            value={state}
                            id="state"
                            label="State"
                            onChange={this.handleChange}
                             />
                        </div>
                        <InputField 
                            type="text" 
                            name="description" 
                            value={description}
                            id="description"
                            label="Description"
                            onChange={this.handleChange}
                            />
                    </div>
                    
                    <div className="url-div">
                        <InputField 
                            type="text" 
                            name="backendIP" 
                            value={backendIP}
                            id="backendIP"
                            label="Backend IP"
                            onChange={this.handleChange}
                            required />
                        <InputField 
                            type="text" 
                            name="port" 
                            value={port}
                            id="port"
                            label="Port"
                            onChange={this.handleChange}
                            required />
                        <InputField 
                            type="text" 
                            name="backendEndPoint" 
                            value={backendEndPoint}
                            id="backendEndPoint"
                            label="Backend Endpoint"
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className="url-verify-div">
                        <InputField 
                            type="text" 
                            name="urlReWritingWith" 
                            value={urlReWritingWith}
                            id="urlReWritingWith"
                            label="URLReWriting With"
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            required />
                        <InputField 
                            type="text" 
                            name="clientSecret" 
                            value={clientSecret}
                            id="clientSecret"
                            label="Client Secret"
                            onChange={this.handleChange}
                            required />
                        
                        <InputField 
                            type="text" 
                            name="isActive" 
                            value={isActive}
                            id="isActive"
                            label="isActive"
                            onChange={this.handleChange}
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
                                onChange={this.handleChange}
                                required />
                                
                            <div className="btn-container">
                                <CustomButton 
                                    className="btn"
                                    type="button"
                                    value="Verify Details"
                                />
                                <CustomButton 
                                    className="btn"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </div>
                </form>
                </div>
            </div>
            
        </div>
    )
    }
}


const mapDispatchToProps = (dispatch) => ({
    addApiToList:(apiItemDtls) => {
        dispatch({
            type:apiActionType.ADD_API,
            payload:apiItemDtls
        });
    }
});


export default connect(null,mapDispatchToProps)(ApiDetailPage);