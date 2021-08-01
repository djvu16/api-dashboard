import React,{Component} from "react";
import {connect} from 'react-redux';
//import ApiPreview from '../../components/api-preview/api-preview.component';
//import SideMenuBar from "../side-menu-bar/side-menu-bar.component";
import InputField from "../input-field/input-field.component";
import ApiNotFoundInstruction from "../api-not-found/api-not-found.component";
import CustomButton from "../custom-button/custom-button.component";
import ApiItem from "../api-item/api-item.component";
import { apiActionType } from "../../redux/actionType";

import './search-api.styles.scss';





class SearchApi extends Component{

    
    apiList=this.props.api.apiList;
    

    handleChange = (event) =>{
        event.preventDefault();
        const {name,value}=event.target;
        const searchParams={
            ...this.props.api.searchByParams,
            [name]:value
        }
        this.props.setSearchParams(searchParams);
    }
    handleResetBtnClick=(event)=>{
        event.preventDefault();
        const searchParams={
                searchByApiName:'',
                searchByConsumer:'',
                searchByProducer:''
            }
        this.props.setSearchParams(searchParams);
    }
    handleSubmit=event=>{
        event.preventDefault();
    }
    render(){
        let filteredApis=[];
        const { searchByApiName,searchByConsumer,searchByProducer}=this.props.api.searchByParams;
        console.log(this.props.api.searchByParams);
        filteredApis=this.apiList.filter( api =>{
            return(api.apiName.toLowerCase().includes(searchByApiName.toLowerCase()) && api.consumer.toLowerCase().includes(searchByConsumer.toLowerCase()) && api.producer.toLowerCase().includes(searchByProducer.toLowerCase())
            );
        });
        return(
            <div className="search">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                            <div className="search-key">
                                <InputField 
                                    type="text"
                                    label="API Name"
                                    name="searchByApiName" 
                                    value={searchByApiName}
                                    id="apiName"
                                    onChange={this.handleChange}
                                />
                                <InputField 
                                    type="text"
                                    label="Consumer"
                                    name="searchByConsumer" 
                                    value={searchByConsumer}
                                    id="consumer"
                                    onChange={this.handleChange}
                                />
                                <InputField 
                                    type="text"
                                    label="Producer"
                                    name="searchByProducer" 
                                    value={searchByProducer}
                                    id="producer"
                                    onChange={this.handleChange}
                                />
                                <CustomButton 
                                    type='button'
                                    value='Reset'
                                    onClick={this.handleResetBtnClick}
                                />
                            </div>
                    </form>
                    {
                        filteredApis.length ? filteredApis.map( ({id,...otherApiProps})=>
                        <ApiItem key={id} id={id} {...otherApiProps}/>
                        ) : <ApiNotFoundInstruction 
                                consumer={searchByConsumer}
                                producer={searchByProducer}
                                apiName={searchByApiName}
                            />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    api:state.api
});

const mapDispatchToProps = (dispatch) => ({
    setSearchParams:(searchParams) => {
        dispatch({
            type:apiActionType.SEARCH_BY_PARAMS,
            payload:searchParams
        });
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchApi);