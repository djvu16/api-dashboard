import React from "react";

//import components
import InputField from "../input-field/input-field.component";
import CustomLabel from '../custom-label/custom-label.component';

//import styles
import "./main-page.styles.scss";

//import data


const MainPage=(props)=>{
    const {API_DATA}=props;

    const apiList=API_DATA;

    const totalNoOfApi = (apiList) =>{
        return (apiList.length)
    }

    const totalNoOfConsumer = (apiList) => {
        const consumerList=apiList.map(api => api.consumer).reduce((previous,a)=>{
            if(!(previous.find(consumer => consumer===a))){
                previous.push(a);
            }
            return previous;
        },[]);
        return(consumerList.length);
        }
    
    const totalNoOfProducer = () => {
        const producerList=apiList.map(api => api.producer).reduce((previous,a)=>{
            if(!(previous.find(producer => producer===a))){
                previous.push(a);
            }
            return previous;
        },[]);
        return(producerList.length);
    }

    return(
        <div className="main-page">
            <h1>Dashboard Overview</h1>
            <div className="dashboard-overview">
                <CustomLabel 
                    value={"Total No Of Apis"}
                />
                <InputField
                    type="text"
                    value={totalNoOfApi(apiList)}
                    readOnly
                />
                <CustomLabel 
                    value={"Total No Of Producers"}
                />
                <InputField
                    type="text"
                    value={totalNoOfProducer(apiList)}
                    readOnly
                />
                <CustomLabel 
                    value={"Total No Of Consumers"}
                />
                <InputField
                    type="text"
                    value={totalNoOfConsumer(apiList)}
                    readOnly
                />
            </div>
        </div>
    )
}

export default MainPage;