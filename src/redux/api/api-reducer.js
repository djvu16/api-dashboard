import { apiActionType } from "../actionType";
import {addApiToList,removeApiFromList,updateApi} from './api.util';

const INITIAL_STATE={
    apiList:{
        count:0,
        apiDtls:[]
    },
    searchByParams:{
        searchByApiName:'',
        searchByConsumer:'',
        searchByProducer:''
    }
}

const apiReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case apiActionType.ADD_API:
            return{
                ...state,
                apiList:addApiToList(state.apiList,action.payload)
            };
        case apiActionType.REMOVE_API:
            return{
                ...state,
                apiList:removeApiFromList(state.apiList,action.payload)
            };
        case apiActionType.UPDATE_API:
            return{
                ...state,
                apiList:updateApi(state.apiList,action.payload)
            };
        case apiActionType.SEARCH_BY_PARAMS:
            return{
                ...state, 
                searchByParams:{
                            ...state.searchByParams,
                            searchByApiName:action.payload.searchByApiName,
                            searchByConsumer:action.payload.searchByConsumer,
                            searchByProducer:action.payload.searchByProducer
                    }
            };
        case apiActionType.SET_API_LIST:
            return {
                ...state,
                apiList:{
                    ...state.apiList,
                    count:action.payload.count,
                    apiDtls:action.payload.apiDtls
                }
            };
        default:return state;
    }
}

export default apiReducer;