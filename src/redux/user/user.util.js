import { signinValidation } from "../action/action-api"


export const authenticateUser = (user) =>{
    signinValidation(user)
    .then(response =>{
        
    })
    .catch(err =>{
        console.log(err);
    });
}