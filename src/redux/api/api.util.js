export const addApiToList=(apiList,apiDtlsToAdd)=>{
    const isExists = apiList.find(api => api.id===apiDtlsToAdd.id);
    if(!isExists){
        return [...apiList,apiDtlsToAdd];
    }else{
        return;
    }
}

export const removeApiFromList = (apiList,apiIdToRemove)=>{
    const isExists = apiList.find(api => api.id===apiIdToRemove);
    if(!isExists){
        return;
    }else{
        return apiList.filter(api => api.id!== apiIdToRemove);
    }
}

export const updateApi = (apiList,api) =>{
    
}