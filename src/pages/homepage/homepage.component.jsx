import React,{useEffect,useState} from "react";
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

//import styles
import "./homepage.styles.scss";
//import components
import SideMenuBar from "../../components/side-menu-bar/side-menu-bar.component";
import MainPage from "../../components/main-page/main-page.component";
import Backdrop from '../../components/backdrop/backdrop.component';
import Spinner from '../../components/spinner/spinner.component';
import { apiActionType } from "../../redux/actionType";
import { getAllApiDataList } from "../../redux/action/api-action-api";

const HomePage =(props)=>{
    let {apiList,setApiList}=props;
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        const getAllApiSummary = async () => {
        getAllApiDataList()
        .then(data=>{
            setIsLoading(false);
            setApiList(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    setIsLoading(true);
    getAllApiSummary();
    }, [setApiList]);


    return(
        <div className="home-page">
            <SideMenuBar />
            {isLoading && ReactDOM.createPortal(<Backdrop />,document.getElementById('backdrop-root')) } 
            {isLoading ? ReactDOM.createPortal(<Spinner />,document.getElementById('overlay-root')) :
            <div className="home-page-content">
                <MainPage 
                    apiOverviewDtls={apiList}
                />
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) =>({
    apiList:state.api.apiList
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