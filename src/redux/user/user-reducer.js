const { userActionType } = require("../actionType");

const INITIAL_STATE={
    currentUser:localStorage.getItem('currentUser'),
    isAuthenticated:localStorage.getItem('isAuthenticated'),
    userAuthJwtToken:localStorage.getItem('userAuthJwtToken')
}

const userReducer=(state=INITIAL_STATE,action)=>{ 
    switch(action.type){
        case userActionType.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload.currentUser,
                isAuthenticated:action.payload.isAuthenticated,
                userAuthJwtToken:action.payload.userAuthJwtToken
            }
        default:
            return state;
    }
}


export default userReducer;