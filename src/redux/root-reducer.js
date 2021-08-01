import { combineReducers } from "redux";
import userReducer from './user/user-reducer';
import apiReducer from './api/api-reducer';

export default combineReducers(
    {
        user:userReducer,
        api:apiReducer
    }
);