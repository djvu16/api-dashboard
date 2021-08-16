import React from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
//import styles for the page
import './header.styles.scss';

//import the components
import {userActionType} from '../../redux/actionType';
import CustomSpan from "../custom-span/custom-span.component";

const Header=(props)=>{
    const {currentUser,isAuthenticated,setCurrentUser} = props
    
    const logoutCurrentUser = (props) =>{
        const userToken=localStorage.getItem('userAuthJwtToken');
        if(userToken){
            localStorage.removeItem('userAuthJwtToken');
            setCurrentUser({
                currentUser:null,
                isAuthenticated:false
            });
        }
    }
    return(
        <div className="header">
            <div className="options">
                <Link className="option" to="/">Home</Link>
                {
                    isAuthenticated ?
                        <div>
                        <CustomSpan value={currentUser}/>
                        <Link className="option" to="/signin" onClick={logoutCurrentUser}>Signout</Link>
                        </div>
                        :
                        <Link className="option" to="/signin">Login</Link>
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