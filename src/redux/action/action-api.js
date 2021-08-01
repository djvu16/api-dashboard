import axios from 'axios';

export const signinValidation =async (data) => {
    return new Promise((resolve,reject)=>{
        axios.post(
            `http://localhost:3001/signin`,
            data,
            {header:{"Content-Type": "application/json"}}
        ).then(response=>{
            const {status,data} = response;
            if(status===200){
                resolve(data);
            }
        }).catch(err=>{
            reject(err);
        });
    });
    /* console.log("checkpoint2");
    const response=await axios.post('http://localhost:3001/signin',data,{header:{"Content-Type": "application/json"}});
    console.log(response); */
}

