import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const CustomRoute = (props) => {
    const {isAuthenticated,...otherProps} = props;
    return(isAuthenticated ? <Route {...otherProps}/> : <Redirect to="/" />) 
}

export default CustomRoute;