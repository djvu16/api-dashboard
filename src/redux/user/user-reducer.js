const { userActionType } = require("../actionType");

const INITIAL_STATE={
    currentUser:null,
    isAuthenticated:false
}

const userReducer=(state=INITIAL_STATE,action)=>{ 
    switch(action.type){
        case userActionType.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload.currentUser,
                isAuthenticated:action.payload.isAuthenticated
            }
        default:
            return state;
    }
}


export default userReducer;