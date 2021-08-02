import React from "react";
import { Link } from 'react-router-dom';

//import styles for the page
import './header.styles.scss';

//import the components
import logo from '../../assets/pmjay-logo.png';

const Header=({currentUser,setCurrentUser})=>{
    
    return(
        <div className="header">
            <div className={`logo-container${currentUser ? '' : '-logout'}`}>
                    <img className="pmjay-logo-img" src={''} alt="logo" />
                    <span className="heading">{currentUser ? 'Dashboard':'Dashboard'}</span>
            </div>
            <div className="options">
                <Link className="option" to="/">Home</Link>
                {
                    currentUser ? 
                        <Link className="option" onClick={()=>setCurrentUser(false)}>LogOut</Link>
                        :
                        <Link className="option" to="/signin">Login</Link>
                }
                
            </div>
        </div>
    )
}

export default Header;