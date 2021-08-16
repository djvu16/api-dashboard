import React from "react";

//import components
import InputField from "../input-field/input-field.component";
import CustomLabel from '../custom-label/custom-label.component';

//import styles
import "./main-page.styles.scss";

//import data


const MainPage=(props)=>{
    const {apiOverviewDtls}=props;
    const {count,apiDtls}=apiOverviewDtls; 

    const totalNoOfApi = () =>{
        return count;
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
    
    const totalNoOfProducer = (apiList) => {
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
                    value={totalNoOfApi()}
                    readOnly
                />
                <CustomLabel 
                    value={"Total No Of Producers"}
                />
                <InputField
                    type="text"
                    value={totalNoOfProducer(apiDtls)}
                    readOnly
                />
                <CustomLabel 
                    value={"Total No Of Consumers"}
                />
                <InputField
                    type="text"
                    value={totalNoOfConsumer(apiDtls)}
                    readOnly
                />
            </div>
        </div>
    )
}

export default MainPage;