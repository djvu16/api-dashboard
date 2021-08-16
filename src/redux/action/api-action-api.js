import axios from "axios";


export const getAllApiDataList=async () =>{
    return new Promise((resolve,reject)=>{
        axios.get(
            `https://cryptic-hollows-56178.herokuapp.com/api`,
            {
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${localStorage.getItem('userAuthJwtToken')}`
                }
            }
        )
        .then(response=>{
            const {status,data}=response;
            if(status===200){
               /*  console.log(data); */
                resolve(data);
            }
        })
        .catch(err=>{
            reject(err);
        })
    });
       /* try{
           const response= await axios.get(
            `https://cryptic-hollows-56178.herokuapp.com/api`,
            {
                token:localStorage.getItem("userAuthJwtToken")
            },
            {
                header:{
                    "Content-Type": "application/json"
                }
            }
        )
        /* console.log(response);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        alert(error);
    } */
}

export const postSaveNewApi = async (api) => {
    new Promise((resolve,reject) => {
        axios.post(
            `https://cryptic-hollows-56178.herokuapp.com/api`,
            {
                apiName:api.apiName,
                apiCName:api.apiCName,
                backendIP:api.backendIP,
                port:api.port,
                backendEndPoint:api.backendEndPoint,
                urlReWritingWith:api.urlReWritingWith,
                fullBackendUrl:api.fullBackendUrl,
                gatewayUrl:api.gatewayUrl,
                consumer:api.consumer,
                producer:api.producer,
                state:api.state,
                description:api.description,
                clientId:api.clientId,
                clientSecret:api.clientSecret,
                isActive:api.isActive,
                registeredBy:api.registeredBy
            },
            {
                headers:{"Content-Type": "application/json",
                        "Authorization":`Bearer ${localStorage.getItem('userAuthJwtToken')}`
                    }
            }
        )
        .then(response=>{
            console.log(response);
            const {status,data} = response;
            if(status===201){
                resolve(data);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    });
}