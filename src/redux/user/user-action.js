import { userActionType } from "../actionType";


export const setCurrentUser = (user) =>({
    type:userActionType.SET_CURRENT_USER,
    payload:user
});


export const logoutCurrentUser = (user) => ({
    type:userActionType.LOGOUT_CURRENT_USER,
    payload:user
});