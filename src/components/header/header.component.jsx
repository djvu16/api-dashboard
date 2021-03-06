import React,{Fragment} from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
//import styles for the page
import './header.styles.scss';

//import the components
import {userActionType} from '../../redux/actionType';
import CustomSpan from "../custom-span/custom-span.component";

const Header=(props)=>{
    const {currentUser,isAuthenticated,setCurrentUser} = props
    
    const logoutCurrentUser = () =>{
        const userToken=localStorage.getItem('userAuthJwtToken');
        if(userToken){
            localStorage.removeItem('userAuthJwtToken');
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isAuthenticated');
            setCurrentUser({
                currentUser:'',
                isAuthenticated:false,
                userAuthJwtToken:''
            });
        }
    }
    return(
        <div className="header">
            <div className="options">
                {
                    isAuthenticated &&
                        <Fragment>
                        <CustomSpan value={currentUser}/>
                        <Link className="option" to="/" onClick={logoutCurrentUser}>Signout</Link>
                        </Fragment>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser,
    isAuthenticated:state.user.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser:(user) => {
        dispatch({
            type:userActionType.SET_CURRENT_USER,
            payload:user
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);