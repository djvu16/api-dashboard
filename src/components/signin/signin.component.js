import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import InputField from '../input-field/input-field.component';
import CustomSpan from '../custom-span/custom-span.component';
import CustomButton from '../custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';
import {userActionType} from '../../redux/actionType';

//import validation api
import { signinValidation } from '../../redux/action/user-action-api';
 
//import styles
import './signin.styles.scss'

const Signin = (props) => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const {setCurrentUser}=props;
    const [isLoading,setIsLoading]=useState(false);
    const history=useHistory();

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
        setIsLoading(true);
        const user={
            email:userName,
            password:password
        }
       //user authentication being done here
        signinValidation(user)
        .then(result=>{
            setIsLoading(false);
            setCurrentUser({
                currentUser:result.email,
                isAuthenticated:result.isAuthenticated,
                userAuthJwtToken:result.token
            });
            history.replace("/home");
        })
        .catch(err=>{
            setIsLoading(false);
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
                        type="button"
                        id="resetBtn"
                        name="resetBtn"
                        onClick={handleResetClick}
                    >Reset</CustomButton>
                    <CustomButton 
                        type="submit"
                        id="submitBtn"
                        name="submitBtn"
                    >{isLoading ? <Spinner /> : 'Login'}</CustomButton>
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