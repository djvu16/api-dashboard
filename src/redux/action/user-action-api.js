import axios from 'axios';

export const signinValidation =async (data) => {
    return new Promise((resolve,reject)=>{
        axios.post(
            `https://cryptic-hollows-56178.herokuapp.com/user/login`,
            data,
            {header:{"Content-Type": "application/json"}}
        ).then(response=>{
            console.log(response);
            const {status,data} = response;
            if(status===200){
                localStorage.setItem("userAuthJwtToken",data.token);
                resolve(data);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}

export const userPostSignup =async (user) =>{
    return new Promise((resolve,reject)=>{
        axios.post(
            `https://cryptic-hollows-56178.herokuapp.com/user/signup`,
            {
                email:user.email,
                password:user.password
            },
            {
                header:{"Content-Type": "application/json"}
            }
        )
        .then(response=>{
            console.log(response);
            const {status,data} = response;
            if(status===200){
                resolve(data);
            }
        })
        .catch(err=>{
            reject(err);
        })
    })
}

