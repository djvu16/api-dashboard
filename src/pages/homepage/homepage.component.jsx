import React from "react";
import {connect} from 'react-redux';

//import styles
import "./homepage.styles.scss";
//import components
import SideMenuBar from "../../components/side-menu-bar/side-menu-bar.component";
import MainPage from "../../components/main-page/main-page.component";


const HomePage =(props)=>{

    console.log(props);
    return(
        <div className="home-page">
            <SideMenuBar />
            <div className="home-page-content">
                <MainPage 
                    API_DATA={props.apiList}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    apiList:state.api.apiList
});

export default connect(mapStateToProps)(HomePage);