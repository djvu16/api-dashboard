import React,{useState} from "react";


//import Component
import InputField from "../input-field/input-field.component";
import CustomLabel from "../custom-label/custom-label.component";
import CustomButton from "../custom-button/custom-button.component";

//import styles
import './signup.styles.scss';

const Signup = (props) => {
    const [user,setUser]=useState({
        username:'',
        password:'',
        confirmPass:''
    });

    const {username,password,confirmPass} = user;
    const handleChange = event => {
        event.preventDefault();
        const {name,value}=event.target;
        setUser({...user,[name]:value});
        console.log(username,password,confirmPass);
    }
    const handleSubmit = event => {
        event.preventDefault();
        
    }
    const handleResetClick= event =>{
        event.preventDefault();
        setUser({...user,username:'',password:'',confirmPass:''});
    }
    return(
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <CustomLabel 
                    type="text"
                    value="Email"
                    name="userNameLabel"
                    id="userNameLabel"
                />
                <InputField 
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                />
                <CustomLabel
                    type="text"
                    value="Password"
                    name="passLabel"
                    id="passLabel"
                />
                <InputField 
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                />
                <CustomLabel
                    type="text"
                    value="Confirm Password"
                    name="confirmPassLabel"
                    id="confirmPassLabel"
                />
                <InputField 
                    type="password"
                    name="confirmPass"
                    id="confirmPass"
                    value={confirmPass}
                    onChange={handleChange}
                />
                <div className="btn-container">
                    <CustomButton 
                        type="button"
                        value="Reset"
                        onClick={handleResetClick}
                    />
                    <CustomButton 
                        type="submit"
                        value="Signup"
                    />
                </div>
            </form>
        </div>
    )
}

export default Signup;