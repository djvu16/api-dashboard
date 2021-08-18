import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import InputField from '../input-field/input-field.component';
import CustomSpan from '../custom-span/custom-span.component';
import CustomButton from '../custom-button/custom-button.component';
import {userActionType} from '../../redux/actionType';

//import validation api
import { signinValidation } from '../../redux/action/user-action-api';
 
//import styles
import './signin.styles.scss'

const Signin = (props) => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const {setCurrentUser}=props;


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
            email:userName,
            password:password
        }
       //user authentication being done here
        signinValidation(user)
        .then(result=>{
            setCurrentUser({
                currentUser:result.email,
                isAuthenticated:result.isAuthenticated
            });
            props.history.push("/home");
        })
        .catch(err=>{
            alert(err);
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

const mapStateToProps = (state) =>({
    currentUser:state.currentUser
});

const mapDispatchToProps =( dispatch ) =>({
    setCurrentUser:(user) =>{
            dispatch({
            type:userActionType.SET_CURRENT_USER,
            payload:user
        });
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Signin);