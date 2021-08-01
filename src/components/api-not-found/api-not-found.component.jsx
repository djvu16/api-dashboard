import React from 'react';


//import scss
import './api-not-found.styles.scss';


const ApiNotFoundInstruction = (props) => {
    const {id,apiName,consumer,producer} = props;
    return(
        <div className='api-not-found'>
            <p className='instruction'>No api found with {id ? `ID:${id}` : null} {apiName.length ? `API Name:${ apiName }`: null}  {consumer.length ? `Consumer:${ consumer }`: null}  {producer.length ? `and Producer:${ producer }`: null}</p>
        </div>
    )
}

export default ApiNotFoundInstruction;