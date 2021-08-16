import { apiActionType } from "../actionType";

export const addNewApi= apiDtls =>({
    type:apiActionType.ADD_API,
    payload:apiDtls
});

export const updateApi = apiDtls => ({
    type:apiActionType.UPDATE_API,
    payload:apiDtls
});

export const deleteApi = apiId => ({
    type:apiActionType.REMOVE_API,
    payload:apiId
});

export const searchByParams= searchParams =>({
    type:apiActionType.SEARCH_BY_PARAMS,
    payload:searchParams
});

export const setApiList = () => ({
    type:apiActionType.SET_API_LIST
})