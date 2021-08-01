import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

//import components
import InputField from '../input-field/input-field.component';
import CustomSpan from '../custom-span/custom-span.component';

//import validation api
import { signinValidation } from '../../redux/action/action-api';
 
//import styles
import './signin.styles.scss'

const Signin = (props) => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const {currentUser,setCurrentUser}=props;


    useEffect(()=>{
        
    },[]);
    const handleForgotPassClick = () => {

    }
    const handleResetClick = () => {
        setUserName('');
        setPassword('');
    }

    const handleChange=(event) =>{
        event.preventDefault();
        const {name,value}=event.target;
        if(name==="userName")
            setUserName(value);
        if(name==="password")
            setPassword(value);
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        if(userName==='' || userName===null){
            alert("Please enter a valid Username and Password");
            setUserName('');
            setPassword('');
            return;
        }else if(userName !=='' && password===''){
            alert("Please enter your password");
            setPassword('');
            return;
        }
        const user={
            username:userName,
            password:password
        }
        signinValidation(user)
        .then(res=>{
           console.log(res);
            setCurrentUser(true);
        })
        .catch(err=>{
            console.log(err);
        });
        
        setUserName('');
        setPassword('');
    }

    return(
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                    <InputField 
                        type="text"
                        name="userName"
                        id="userName"
                        label="Username"
                        value={userName}
                        onChange={handleChange}
                    />
                    <InputField 
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={handleChange}
                    />
                <div className="btn-container">
                    <CustomSpan 
                        id="forgot-pass"
                        name="forgotPass"
                        value="Forgot Password?"
                        onClick={handleForgotPassClick}
                    />
                    <CustomButton 
                        value="Reset"
                        type="button"
                        id="resetBtn"
                        name="resetBtn"
                        onClick={handleResetClick}
                    />
                    <CustomButton 
                        value="Login"
                        type="submit"
                        id="submitBtn"
                        name="submitBtn"
                    />
                </div>
            </form>
                <Link to="/signup">
                    <CustomSpan 
                        id="forgot-pass"
                        name="forgotPass"
                        value="Dont have an account?Click here to signup"
                        onClick={handleForgotPassClick}
                    />
                </Link>
        </div>
    )
}

export default Signin;