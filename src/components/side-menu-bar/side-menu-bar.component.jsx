import React from "react";
import { Link } from "react-router-dom";


//import styles
import "./side-menu-bar.styles.scss";

//import components
//import logo from '../../assets/pmjay-logo.png';

const SideMenuBar=(props)=>{
    return(
        <div className="side-menu-bar">
            <div className="options">
                <Link className="option" to="/onboard">Add API</Link>
                <Link className="option" to="/search">Search</Link>
                <Link className="option" to="/delete">Delete</Link>
            </div>   
        </div>
    )
}

export default SideMenuBar;