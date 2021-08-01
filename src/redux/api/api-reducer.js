import { apiActionType } from "../actionType";
import {addApiToList,removeApiFromList,updateApi} from './api.util';
import API_DATA from './api-data';


const INITIAL_STATE={
    apiList:API_DATA,
    searchByParams:{
        searchByApiName:'',
        searchByConsumer:'',
        searchByProducer:''
    }
}

const apiReducer=(state=INITIAL_STATE,action) => {
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
        default:return state;
    }
}

export default apiReducer;