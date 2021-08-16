import React,{useEffect} from "react";
import {connect} from 'react-redux';

//import styles
import "./homepage.styles.scss";
//import components
import SideMenuBar from "../../components/side-menu-bar/side-menu-bar.component";
import MainPage from "../../components/main-page/main-page.component";
import { apiActionType } from "../../redux/actionType";
import { getAllApiDataList } from "../../redux/action/api-action-api";

const HomePage =(props)=>{
    let {isAuthenticated,history,apiList,setApiList}=props;
    
    useEffect(() => {
        const getAllApiSummary = async () => {
        getAllApiDataList()
        .then(data=>{
            setApiList(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    getAllApiSummary();
    }, [setApiList]);

    return(
        <div className="home-page">
            <SideMenuBar />
            <div className="home-page-content">
                <MainPage 
                    apiOverviewDtls={apiList}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    apiList:state.api.apiList,
    isAuthenticated:state.user.isAuthenticated
});

const mapDispatchToProps=(dispatch) =>({
    setApiList:(data)=>{
            dispatch({
            type:apiActionType.SET_API_LIST,
            payload:data
        });
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);