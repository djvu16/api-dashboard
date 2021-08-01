import React from 'react';
//import component
import Signin from '../../components/signin/signin.component';


//import styles
import './signin-signup-page.styles.scss';

const SigninSignupPage = (props) =>{
    const {currentUser,setCurrentUser}=props;
    return(
        <div>
            <Signin 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
        </div>
    )

}

export default SigninSignupPage;